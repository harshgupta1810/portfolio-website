import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Globe, MapPin, Github, Linkedin } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "harshgup11@gmail.com",
    href: "mailto:harshgup11@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7742469302",
    href: "tel:+917742469302",
  },
  {
    icon: Github,
    label: "Github",
    value: "harshgupta1810",
    href: "https://github.com/harshgupta1810",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaipur, India",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/harshgupta1810",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-gupta-52465a204/",
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-4">
      {contactDetails.map((contact) => {
        const Icon = contact.icon
        return (
          <Card key={contact.label} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{contact.label}</div>
                <a
                  href={contact.href}
                  className="font-medium hover:underline"
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {contact.value}
                </a>
              </div>
            </CardContent>
          </Card>
        )
      })}

      <div className="flex gap-4 mt-6">
        {socialLinks.map((social) => {
          const Icon = social.icon
          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>
    </div>
  )
}