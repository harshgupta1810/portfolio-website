import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
  link: string
  impact: string
  results: string[]
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="relative aspect-video"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <Badge
          className="absolute top-4 right-4"
          variant="secondary"
        >
          {project.category}
        </Badge>
      </motion.div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-2">Impact:</p>
            <p className="text-muted-foreground">{project.impact}</p>
          </div>
          <div>
            <p className="font-medium mb-2">Key Results:</p>
            <ul className="list-disc list-inside text-muted-foreground">
              {project.results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" asChild>
          <a href={project.link}>
            View Details
            <ChevronRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}