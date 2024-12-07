import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ResearchPapers } from "@/components/ResearchPapers"
import { SkillChart } from "@/components/SkillChart"
import { ProjectShowcase } from "@/components/ProjectShowcase"
import { Download, Mail } from "lucide-react"

export function Experience() {
  return (
    <div className="space-y-20">
      {/* Headline Section */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          From Passionate Learner to Gaining Expertise in AI/ML
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Explore my professional experiences, certifications, and milestones that have shaped my
          career in Data Science, AI, and Machine Learning.
        </motion.p>
      </section>

      {/* Professional Timeline */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Professional Journey</h2>
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{experience.title}</h3>
                  <p className="text-muted-foreground">{experience.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">{experience.duration}</p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Research Papers Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Research Papers</h2>
        <ResearchPapers />
      </section>

      {/* Skills Demonstrated */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Skills Overview</h2>
        <Card className="p-6">
          <SkillChart />
        </Card>
      </section>

      {/* Notable Projects */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Notable Projects</h2>
        <ProjectShowcase />
      </section>

      {/* Call to Action */}
      <section className="flex flex-col items-center space-y-6 text-center">
        <h2 className="text-3xl font-bold">Want to know more about my journey?</h2>
        <div className="flex gap-4">
          <Button size="lg">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

const experiences = [
  {
    title: "AI Developer",
    company: "Deotech Solutions",
    duration: "July 2024 - Present",
    technologies: ["Python", "TensorFlow", "PyTorch", "AWS", "MLOps"],
    achievements: [
      "Designed and deployed scalable ML models for real-time data processing",
      "Reduced operational costs by 30% through AI-driven process optimization",
      "Led a team of 5 developers in implementing computer vision solutions",
    ],
  },
  {
    title: "Machine Learning Engineer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2023 - June 2024",
    technologies: ["Python", "Scikit-learn", "Docker", "Kubernetes", "GCP"],
    achievements: [
      "Developed predictive maintenance models achieving 95% accuracy",
      "Implemented automated ML pipeline reducing deployment time by 60%",
      "Collaborated with cross-functional teams to deliver AI solutions",
    ],
  },
]