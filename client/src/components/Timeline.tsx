import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const timelineEvents = [
  {
    year: "July 2024 - Present",
    title: "AI Developer",
    company: "Deotech Solutions",
    description: "Leading AI/ML projects and developing innovative solutions",
  },
  {
    year: "Nov 2023 - Jan 2024",
    title: "Research Paper Publication",
    company: "International Journal of Scientific Research",
    description: "Published research on Forecasting Commodity Prices using Machine Learning",
  },
  {
    year: "Aug 2020 - June 2024",
    title: "B.Tech Degree",
    company: "Presidency University",
    description: "Completed bachelor's in Computer Science",
  },
]

export function Timeline() {
  return (
    <div className="relative space-y-8">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border" />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className={`flex ${
            index % 2 === 0 ? "justify-end" : "justify-start"
          } relative`}
        >
          {/* Circle on the line */}
          <div className="absolute left-1/2 top-8 -ml-1.5 h-3 w-3 rounded-full bg-primary" />

          <Card className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? "mr-8" : "ml-8"}`}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{event.description}</p>
              <div className="mt-4 text-sm font-semibold text-primary">{event.year}</div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}