import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "AI Video Analytics Platform",
    description: "Real-time video processing system for security applications",
    impact: "Improved threat detection accuracy by 40%",
    technologies: ["Python", "TensorFlow", "OpenCV", "AWS"],
  },
  {
    title: "Predictive Maintenance System",
    description: "ML-based system for industrial equipment monitoring",
    impact: "Reduced downtime by 35%",
    technologies: ["Python", "Scikit-learn", "Docker", "MongoDB"],
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