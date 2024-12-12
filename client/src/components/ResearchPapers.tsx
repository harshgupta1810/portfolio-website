import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from "lucide-react"

const papers = [
  {
    title: "Forecasting Commodity Prices using Machine Learning",
    journal: "International Journal of Scientific Research in Science and Technology (IJSRST)",
    year: "2024",
    link: "https://ijsrst.com/home/issue/view/article.php?id=IJSRST52411110",
    abstract: "A comprehensive study on applying machine learning techniques to predict commodity price movements with high accuracy.",
  },
]

export function ResearchPapers() {
  return (
    <div className="grid gap-6">
      {papers.map((paper, index) => (
        <motion.div
          key={paper.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-start gap-4">
                <FileText className="h-6 w-6 mt-1" />
                <div>
                  {paper.title}
                  <div className="text-sm font-normal text-muted-foreground">
                    {paper.journal} • {paper.year}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{paper.abstract}</p>
              <Button variant="outline" asChild>
                <a href={paper.link} target="_blank" rel="noopener noreferrer">
                  Read Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}