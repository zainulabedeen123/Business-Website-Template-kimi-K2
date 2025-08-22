"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Calendar,
  Headphones,
  Globe
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+1 (555) 123-4567",
    action: "Call Now",
    href: "tel:+15551234567",
    available: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed message",
    value: "contact@yourbusiness.com",
    action: "Send Email",
    href: "mailto:contact@yourbusiness.com",
    available: "24/7 Response"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant support",
    value: "Available Now",
    action: "Start Chat",
    href: "#",
    available: "Mon-Fri 9AM-6PM EST"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation call",
    value: "Free 30-min session",
    action: "Book Now",
    href: "#",
    available: "Flexible Scheduling"
  }
]

const officeInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    address: "123 Business Street",
    city: "New York, NY 10001",
    country: "United States"
  },
  {
    icon: Globe,
    title: "European Office",
    address: "456 Innovation Ave",
    city: "London, UK SW1A 1AA",
    country: "United Kingdom"
  }
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM EST" },
  { day: "Sunday", hours: "Closed" },
  { day: "Emergency Support", hours: "24/7 Available" }
]

export function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" id="contact-info">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Multiple Ways to{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the communication method that works best for you. 
            We're here to help and respond quickly to all inquiries.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <div className="font-semibold text-primary">{method.value}</div>
                      <div className="text-sm text-muted-foreground">{method.available}</div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <a href={method.href}>{method.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Office Locations & Business Hours */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Office Locations
                </CardTitle>
                <CardDescription>
                  Visit us at one of our convenient locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {officeInfo.map((office, index) => {
                  const Icon = office.icon
                  return (
                    <div key={office.title} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{office.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {office.address}<br />
                          {office.city}<br />
                          {office.country}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Business Hours
                </CardTitle>
                <CardDescription>
                  When you can reach us for support and consultations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={schedule.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Headphones className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-primary">24/7 Emergency Support</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    For urgent technical issues, our emergency support team is available 
                    around the clock to assist you.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
              <CardDescription>
                Our main office location in the heart of the business district
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">
                    Interactive map would be integrated here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    (Google Maps, Mapbox, or similar service)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
