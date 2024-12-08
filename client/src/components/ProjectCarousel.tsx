import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const projects = [
  {
    title: "ChartVantage",
    description: "Automates detection and analysis of stock chart patterns for trading strategies.",
    longDescription: "ChartVantage is an advanced AI-powered platform designed to revolutionize stock pattern analysis. By leveraging deep learning models, it automates the detection and analysis of stock chart patterns, offering traders real-time insights and actionable trading opportunities.",
    image: "/ChartVantage.jpg",
    githubLink: "https://github.com/harshgupta1810/ChartVantage.git",
    technologies: ["Python", "TensorFlow", "OpenCV", "statsmodels"],
    stats: "40% improvement in pattern detection accuracy",
    impact: [
      "Improvement: Achieved a 40% increase in pattern detection accuracy.",
      "Scalability: Processed over 1 million stock charts.",
      "Efficiency: Reduced analysis time by 75%, enabling faster decision-making.",
      "Impact: Enhanced trading accuracy, improving profitability for users"
    ]
  },
  {
    title: "Predictive Maintenance",
    description: "Machine learning model for equipment failure prediction",
    longDescription: "A sophisticated predictive maintenance system that leverages machine learning to forecast potential equipment failures before they occur. The system analyzes real-time sensor data and historical maintenance records to prevent costly downtime.",
    image: "https://via.placeholder.com/400x300",
    githubLink: "https://github.com/yourusername/predictive-maintenance",
    technologies: ["Python", "Scikit-learn", "Docker", "MongoDB"],
    stats: "35% reduction in equipment downtime",
    impact: [
      "Monitored 100+ industrial machines",
      "Saved $500K in maintenance costs",
      "Achieved 95% prediction accuracy"
    ]
  },
  {
    title: "NLP Document Classifier",
    description: "Automated document classification using NLP",
    longDescription: "An intelligent document classification system powered by state-of-the-art Natural Language Processing. The system automatically categorizes documents based on their content, streamlining document management workflows.",
    image: "https://via.placeholder.com/400x300",
    githubLink: "https://github.com/yourusername/document-classifier",
    technologies: ["Python", "BERT", "FastAPI", "PostgreSQL"],
    stats: "95% classification accuracy",
    impact: [
      "Processed 1M+ documents",
      "Reduced manual classification time by 90%",
      "Improved accuracy by 25%"
    ]
  },
]

export function ProjectCarousel() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.title} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="p-1"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardContent className="p-0">
                    <div className="relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="space-y-1">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-primary/20 text-primary-foreground"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm font-medium text-primary-foreground">
                            {project.stats}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex items-center gap-3">
                        <Button
                          variant="default"
                          size="sm"
                          className="flex-1"
                          onClick={() => setSelectedProject(project)}
                        >
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" asChild>
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="border-primary/20 hover:bg-primary/20 -left-12" />
          <CarouselNext className="border-primary/20 hover:bg-primary/20 -right-12" />
        </div>
      </Carousel>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-background">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">{selectedProject.longDescription}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Impact & Results</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {selectedProject.impact.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-end gap-4 pt-4">
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}