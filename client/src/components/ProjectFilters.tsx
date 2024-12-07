import { Button } from "@/components/ui/button"

interface ProjectFiltersProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilters({
  categories,
  selectedCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}