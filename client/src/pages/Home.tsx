import { useState, useEffect } from "react"
import Typewriter from "typewriter-effect"
import { Download } from "lucide-react"
import { ThreeScene } from "@/components/ThreeScene"
import { StatsCard } from "@/components/StatsCard"
import { ProjectCarousel } from "@/components/ProjectCarousel"
import { motion } from "framer-motion"
import { AnimatedButton } from "@/components/AnimatedButton"
import { downloadResume } from "@/api/resume"
import { useToast } from "@/hooks/useToast"

const stats = [
  { label: "Projects Completed", value: "32+" },
  { label: "Research Papers", value: "1" },
  { label: "Datasets Processed", value: "230GB+" },
  { label: "Models Deployed", value: "15+" },
]

const strengths = [
  {
    title: "Technical Expertise",
    description: "Advanced knowledge of AI/ML technologies",
  },
  {
    title: "Problem-Solving",
    description: "Proven ability to tackle complex challenges",
  },
  {
    title: "Real-World Impact",
    description: "Experience in delivering data-driven solutions",
  },
]

export function Home() {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadResume = async () => {
    try {
      setIsDownloading(true)
      await downloadResume()
      toast({
        title: "Success",
        description: "Resume downloaded successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to download resume. Please try again.",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <ThreeScene />
        <div className="relative z-10 text-center space-y-8">
          <div className="h-16 text-4xl font-bold">
            <Typewriter
              options={{
                strings: [
                  "Turning Data into Actionable Intelligence",
                  "Innovating with AI & Machine Learning",
                  "Empowering Businesses with Data Science",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </div>
          <AnimatedButton 
            onClick={handleDownloadResume}
            disabled={isDownloading}
          >
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? "Downloading..." : "Download Resume"}
          </AnimatedButton>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard label={stat.label} value={stat.value} />
          </motion.div>
        ))}
      </section>

      {/* Introduction */}
      <section className="space-y-6 text-center">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Hi, I'm Harsh Gupta
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          I specialize in developing AI and Machine Learning solutions, with a strong focus on MLOps,
          deep learning, and real-time data processing. My expertise includes building scalable
          applications such as AI-powered video conferencing and predictive analytics systems,
          leveraging frameworks like TensorFlow, PyTorch, and AWS for optimized performance.
        </motion.p>
      </section>

      {/* Core Strengths */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {strengths.map((strength, index) => (
          <motion.div
            key={strength.title}
            className="p-6 rounded-xl bg-card hover:bg-card/80 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
            <p className="text-muted-foreground">{strength.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
        <ProjectCarousel />
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">
          Ready to turn your ideas into reality? Let's collaborate!
        </h2>
        <AnimatedButton variant="outline" asChild>
          <a href="/contact">Contact Me</a>
        </AnimatedButton>
      </section>
    </div>
  )
}