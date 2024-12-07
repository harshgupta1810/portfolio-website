import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Video Analytics",
    description: "Real-time video processing system with object detection",
    image: "https://via.placeholder.com/400x300",
    link: "/projects/video-analytics",
  },
  {
    title: "Predictive Maintenance",
    description: "Machine learning model for equipment failure prediction",
    image: "https://via.placeholder.com/400x300",
    link: "/projects/predictive-maintenance",
  },
  {
    title: "NLP Document Classifier",
    description: "Automated document classification using NLP",
    image: "https://via.placeholder.com/400x300",
    link: "/projects/document-classifier",
  },
]

export function ProjectCarousel() {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.title}>
            <Card>
              <CardContent className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" asChild>
                  <a href={project.link}>
                    Learn More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}