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
import { OptimizedImage } from "./OptimizedImage"

const projects = [
  {
    title: "SmartCommodities : AI Based Commodity Price Predictor",
    description: "A machine learning-based project that forecasts commodity prices using advanced algorithms.",
    longDescription: "SmartCommodities is a project designed to predict commodity prices by leveraging advanced machine learning techniques. The project includes data collection, exploratory data analysis (EDA), model training, and performance evaluation. It provides insights into trends in commodity prices and applies various machine learning models for price forecasting, aiming to deliver accurate predictions and improve decision-making for traders and analysts.",
    image: "/SmartCommodities.jpg",
    githubLink: "https://github.com/harshgupta1810/commodity_price_prediction",
    technologies: ["scikit-learn","Regression Models","Model Evaluation","Automation","Financial Data Analysis"],
    stats: "Helps in predicting commodity prices using machine learning, providing valuable insights into market trends, and offering a tool for improving trading decisions and forecasting accuracy.",
    impact: [
      "Data Collection: Automated scripts for gathering and preprocessing commodity price data from various sources.",
      "Exploratory Data Analysis: Visualizations and statistical analyses uncovering insights and trends within the dataset.",
      "Model Development: Applied various machine learning algorithms to predict commodity prices with high accuracy.",
      "Performance Evaluation: Comprehensive metrics and visualizations to assess model performance and prediction accuracy."
    ]
  },
  {
    "title": "Vigilant Sentinel: Intelligent Video Surveillance",
    "description": "An intelligent video surveillance system for real-time anomaly detection in video streams.",
    "longDescription": "Vigilant Sentinel is an AI-powered video surveillance system designed to detect abnormal events in real-time video streams. Leveraging neural networks and computer vision techniques, it processes live video to identify anomalies, providing an automated solution for enhanced security monitoring.",
    "image": "/Vigilant Sentinel.jpg",
    "githubLink": "https://github.com/harshgupta1810/Intelligent_video_surveillance",
    "technologies": ["Python", "Keras", "OpenCV", "NumPy", "Imutils"],
    "stats": "75% faster anomaly detection compared to traditional methods.",
    "impact": [
        "Accuracy: Achieved precise detection of anomalies with minimal false positives.",
        "Efficiency: Reduced video analysis time by 50%, enabling real-time monitoring.",
        "Scalability: Designed to handle various environments, from malls to streets.",
        "Impact: Improved security monitoring through real-time anomaly detection."
    ]
  },
  {
    "title": "Poetic Prowess: Poetry Generator",
    "description": "Generate rap lyrics using AI-powered models.",
    "longDescription": "An innovative poetry generator that uses Markov chains and LSTM neural networks to create rap lyrics. With a custom database of hip-hop artist lyrics, this tool combines machine learning and creativity to craft unique lines based on user prompts.",
    "image": "/PoeticProwess.jpg",
    "githubLink": "https://github.com/harshgupta1810/Poetry_Generator",
    "technologies": ["Python", "Markov Chains", "LSTM", "Flask", "TensorFlow"],
    "stats": "85% coherence score for generated lyrics",
    "impact": [
      "Generated 10,000+ lines of lyrics",
      "Enabled artists to brainstorm creative ideas",
      "Showcased AI's potential in creative fields"
    ]
  }
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
                      <OptimizedImage
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
                <OptimizedImage
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