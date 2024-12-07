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
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Tooltip />
        <Radar
          name="Proficiency"
          dataKey="value"
          stroke="hsl(var(--primary))"
          fill="hsl(var(--primary))"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}