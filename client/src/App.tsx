import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Experience } from "./pages/Experience"
import { Skills } from "./pages/Skills"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App