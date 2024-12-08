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
  link: string
  impact: string
  results: string[]
  longDescription?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Video Analytics Platform",
    description: "Real-time video processing system with object detection and behavior analysis",
    longDescription: "Our AI Video Analytics Platform represents a breakthrough in real-time video processing and analysis. Utilizing advanced deep learning models and computer vision techniques, we've created a system that can process multiple video streams simultaneously, detecting objects, analyzing behavior patterns, and generating actionable insights in real-time. The platform integrates seamlessly with existing security infrastructure and provides an intuitive interface for security personnel to monitor and respond to events as they occur.",
    image: "https://via.placeholder.com/600x400",
    category: "Computer Vision",
    technologies: ["Python", "TensorFlow", "OpenCV", "AWS"],
    githubLink: "https://github.com/yourusername/video-analytics",
    link: "/projects/video-analytics",
    impact: "40% improvement in threat detection accuracy",
    results: [
      "Processed 1000+ hours of video footage",
      "Reduced false positives by 60%",
      "Deployed across 5 client locations",
    ],
  },
  {
    id: 2,
    title: "Predictive Maintenance System",
    description: "Machine learning model for equipment failure prediction in manufacturing",
    longDescription: "The Predictive Maintenance System is an innovative solution that leverages machine learning to predict potential equipment failures before they occur. By analyzing real-time sensor data and historical maintenance records, the system can identify patterns that precede equipment failures, allowing maintenance teams to take proactive measures. This predictive approach has significantly reduced downtime and maintenance costs for our manufacturing clients.",
    image: "https://via.placeholder.com/600x400",
    category: "Machine Learning",
    technologies: ["Python", "Scikit-learn", "Docker", "MongoDB"],
    githubLink: "https://github.com/yourusername/predictive-maintenance",
    link: "/projects/predictive-maintenance",
    impact: "35% reduction in equipment downtime",
    results: [
      "Monitored 100+ industrial machines",
      "Saved $500K in maintenance costs",
      "99% prediction accuracy",
    ],
  },
]

const categories = ["All", "Machine Learning", "Computer Vision", "NLP", "Data Analytics"]

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