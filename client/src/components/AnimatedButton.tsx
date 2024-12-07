import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline"
}

export function AnimatedButton({ children, className, variant = "default", ...props }: AnimatedButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden font-bold tracking-wider",
          "bg-gradient-to-r from-primary to-secondary text-white shadow-lg",
          "hover:shadow-xl transition-all duration-300",
          "after:absolute after:inset-0 after:opacity-0 after:bg-white/20 after:transition-opacity",
          "hover:after:opacity-100",
          "active:shadow-inner",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/50 before:to-secondary/50 before:opacity-0 before:blur-xl before:transition-opacity",
          "hover:before:opacity-100",
          variant === "outline" && "border-2 border-primary",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </motion.div>
  )
}