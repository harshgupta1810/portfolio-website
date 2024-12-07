import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts"

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
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="category" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar
          name="Current Skills"
          dataKey="current"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
        <Radar
          name="Starting Point"
          dataKey="start"
          stroke="hsl(var(--muted))"
          fill="hsl(var(--muted))"
          fillOpacity={0.3}
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}