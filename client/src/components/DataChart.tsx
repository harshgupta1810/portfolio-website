import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from "recharts"

const data = [
  { subject: "Python", A: 90 },
  { subject: "Machine Learning", A: 85 },
  { subject: "Deep Learning", A: 80 },
  { subject: "Data Analysis", A: 88 },
  { subject: "MLOps", A: 75 },
  { subject: "Cloud Computing", A: 82 },
]

export function DataChart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar
          name="Skills"
          dataKey="A"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}