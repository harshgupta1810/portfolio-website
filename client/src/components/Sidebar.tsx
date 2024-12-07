import { Link, useLocation } from "react-router-dom"
import { cn } from "@/lib/utils"
import { 
  Home,
  User,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  Twitter
} from "lucide-react"

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: User, label: "About", path: "/about" },
  { icon: Briefcase, label: "Experience", path: "/experience" },
  { icon: Code2, label: "Skills", path: "/skills" },
  { icon: FolderGit2, label: "Projects", path: "/projects" },
  { icon: Mail, label: "Contact", path: "/contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/yourusername" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  { icon: Twitter, href: "https://twitter.com/yourusername" },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-full flex-col justify-between px-4 py-8">
        <div>
          <div className="mb-8 px-2">
            <h1 className="text-2xl font-bold">Harsh Gupta</h1>
            <p className="text-sm text-muted-foreground">AI/ML Developer</p>
          </div>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                    location.pathname === item.path
                      ? "bg-secondary text-secondary-foreground"
                      : "hover:bg-secondary/80"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}