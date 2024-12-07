import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from "recharts"
import { motion } from "framer-motion"

const data = [
  { subject: "Python", A: 90 },
  { subject: "Machine Learning", A: 85 },
  { subject: "Deep Learning", A: 80 },
  { subject: "Data Analysis", A: 88 },
  { subject: "MLOps", A: 75 },
  { subject: "Data Science", A: 82 },
]

export function DataChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[400px] rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm border p-4"
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid
            stroke="hsl(var(--primary))"
            strokeOpacity={0.2}
          />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-3">
                    <p className="font-medium">{payload[0].payload.subject}</p>
                    <p className="text-sm text-muted-foreground">
                      Proficiency: {payload[0].value}%
                    </p>
                  </div>
                )
              }
              return null
            }}
          />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--primary))",
              strokeWidth: 2,
            }}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}