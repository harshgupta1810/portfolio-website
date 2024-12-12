import { useState } from "react"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
}

export function OptimizedImage({ src, alt, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden">
      {isLoading && (
        <Skeleton
          className={`absolute inset-0 ${className}`}
          style={{ 
            backgroundColor: "hsl(var(--muted))",
            backgroundImage: "linear-gradient(to right, hsl(var(--muted)) 0%, hsl(var(--muted-foreground)/20%) 50%, hsl(var(--muted)) 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300`}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        onLoad={() => setIsLoading(false)}
        decoding="async"
      />
    </div>
  )
}