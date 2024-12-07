import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip"

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  tooltipContent?: string
}

export function AnimatedButton({ children, className, tooltipContent, ...props }: AnimatedButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={cn(
              "relative overflow-hidden font-orbitron uppercase tracking-wider",
              "bg-gradient-to-r from-[#00A8E1] to-[#FF1654] text-[#EAEAEA] border border-[#F9ED69] shadow-lg",
              "hover:scale-110 hover:shadow-[0_0_20px_rgba(0,168,225,0.5)] transition-all duration-300",
              "after:absolute after:inset-0 after:opacity-0 after:bg-white/20 after:transition-opacity",
              "hover:after:opacity-100",
              "active:scale-95 active:shadow-inner",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00A8E1]/50 before:to-[#FF1654]/50 before:opacity-0 before:blur-xl before:transition-opacity",
              "hover:before:opacity-100",
              className
            )}
            {...props}
          >
            {children}
          </Button>
        </TooltipTrigger>
        {tooltipContent && (
          <TooltipContent className="bg-background/80 backdrop-blur-sm border shadow-lg">
            <p>{tooltipContent}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}