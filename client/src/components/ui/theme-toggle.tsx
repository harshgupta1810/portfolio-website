import { useTheme } from "@/components/ui/theme-provider"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-primary/10 via-secondary/10 to-background border border-primary/20 hover:border-primary/50 hover:bg-accent/20 transition-all duration-300"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-primary" />
        <Moon className="absolute h-5 w-5 top-2.5 left-2.5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-primary" />
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}