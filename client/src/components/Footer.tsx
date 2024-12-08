import { Link } from "react-router-dom"
import { Github, Linkedin, Database, Mail, Home, User, Briefcase, Code2, FolderGit2 } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Skills", href: "/skills", icon: Code2 },
  { name: "Projects", href: "/projects", icon: FolderGit2 },
  { name: "Contact", href: "/contact", icon: Mail },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-gupta-52465a204/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/harshgupta1810",
    icon: Github,
  },
  {
    name: "Kaggle",
    href: "https://www.kaggle.com/desperateenuf",
    icon: Database,
  },
]

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <nav className="grid grid-cols-2 gap-4">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>

          <div className="space-y-4">
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

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link
                to="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-foreground">
            © {new Date().getFullYear()} Harsh Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}