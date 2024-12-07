import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Timeline } from "@/components/Timeline"
import { DataChart } from "@/components/DataChart"
import {
  BookOpen,
  Brain,
  Code2,
  HeartHandshake,
  Lightbulb,
  Share2,
} from "lucide-react"

const interests = [
  {
    icon: BookOpen,
    title: "AI Ethics",
    description: "Exploring the ethical implications of AI development",
  },
  {
    icon: Share2,
    title: "Tech Blogging",
    description: "Sharing insights about AI trends and developments",
  },
  {
    icon: Code2,
    title: "Hackathons",
    description: "Participating in AI/ML hackathons",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pushing the boundaries of what's possible",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description: "Creating impactful solutions with a team",
  },
  {
    icon: Brain,
    title: "Excellence",
    description: "Striving for perfection in every detail",
  },
]

export function About() {
  return (
    <div className="space-y-20">
      {/* Introduction Section */}
      <section className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 mx-auto"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
          <img
            src="https://via.placeholder.com/160"
            alt="Profile"
            className="relative rounded-full w-full h-full object-cover border-4 border-background"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Harsh Gupta, a passionate AI developer dedicated to creating innovative solutions that
            bridge the gap between data and decision-making. With a strong foundation in Data Science
            and Machine Learning, I thrive on turning complex challenges into actionable insights.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">My Journey</h2>
        <Timeline />
      </section>

      {/* Key Stats Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">By the Numbers</h2>
        <Card className="p-6">
          <DataChart />
        </Card>
      </section>

      {/* Personal Interests Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Beyond the Code</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            return (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
                  <p className="text-muted-foreground">{interest.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">What Drives Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Want to Know More?</h2>
        <Button size="lg" asChild>
          <a href="/projects">View My Projects</a>
        </Button>
      </section>
    </div>
  )
}