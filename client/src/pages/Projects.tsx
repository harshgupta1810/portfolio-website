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



]

const categories = ["All", "Machine Learning", "Computer Vision", "NLP", "Game Development",]

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