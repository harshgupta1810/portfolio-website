// Load environment variables
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const basicRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const { authenticateWithToken } = require('./routes/middleware/auth');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;
// Pretty-print JSON responses
app.enable('json spaces');
// We want to be consistent with URL paths, so we enable strict routing
app.enable('strict routing');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Authentication routes
app.use(authenticateWithToken);
app.use(authRoutes);

// Database connection with retry logic (only if DATABASE_URL is provided)
if (process.env.DATABASE_URL) {
  const connectWithRetry = () => {
    mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((err) => {
        console.error(`Database connection error: ${err.message}`);
        console.log('Retrying connection in 5 seconds...');
        setTimeout(connectWithRetry, 5000);
      });
  };

  connectWithRetry();
} else {
  console.log("No DATABASE_URL provided, running without database");
}

// Session configuration - use in-memory store if no database connection
const sessionConfig = {
  secret: process.env.SESSION_SECRET || 'fallback-secret-key',
  resave: false,
  saveUninitialized: false,
};

if (process.env.DATABASE_URL) {
  sessionConfig.store = MongoStore.create({
    mongoUrl: process.env.DATABASE_URL,
    touchAfter: 24 * 3600 // time period in seconds
  });
}

app.use(session(sessionConfig));

app.on("error", (error) => {
  console.error(`Server error: ${error.message}`);
  console.error(error.stack);
});

// Logging session creation and destruction
app.use((req, res, next) => {
  const sess = req.session;
  // Make session available to all views
  res.locals.session = sess;
  if (!sess.views) {
    sess.views = 1;
    console.log("Session created at: ", new Date().toISOString());
  } else {
    sess.views++;
    console.log(
      `Session accessed again at: ${new Date().toISOString()}, Views: ${sess.views}, User ID: ${sess.userId || '(unauthenticated)'}`,
    );
  }
  next();
});

// Basic Routes
app.use(basicRoutes);
// Authentication Routes
app.use('/api/auth', authRoutes);

// If no routes handled the request, it's a 404
app.use((req, res, next) => {
  res.status(404).send("Page not found.");
});

// Error handling
app.use((err, req, res, next) => {
  console.error(`Unhandled application error: ${err.message}`);
  console.error(err.stack);
  res.status(500).send("There was an error serving your request.");
});

// Check if port is in use before starting server
const checkPort = (port) => {
  return new Promise((resolve, reject) => {
    const server = app.listen(port)
      .on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          console.log(`Port ${port} is busy, trying ${port + 1}`);
          server.close();
          resolve(checkPort(port + 1));
        } else {
          reject(err);
        }
      })
      .on('listening', () => {
        console.log(`Server running at http://localhost:${port}`);
        resolve(server);
      });
  });
};

checkPort(port).catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});