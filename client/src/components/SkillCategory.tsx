import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillCategoryProps {
  title: string
  skills: string[]
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <Card className="overflow-hidden backdrop-blur-sm border bg-card/50">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Badge
                className="text-sm font-medium px-4 py-1.5 bg-background hover:bg-background/90 text-foreground border border-primary/20 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/50"
                variant="outline"
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