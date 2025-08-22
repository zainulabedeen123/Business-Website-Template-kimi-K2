import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { Container } from "./container"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  services: [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "Consulting", href: "/services/consulting" },
    { label: "Support", href: "/support" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourbusiness", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/yourbusiness", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/yourbusiness", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/yourbusiness", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="font-bold text-xl">Business</span>
              </Link>
              <p className="text-muted-foreground mb-6 max-w-sm">
                Premium business solutions that drive growth and success. We help companies 
                transform their digital presence and achieve their goals.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>contact@yourbusiness.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>123 Business St, City, State 12345</span>
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Business Template. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}
