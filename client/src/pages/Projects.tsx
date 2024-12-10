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
    id: 1,
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
    "id": 2,
    "title": "Vigilant Sentinel",
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
  "title": "Poetic Prowess: Poetry Generator",
  "description": "Generate rap lyrics using AI-powered models.",
  "longDescription": "Poetic Prowess is an AI-driven poetry generator that combines Markov chains and LSTM neural networks to compose rap lyrics. It leverages a custom database of hip-hop artist lyrics to generate unique and creative verses based on user prompts. The project features a backend for training and generation, along with a frontend for user interaction.",
  "image": "/PoeticProwess.jpg",
  "category": "NLP",
  "technologies": ["Python", "TensorFlow", "Markov Chains", "Flask", "LSTM"],
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
}


]

const categories = ["All", "Machine Learning", "Computer Vision", "NLP", "Game Development","Deep Learning","Python","Data Analytics"]

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