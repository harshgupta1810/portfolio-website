import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"

const data = [
  { skill: "AI/ML Development", value: 90 },
  { skill: "Data Science", value: 85 },
  { skill: "Cloud Computing", value: 80 },
  { skill: "Software Engineering", value: 88 },
  { skill: "System Design", value: 82 },
  { skill: "Problem Solving", value: 92 },
]

export function SkillRadar() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-8">Core Competencies</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="hsl(var(--primary))" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: "hsl(var(--foreground))" }}
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--background))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.5rem",
            }}
          />
          <Radar
            name="Proficiency"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}