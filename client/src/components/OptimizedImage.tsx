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
    <div className="relative">
      {isLoading && (
        <Skeleton
          className={`absolute inset-0 ${className}`}
          style={{ backgroundColor: "hsl(var(--muted))" }}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}