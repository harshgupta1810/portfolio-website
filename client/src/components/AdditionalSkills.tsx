import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  BrainCircuit,
  GitBranch,
  Users,
  MessageSquare,
  Target,
  Clock,
} from "lucide-react"

const additionalSkills = [
  {
    icon: BrainCircuit,
    title: "Problem Solving",
    description: "Analytical thinking and creative solution development",
  },
  {
    icon: GitBranch,
    title: "Version Control",
    description: "Git workflow and collaborative development",
  },
  {
    icon: Users,
    title: "Team Leadership",
    description: "Project management and team coordination",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Clear technical communication and documentation",
  },
  {
    icon: Target,
    title: "Project Management",
    description: "Agile methodologies and sprint planning",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Efficient prioritization and deadline adherence",
  },
]

export function AdditionalSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {additionalSkills.map((skill, index) => {
        const Icon = skill.icon
        return (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow backdrop-blur-sm border bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}