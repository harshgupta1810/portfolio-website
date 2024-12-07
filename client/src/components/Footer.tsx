import { Link } from "react-router-dom"
import { Github, Linkedin, Database } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "Kaggle",
    href: "https://kaggle.com/yourusername",
    icon: Database,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quick Navigation</h3>
              <nav className="flex gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((item) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Harsh Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}