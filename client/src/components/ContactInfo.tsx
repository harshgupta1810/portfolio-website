import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Globe, MapPin, Github, Linkedin } from "lucide-react"

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@harshgupta.dev",
    href: "mailto:contact@harshgupta.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.harshgupta.dev",
    href: "https://www.harshgupta.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
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