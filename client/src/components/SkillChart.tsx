import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts"
import { motion } from "framer-motion"

const data = [
  { category: "Programming", current: 90, start: 40 },
  { category: "Data Analysis", current: 85, start: 35 },
  { category: "Cloud Tech", current: 80, start: 30 },
  { category: "DevOps", current: 75, start: 25 },
  { category: "AI/ML", current: 88, start: 45 },
  { category: "Problem Solving", current: 92, start: 50 },
]

export function SkillChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-[400px] rounded-xl overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent" />

      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <defs>
            <linearGradient id="gridGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
              <stop offset="100%" stopColor="hsl(var(--foreground))" stopOpacity={0.1} />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.6} />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="secondaryGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity={0.4} />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <PolarGrid
            gridType="polygon"
            stroke="url(#gridGradient)"
            strokeDasharray="4 4"
            strokeWidth={1}
          />

          <PolarAngleAxis
            dataKey="category"
            tick={{
              fill: "hsl(var(--foreground))",
              fontSize: 12,
              fontWeight: 500,
            }}
            stroke="hsl(var(--border))"
            strokeWidth={1}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{
              fill: "hsl(var(--muted-foreground))",
              fontSize: 11,
            }}
            stroke="hsl(var(--border))"
            strokeWidth={1}
          />

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background/80 backdrop-blur-sm border rounded-lg shadow-lg p-3">
                    <p className="font-medium">{payload[0].payload.category}</p>
                    <p className="text-sm text-muted-foreground">
                      Current: {payload[0].value}%
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Started: {payload[1].value}%
                    </p>
                  </div>
                )
              }
              return null
            }}
          />

          <Radar
            name="Current Skills"
            dataKey="current"
            stroke="hsl(var(--primary))"
            fill="url(#areaGradient)"
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--primary))",
              strokeWidth: 0,
            }}
            activeDot={{
              fill: "hsl(var(--primary))",
              stroke: "hsl(var(--background))",
              strokeWidth: 2,
              r: 6,
            }}
          />

          <Radar
            name="Starting Point"
            dataKey="start"
            stroke="hsl(var(--secondary))"
            fill="url(#secondaryGradient)"
            strokeWidth={2}
            dot={{
              fill: "hsl(var(--secondary))",
              strokeWidth: 0,
            }}
            activeDot={{
              fill: "hsl(var(--secondary))",
              stroke: "hsl(var(--background))",
              strokeWidth: 2,
              r: 6,
            }}
          />

          <Legend
            wrapperStyle={{
              paddingTop: "20px",
            }}
            formatter={(value) => (
              <span className="text-foreground font-medium">{value}</span>
            )}
          />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}