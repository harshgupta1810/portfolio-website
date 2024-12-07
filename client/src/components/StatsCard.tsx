import { Card, CardContent } from "./ui/card"
import CountUp from "react-countup"

interface StatsCardProps {
  label: string
  value: string
}

export function StatsCard({ label, value }: StatsCardProps) {
  const numericValue = parseInt(value)

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold mb-2">
          {!isNaN(numericValue) ? (
            <CountUp end={numericValue} duration={2.5} />
          ) : (
            value
          )}
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  )
}