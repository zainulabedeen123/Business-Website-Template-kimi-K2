"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 15+ years in tech. Sarah drives our strategic vision and ensures we deliver exceptional value to our clients.",
    image: STOCK_IMAGES.team.ceo,
    social: {
      linkedin: "https://linkedin.com/in/sarah-johnson",
      twitter: "https://twitter.com/sarahjohnson",
      email: "sarah@company.com"
    },
    expertise: ["Strategic Planning", "Business Development", "Leadership"]
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Tech innovator passionate about cutting-edge solutions. Michael leads our technical strategy and product development.",
    image: STOCK_IMAGES.team.cto,
    social: {
      linkedin: "https://linkedin.com/in/michael-chen",
      twitter: "https://twitter.com/michaelchen",
      email: "michael@company.com"
    },
    expertise: ["Software Architecture", "AI/ML", "Cloud Computing"]
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    bio: "Creative director with an eye for detail. Emily ensures our solutions are not just functional, but beautiful and user-friendly.",
    image: STOCK_IMAGES.team.designer,
    social: {
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      twitter: "https://twitter.com/emilyrodriguez",
      email: "emily@company.com"
    },
    expertise: ["UX/UI Design", "Brand Strategy", "User Research"]
  },
  {
    name: "David Thompson",
    role: "Lead Developer",
    bio: "Full-stack expert who turns ideas into reality. David leads our development team in building robust, scalable solutions.",
    image: STOCK_IMAGES.team.developer,
    social: {
      linkedin: "https://linkedin.com/in/david-thompson",
      twitter: "https://twitter.com/davidthompson",
      email: "david@company.com"
    },
    expertise: ["Full-Stack Development", "DevOps", "System Architecture"]
  },
  {
    name: "Lisa Wang",
    role: "Marketing Director",
    bio: "Growth strategist with a data-driven approach. Lisa helps our clients reach their target audience and achieve measurable results.",
    image: STOCK_IMAGES.team.marketing,
    social: {
      linkedin: "https://linkedin.com/in/lisa-wang",
      twitter: "https://twitter.com/lisawang",
      email: "lisa@company.com"
    },
    expertise: ["Digital Marketing", "Growth Hacking", "Analytics"]
  },
  {
    name: "James Miller",
    role: "Sales Director",
    bio: "Relationship builder focused on client success. James ensures our solutions perfectly match our clients' business needs.",
    image: STOCK_IMAGES.team.sales,
    social: {
      linkedin: "https://linkedin.com/in/james-miller",
      twitter: "https://twitter.com/jamesmiller",
      email: "james@company.com"
    },
    expertise: ["Business Development", "Client Relations", "Sales Strategy"]
  }
]

export function TeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="team">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, 
            design, and business strategy to deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-background overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                        <Linkedin className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                        <Twitter className="w-4 h-4 text-white" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30">
                        <Mail className="w-4 h-4 text-white" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium text-sm mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6 pt-8 border-t border-border/50"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Join Our Team</h3>
            <p className="text-muted-foreground">
              We're always looking for talented individuals to join our growing team.
            </p>
          </div>
          <Button size="lg" variant="outline">
            View Open Positions
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
