import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Vigilant Sentinel: Intelligent Video Surveillance",
    description: "An intelligent video surveillance system for real-time anomaly detection in video streams.",
    impact: "75% faster anomaly detection compared to traditional methods.",
    technologies: ["Python", "Keras", "OpenCV", "NumPy", "Imutils"],
  },
  {
    title: "Poetic Prowess: Poetry Generator",
    description: "Generate rap lyrics using AI-powered models.",
    impact: "85% coherence score for generated lyrics, empowering creative exploration.",
    technologies: ["Python", "TensorFlow", "Markov Chains", "Flask", "LSTM"],
  },
]

export function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <p className="font-medium mb-4">Impact: {project.impact}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}