import { motion } from "framer-motion"
import { ProjectCard } from "@/components/ProjectCard"
import { ProjectFilters } from "@/components/ProjectFilters"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type Project = {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  githubLink: string
  impact: string
  results: string[]
  longDescription?: string
}

const projects: Project[] = [
  {
    "id": 1,
    "title": "SmartCommodities : AI Based Commodity Price Predictor",
    "description": "A machine learning-based project that forecasts commodity prices using advanced algorithms.",
    "longDescription": "SmartCommodities is a project designed to predict commodity prices by leveraging advanced machine learning techniques. The project includes data collection, exploratory data analysis (EDA), model training, and performance evaluation. It provides insights into trends in commodity prices and applies various machine learning models for price forecasting, aiming to deliver accurate predictions and improve decision-making for traders and analysts.",
    "image": "SmartCommodities.jpg",
    "category": "Deep Learning",
    "technologies": ["pandas", "numpy", "scikit-learn", "matplotlib", "seaborn","Regression Models","Model Evaluation","Automation","Financial Data Analysis"],
    "githubLink": "https://github.com/harshgupta1810/commodity_price_prediction",
    "impact": "Helps in predicting commodity prices using machine learning, providing valuable insights into market trends, and offering a tool for improving trading decisions and forecasting accuracy.",
    "results": [
      "Data Collection: Automated scripts for gathering and preprocessing commodity price data from various sources.",
      "Exploratory Data Analysis: Visualizations and statistical analyses uncovering insights and trends within the dataset.",
      "Model Development: Applied various machine learning algorithms to predict commodity prices with high accuracy.",
      "Performance Evaluation: Comprehensive metrics and visualizations to assess model performance and prediction accuracy."
    ]
  },
  {
    "id": 2,
    "title": "Vigilant Sentinel : intelligent video surveillance system",
    "description": "An intelligent video surveillance system for real-time anomaly detection in video streams.",
    "longDescription": "Vigilant Sentinel is an AI-powered video surveillance system designed to detect abnormal events in real-time video streams. Leveraging neural networks and computer vision techniques, it processes live video to identify anomalies, providing an automated solution for enhanced security monitoring.",
    "image": "/Vigilant Sentinel.jpg",
    "category": "Computer Vision",
    "technologies": ["Python", "Keras", "OpenCV", "NumPy", "Imutils"],
    "githubLink": "https://github.com/harshgupta1810/VigilantSentinel.git",
    "impact": "75% faster anomaly detection compared to traditional methods.",
    "results": [
        "Accuracy: Achieved precise detection of anomalies with minimal false positives.",
        "Efficiency: Reduced video analysis time by 50%, enabling real-time monitoring.",
        "Scalability: Designed to handle various environments, from malls to streets.",
        "Impact: Improved security monitoring through real-time anomaly detection."
    ]
},
{
  "id": 3,
  "title": "Poetic Prowess: Rap Generator",
  "description": "Generate rap lyrics using AI-powered models.",
  "longDescription": "Poetic Prowess is an AI-driven Rap generator that combines Markov chains and LSTM neural networks to compose rap lyrics. It leverages a custom database of hip-hop artist lyrics to generate unique and creative verses based on user prompts. The project features a backend for training and generation, along with a frontend for user interaction.",
  "image": "/PoeticProwess.jpg",
  "category": "NLP",
  "technologies": ["Python", "TensorFlow", "Markov Chains", "Flask", "LSTM","NLP"],
  "githubLink": "https://github.com/harshgupta1810/Poetry_Generator",
  "impact": "85% coherence score for generated lyrics, empowering creative exploration.",
  "results": [
    "Creativity: Produced thousands of unique rap lines to aid in songwriting.",
    "Efficiency: Reduced time spent brainstorming lyrics by providing AI-generated ideas.",
    "Versatility: Supported a wide variety of prompts for personalized lyric generation.",
    "Impact: Highlighted the creative potential of AI in the music industry."
  ]
},
{
  "id": 4,
  "title": "Music Maestro: Genre Classification",
  "description": "Predict music genres using AI-powered models.",
  "longDescription": "Music Maestro is a deep learning project designed to classify music genres accurately. It combines Artificial Neural Networks (ANNs) and Convolutional Neural Networks (CNNs) trained on the GTZAN dataset to differentiate between various music styles. The project features a backend for model training and predictions, as well as a Flask-based frontend for user interaction.",
  "image": "/MusicMaestro.jpg",
  "category": "Deep Learning",
  "technologies": ["Python", "TensorFlow", "Keras", "Flask", "Librosa"],
  "githubLink": "https://github.com/harshgupta1810/music_genre_classification",
  "impact": "Enhanced genre prediction accuracy with over 90% on the test dataset.",
  "results": [
    "Accuracy: Achieved state-of-the-art performance on the GTZAN dataset.",
    "Usability: Provided an interactive web interface for genre classification.",
    "Scalability: Extended the model for real-time predictions on user-uploaded audio files.",
    "Innovation: Combined ANN and CNN approaches for robust classification."
  ]
},
{
  "id": 5,
  "title": "Paddle Wars: The battle for paddle supremacy",
  "description": "Relive the classic arcade experience with this two-player Pong game.",
  "longDescription": "The Paddle Wars is a simple yet engaging project built using the LÖVE2D framework and Lua. It replicates the timeless Pong arcade game, where two players compete to score points by hitting the ball back and forth with paddles. This project demonstrates basic game mechanics, collision detection, and state management in game development.",
  "image": "\PaddleWars.webp",
  "category": "Game Development",
  "technologies": ["Lua", "LÖVE2D"],
  "githubLink": "https://github.com/harshgupta1810/pingpong_using_lua",
  "impact": "Recreated the classic Pong experience with modern scalability and resolution handling.",
  "results": [
    "Gameplay: Seamless two-player mode with responsive paddle controls.",
    "Graphics: Integrated virtual resolution scaling for compatibility with various screen sizes.",
    "User Experience: Added sound effects and UI transitions for an immersive experience.",
    "Educational Value: Demonstrated key concepts like object-oriented programming and game state management."
  ]
},
{
  "id": 6,
  "title": "Dragon's Quest: Flappy Bird Reimagined",
  "description": "Navigate a bird through challenging obstacles in this engaging 2D side-scroller.",
  "longDescription": "Dragon's Quest is a reimagined take on the classic Flappy Bird game, built using the LÖVE2D framework and Lua. Players control a bird, navigating it through a series of pipes by tapping the spacebar to stay airborne. With its dynamic gameplay, state management, and scoring mechanics, the game offers an exciting challenge while showcasing key game development concepts.",
  "image": "\DragonsQuest.jpg",
  "category": "Game Development",
  "technologies": ["Lua", "LÖVE2D"],
  "githubLink": "https://github.com/harshgupta1810/dragonsquest",
  "impact": "Revitalized the Flappy Bird concept with added features and scalable design.",
  "results": [
    "Gameplay: Smooth controls and collision detection for an engaging experience.",
    "Graphics: Added scrolling background and scalable resolution support for visual appeal.",
    "User Experience: Included sound effects and state-based UI transitions for immersion.",
    "Educational Value: Demonstrated advanced game development concepts like state machines, object-oriented programming, and procedural obstacle generation."
  ]
},
{
  "id": 7,
  "title": "Audio Alchemy: Audio Classification using MFCC and Neural Networks",
  "description": "Classify urban sounds into 10 categories using neural networks and MFCCs.",
  "longDescription": "Audio Alchemy is a project that leverages Mel-Frequency Cepstral Coefficients (MFCC) and neural networks to classify urban sounds. Using the UrbanSound8K dataset, the project demonstrates audio preprocessing, feature extraction, and classification with an interactive frontend built on Flask.",
  "image": "\AudioAlchemy.jpeg",
  "category": "Deep Learning",
  "technologies": ["Python", "TensorFlow", "Librosa", "Flask",],
  "githubLink": "https://github.com/harshgupta1810/Audio_Classification-",
  "impact": "Showcased practical applications of audio classification with a robust frontend-backend pipeline.",
  "results": [
    "Model Accuracy: Achieved high classification accuracy using neural networks.",
    "Dataset Handling: Successfully preprocessed and extracted features from UrbanSound8K.",
    "Frontend: Developed a user-friendly Flask application for real-time audio classification.",
    "Educational Value: Demonstrated advanced ML techniques like feature engineering and model deployment."
  ]
},
{
  "id": 8,
  "title": "Empath-o-Tron: Face Sentiment Analysis",
  "description": "Recognize facial expressions using deep learning models trained on FER datasets.",
  "longDescription": "Empath-o-Tron is a deep learning project that classifies facial expressions into 8 emotional categories using the Facial Expression Recognition Challenge dataset. It demonstrates data preprocessing, model architecture design, training, and evaluation, and provides insights into real-world applications of facial emotion recognition.",
  "image": "\Empath-o-Tron.jpg",
  "category": "Deep Learning",
  "technologies": ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  "githubLink": "https://github.com/harshgupta1810/face_sentiment",
  "impact": "Developed a robust deep learning model to classify facial expressions, paving the way for applications in human-computer interaction, psychology, and social research.",
  "results": [
    "Model Accuracy: Achieved competitive accuracy on the validation dataset.",
    "Dataset Handling: Preprocessed 35,000 images from the FER dataset with one-hot encoding and augmentation.",
    "Model Design: Implemented a CNN with ELU activation and dropout layers for optimal performance.",
    "Educational Value: Provided an example of end-to-end deep learning implementation for emotion detection."
  ]
},
{
  "id": 9,
  "title": "Insightful Oracle: Gender Age Prediction",
  "description": "Estimate gender and age from facial images using deep learning models trained on the UTKFace dataset.",
  "longDescription": "Insightful Oracle is a deep learning project that predicts gender and age from facial images. It utilizes the UTKFace dataset, which includes over 20,000 annotated images spanning a wide range of ages, genders, and ethnicities. The project demonstrates data preprocessing, model training, evaluation, and real-world applications for demographic analysis.",
  "image": "\Insightful-Oracle.jpg",
  "category": "Deep Learning",
  "technologies": ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib", "Pandas"],
  "githubLink": "https://github.com/harshgupta1810/Gender_Age_Prediction-",
  "impact": "Developed a reliable model for gender and age prediction, enabling applications in demographic studies, marketing, and identity verification.",
  "results": [
    "Model Performance: Achieved accurate predictions of gender and age on the validation dataset.",
    "Dataset Handling: Preprocessed over 20,000 images from the UTKFace dataset, including resizing and normalization.",
    "Model Design: Built a convolutional neural network with dual-output for simultaneous gender and age predictions.",
    "Practical Application: Demonstrated robust real-world use cases such as personalized marketing and demographic analysis."
  ]
},
{
  "id": 10,
  "title": "Asana Analyzer: Yoga Pose Predictor",
  "description": "Classify yoga poses from images using deep learning techniques with TensorFlow and Keras.",
  "longDescription": "Asana Analyzer is a machine learning project that classifies yoga poses from images. The project includes both backend and frontend components, where the backend handles model training and image classification, and the frontend provides a user-friendly interface for interaction. It uses the 'yoga-pose-image-classification-dataset' and employs techniques like transfer learning, data augmentation, and TensorFlow to train the model. The system is integrated with a Flask-based web application for easy usage.",
  "image": "AsanaAnalyzer.jpg",
  "category": "Computer Vision",
  "technologies": ["Python","TensorFlow","Keras","Flask","HTML","CSS","JavaScript","NumPy","Matplotlib","Pillow"],
  "githubLink": "https://github.com/harshgupta1810/Yoga_Pose_Predictor",
  "impact": "Built an image classification model for yoga pose recognition, enabling automatic classification of yoga poses in real-time with a user-friendly web interface.",
  "results": [
    "Model Performance: Achieved accurate predictions of yoga poses using transfer learning with InceptionResNetV2.",
    "Dataset Handling: Preprocessed and augmented yoga pose images to improve model generalization and accuracy.",
    "Model Design: Built a deep learning model with custom classification layers on top of a pre-trained InceptionResNetV2 model.",
    "Practical Application: Enabled real-time yoga pose prediction via a web interface for educational and fitness purposes."
  ]
},
{
  "id": 11,
  "title": "T20 World Cup Analysis Project",
  "description": "Analyze T20 World Cup cricket data using Python for processing and Power BI for visualizations.",
  "longDescription": "The T20 World Cup Analysis Project provides a comprehensive exploration of cricket data, offering actionable insights into player performances, match outcomes, and team strategies. This project combines Python for data analysis and Power BI for dynamic visualizations, enabling users to uncover patterns, optimize strategies, and make data-driven decisions. It features reusable datasets, pre-built dashboards, and advanced analytics through DAX measures and calculated columns.",
  "image": "T20WorldCupAnalysis.webp",
  "category": "Data Analytics",
  "technologies": ["Python", "Power BI", "DAX", "Pandas", "NumPy", "Jupyter", "Matplotlib", "JSON", "CSV"],
  "githubLink": "https://github.com/harshgupta1810/T20_worldcup_analysis",
  "impact": "Delivered data-driven insights into cricket performances and strategies, enabling better understanding and decision-making for fans, analysts, and teams.",
  "results": [
    "Actionable Insights: Analyzed batting, bowling, and match outcomes to identify key trends.",
    "Interactive Dashboards: Created Power BI reports for exploring player performances and team strategies.",
    "Advanced Analytics: Utilized DAX measures and calculated columns for deeper insights into the data.",
    "Scalable Framework: Provided reusable datasets and scripts for future customization and analysis."
  ]
},
{
  "id": 12,
  "title": "Real Estate Price Prediction",
  "description": "Predict real estate prices in Bengaluru using Python and machine learning techniques.",
  "longDescription": "The Real Estate Price Prediction project leverages machine learning to estimate residential property prices in Bengaluru, India. It uses features such as location, total square feet area, number of bedrooms (BHK), and number of bathrooms to provide accurate predictions. This tool aids buyers, sellers, and real estate agents in making informed decisions. The project includes data preprocessing, model training using linear regression, and evaluation with K-Fold cross-validation.",
  "image": "RealEstatePricePrediction.webp",
  "category": "Machine Learning",
  "technologies": ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "CSV"],
  "githubLink": "https://github.com/harshgupta1810/realestate_price_pricticor",
  "impact": "Facilitated accurate price predictions for residential properties, empowering stakeholders in Bengaluru’s real estate market.",
  "results": [
    "Accurate Price Predictions: Provided reliable estimates based on key property features.",
    "Data Cleaning and Preprocessing: Ensured quality and usability of raw property data.",
    "Model Optimization: Utilized hyperparameter tuning through grid search for improved performance.",
    "User-Friendly Framework: Enabled straightforward prediction with the `predict_price` function."
  ]
},
{
  "id": 13,
  "title": "Movie Recommender",
  "description": "A machine learning project that recommends movies based on user input using the Support Vector Machine (SVM) algorithm.",
  "longDescription": "The Movie Recommender project leverages the Support Vector Machine (SVM) algorithm to suggest similar movies based on user search input. Built with **Streamlit**, it offers an interactive web application where users can enter a movie name, and the system recommends similar titles based on the analysis of the input. The project provides details such as movie titles, genres, and ratings for the recommendations. Future improvements are planned to refine the algorithm and incorporate user feedback for personalized recommendations.",
  "image": "MovieRecommender.webp",
  "category": "Machine Learning",
  "technologies": ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy"],
  "githubLink": "https://github.com/harshgupta1810/Movie_recommender",
  "impact": "Helped users discover similar movies based on their interests, enhancing the movie-watching experience through data-driven recommendations.",
  "results": [
    "Movie Search: Users can search for movies by title.",
    "SVM-based Recommendations: The system generates movie suggestions based on the input movie using the SVM algorithm.",
    "Recommendation Details: Displayed movie recommendations with relevant details like title, genre, and rating.",
    "Interactive Frontend: Developed a user-friendly interface using Streamlit for seamless interaction."
  ]
},
{
  "id": 14,
  "title": "Data Hiding using LSB Image Steganography",
  "description": "A project that hides messages within images using the Least Significant Bit (LSB) steganography technique.",
  "longDescription": "The Data Hiding using LSB Image Steganography** project demonstrates a method to conceal messages within images by manipulating the least significant bits of pixel values. This educational project is implemented in MATLAB and includes both encoding and decoding processes. The encoding embeds a user-provided message into a grayscale image, while the decoding retrieves the hidden message. This approach highlights the principles of image-based steganography.",
  "image": "DataHidingLSB.webp",
  "category": "Image Processing",
  "technologies": ["MATLAB"],
  "githubLink": "https://github.com/harshgupta1810/DATA_HIDING_USING_LSB_IMAGE_STEGANOGRAPHY-",
  "impact": "Provided a practical example of steganography for educational purposes, showcasing how data can be hidden and retrieved within images.",
  "results": [
    "Encoding: Allowed users to embed a custom message into a grayscale image using LSB steganography.",
    "Decoding: Successfully extracted hidden messages from stego images.",
    "Visualization: Displayed the original cover image alongside the stego image for comparison."
  ]
},
{
  "id": 15,
  "title": "Face Recognition App",
  "description": "A machine learning-based application that identifies faces with two eyes in an image.",
  "longDescription": "The Face Recognition App is a simple application designed to detect and classify faces in an image using a pre-trained machine learning model. It identifies faces that have two eyes, processes them, and predicts their class based on the provided model. This project demonstrates the fundamentals of face recognition using popular libraries like OpenCV and Streamlit.",
  "image": "FaceRecognitionApp.jpg",
  "category": "Machine Learning",
  "technologies": ["Python", "OpenCV", "Streamlit", "Pillow", "NumPy", "Joblib"],
  "githubLink": "https://github.com/harshgupta1810/Celebility_Face_Identification",
  "impact": "Provided a foundational example of face recognition for learners and developers, demonstrating how to utilize machine learning for image-based classifications.",
  "results": [
    "Face Detection: Successfully identified faces with two eyes in uploaded images.",
    "Classification: Accurately predicted the class of detected faces using a pre-trained model.",
    "User Interaction: Allowed users to upload images via a user-friendly Streamlit interface."
  ]
},
{
  id: 16,
  title: "ChartVantage",
  description: "Automates detection and analysis of stock chart patterns for trading strategies.",
  longDescription: "ChartVantage is an advanced AI-powered platform designed to revolutionize stock pattern analysis. By leveraging deep learning models, it automates the detection and analysis of stock chart patterns, offering traders real-time insights and actionable trading opportunities.",
  image: "/ChartVantage.jpg",
  category: "Machine Learning",
  technologies: ["Python", "TensorFlow", "OpenCV", "statsmodels"],
  githubLink: "https://github.com/harshgupta1810/ChartVantage.git",
  impact: "40% improvement in pattern detection accuracy",
  results: [
    "Improvement: Achieved a 40% increase in pattern detection accuracy.",
    "Scalability: Processed over 1 million stock charts.",
    "Efficiency: Reduced analysis time by 75%, enabling faster decision-making.",
    "Impact: Enhanced trading accuracy, improving profitability for users"
  ],
},
{
  "id": 17,
  "title": "Neesaan : Personal Python Assistant",
  "description": "A Python-based personal python assistant that can perform various tasks like answering questions, sending emails, playing music, and more.",
  "longDescription": "Neesaan is a versatile Python-based personal python assistant created by Harsh Gupta. It can perform a variety of tasks such as answering questions, opening websites, playing music, reading notes, sending emails, providing weather updates, telling jokes, converting currency, and much more. Neesaan utilizes several libraries and APIs to seamlessly execute these tasks, offering an efficient and user-friendly experience.",
  "image": "/Neesaan.jpeg",
  "category": "Python",
  "technologies": ["Python", "pyttsx3", "speech_recognition", "wikipedia", "pyjokes", "pywhatkit", "smtplib", "requests", "geopy", "wolframalpha"],
  "githubLink": "https://github.com/harshgupta1810/Personal_assistant_using_python",
  "impact": "Improved user productivity and accessibility with voice commands",
  "results": [
    "Voice Command Integration: Enabled seamless user interaction through voice commands.",
    "Multi-Tasking: Implemented features like weather updates, currency conversion, and joke-telling, increasing the range of tasks it can handle.",
    "Automation: Automated tasks such as sending emails, changing wallpapers, and controlling volume, reducing manual efforts.",
    "Real-time Information: Integrated with APIs to provide live weather, news, and quotes, enhancing user experience with up-to-date data."
  ]
},
{
  "id": 18,
  "title": "SpamDetectX : Email Spam Classifier",
  "description": "A machine learning-based email spam classifier that identifies and filters spam messages effectively.",
  "longDescription": "SpamDetectX is an advanced email spam classifier that uses natural language processing (NLP) techniques and machine learning algorithms to distinguish between spam and non-spam (ham) messages. The project is designed to improve communication security and user experience by filtering unwanted spam messages. It evaluates various classifiers and provides performance metrics such as accuracy and precision for informed decision-making.",
  "image": "/SpamDetectX.jpeg",
  "category": "Machine Learning",
  "technologies": ["Python", "scikit-learn", "nltk", "pandas", "numpy", "wordcloud", "xgboost"],
  "githubLink": "https://github.com/harshgupta1810/email_spam",
  "impact": "Enhanced email security by effectively classifying and filtering spam messages.",
  "results": [
    "Classifier Evaluation: Tested multiple algorithms such as Naive Bayes, SVM, Random Forest, and XGBoost to ensure optimal performance.",
    "Feature Extraction: Implemented text preprocessing techniques including tokenization, stemming, and stopword removal for accurate classification.",
    "High Accuracy: Achieved a reliable spam detection model with high precision and recall scores.",
    "User-Friendly: Easy-to-use Python script for practical applications in spam filtering systems."
  ]
},
{
  "id": 19,
  "title": "Bookify: AI-Based Book Recommendations",
  "description": "An AI-powered book recommendation system offering both popularity-based and collaborative filtering-based suggestions.",
  "longDescription": "Bookify is a Python-based book recommendation system that combines popularity-based and collaborative filtering-based approaches to suggest books. The popularity-based model recommends books based on their number of ratings and average ratings, while the collaborative filtering model uses user-item interaction data to suggest books similar to the input. This project aims to enhance the reading experience by helping users discover books tailored to their preferences.",
  "image": "/Bookify.jpeg",
  "category": "Machine Learning",
  "technologies": ["Python", "NumPy", "Pandas", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  "githubLink": "https://github.com/harshgupta1810/bookify",
  "impact": "Empowers users to find books that match their interests, fostering an engaging and personalized reading experience.",
  "results": [
    "Popularity-Based Recommendations: Successfully identifies and ranks books based on ratings and user popularity.",
    "Collaborative Filtering: Implements user-item interaction analysis to suggest books related to user preferences.",
    "Scalable: The system can adapt to various datasets, making it versatile for different use cases.",
    "Easy Integration: The codebase is straightforward, enabling seamless adoption for personal or academic projects."
  ]
},
{
  "id": 20,
  "title": "FinSent: Financial News Analyzer",
  "description": "A Python-based tool that analyzes financial news articles to determine the sentiment towards stocks and visualize the distribution.",
  "longDescription": "FinSent is a Python-based financial news analyzer that helps investors and traders analyze the sentiment of recent news articles related to a specific stock. It fetches news from Google News, performs sentiment analysis using the VADER sentiment analysis tool, and visualizes the sentiment distribution as a pie chart. The project aims to provide valuable insights into the market sentiment surrounding stocks by examining news trends.",
  "image": "/FinSent.jpeg",
  "category": "Machine Learning",
  "technologies": ["Python", "pandas", "matplotlib", "nltk", "newspaper3k", "GoogleNews"],
  "githubLink": "https://github.com/harshgupta1810/Fin_News_Analyzer-",
  "impact": "Helps traders and investors stay informed by providing insights into the sentiment of news articles related to stocks, assisting in making data-driven decisions.",
  "results": [
    "Sentiment Analysis: Analyzes news articles to determine the sentiment towards a stock.",
    "Visualization: Displays sentiment distribution as a pie chart for quick insights.",
    "Customizable: Allows users to analyze any stock by entering its name or ticker symbol.",
    "Easy Setup: The installation and usage instructions are simple, enabling quick adoption of the tool."
  ]
},
{
  "id": 21,
  "title": "Beta Calculator",
  "description": "A Python-based tool that calculates the beta coefficient of a stock relative to a benchmark index using linear regression.",
  "longDescription": "The Beta Calculator is a Python-based tool designed to compute the beta coefficient of a given stock in relation to a benchmark index. Beta is a measure of a stock's sensitivity to market changes, helping investors assess systematic risk and volatility. The tool utilizes historical price data, calculates daily returns, and employs linear regression to determine the beta coefficient, aiding in portfolio risk management and investment decisions.",
  "image": "/BetaCalculator.jpeg",
  "category": "Machine Learning",
  "technologies": ["Python", "pandas", "matplotlib", "numpy", "scikit-learn", "yfinance"],
  "githubLink": "https://github.com/harshgupta1810/beta_stockmarket",
  "impact": "Provides investors and financial analysts with a reliable tool to quantify stock risk and volatility in relation to market indices, facilitating data-driven investment strategies.",
  "results": [
    "Systematic Risk Assessment: Calculates beta to evaluate a stock's volatility relative to the market.",
    "Data Visualization: Provides a visual representation of stock and index price trends.",
    "Customizable Analysis: Works with any stock and benchmark index supported by Yahoo Finance.",
    "Ease of Use: Simple installation and usage process with clear documentation."
  ]
},

]

const categories = ["All", "Machine Learning", "Computer Vision", "NLP", "Game Development","Deep Learning","Python","Data Analytics","Image Processing"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        project.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="space-y-20">
      {/* Intro Section */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Here are some of the key projects I've worked on, where I combined data science,
          machine learning, and AI to drive real-world solutions.
        </motion.p>
      </section>

      {/* Filters Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <ProjectFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <div className="relative w-full md:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Interested in Collaborating?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities.
        </p>
        <Button size="lg" asChild>
          <a href="/contact">Get in Touch</a>
        </Button>
      </section>
    </div>
  )
}