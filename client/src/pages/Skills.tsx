import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SkillCategory } from "@/components/SkillCategory"
import { SkillRadar } from "@/components/SkillRadar"
import { AdditionalSkills } from "@/components/AdditionalSkills"
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg -z-10" />
        <div className="relative py-12 px-6 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
          >
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            With extensive experience in AI, Machine Learning, and Data Science,
            I bring a comprehensive skill set to solve complex technical challenges
            and deliver innovative solutions.
          </motion.p>
        </div>
      </section>

      {/* Skills Radar Chart */}
      <section className="space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-card p-6 rounded-lg border backdrop-blur-sm"
        >
          <SkillRadar />
        </motion.div>
      </section>

      {/* Skill Categories */}
      <section className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <SkillCategory title={category.title} skills={category.skills} />
          </motion.div>
        ))}
      </section>

      {/* Additional Skills */}
      <section className="space-y-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold text-center"
        >
          Additional Expertise
        </motion.h2>
        <AdditionalSkills />
      </section>

      {/* Call to Action */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg -z-10" />
        <div className="relative py-12 px-6 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Interested in collaborating or learning more about my experience?
            Let's connect and discuss how I can contribute to your next project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}