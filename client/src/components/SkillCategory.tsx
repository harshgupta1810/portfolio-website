import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge
                className="cursor-pointer transition-colors"
                variant="secondary"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}