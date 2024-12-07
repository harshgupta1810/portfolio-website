import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SkillCategory } from "@/components/SkillCategory"
import { SkillRadar } from "@/components/SkillRadar"
import { AdditionalSkills } from "@/components/AdditionalSkills"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "Lua", "C", "MATLAB", "Java", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "Spark",
      "Power BI",
      "Tableau",
      "MySQL",
      "SQLite",
      "Docker",
      "Kubernetes",
      "Flask",
      "FastAPI",
      "OpenCV",
      "ONNX",
      "Jupyter",
    ],
  },
  {
    title: "Technical Skills",
    skills: [
      "Data Analytics",
      "Feature Engineering",
      "Computer Vision",
      "NLP",
      "Deep Learning",
      "Statistical Models",
      "MLOps",
      "AWS",
      "Time Series Analytics",
      "Machine Learning",
      "LLM",
      "Git",
      "Statistical models",
      "Bayesian",
      "Regression",
      "Linear Optimization",
      "Graph Applications",
      "OOPs",
    ],
  },
]

export function Skills() {
  return (
    <div className="space-y-20">
      {/* Introduction */}
      <section className="text-center space-y-4">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Skills & Expertise
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          With a strong foundation in AI, Machine Learning, and Data Science, I bring a comprehensive
          skill set to tackle complex technical challenges and deliver innovative solutions.
        </motion.p>
      </section>

      {/* Skill Categories */}
      <section className="space-y-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCategory title={category.title} skills={category.skills} />
          </motion.div>
        ))}
      </section>

      {/* Skill Proficiency */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Skill Proficiency</h2>
        <Card className="p-6">
          <SkillRadar />
        </Card>
      </section>

      {/* Additional Skills */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Additional Skills</h2>
        <AdditionalSkills />
      </section>

      {/* Call to Action */}
      <section className="text-center space-y-6">
        <h2 className="text-3xl font-bold">Let's Work Together</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Interested in collaborating or learning more about my experience? Let's connect and discuss
          how I can contribute to your next project.
        </p>
        <Button size="lg" asChild>
          <a href="/contact">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </a>
        </Button>
      </section>
    </div>
  )
}