"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { MessageSquare, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/layout/section"

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and project requirements through detailed consultation.",
    duration: "1-2 weeks",
    deliverables: ["Project roadmap", "Technical specifications", "Timeline & milestones"]
  },
  {
    icon: Lightbulb,
    title: "Design & Strategy",
    description: "Our team creates wireframes, prototypes, and design concepts that align with your brand and user experience goals.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX designs", "Prototypes", "Brand guidelines"]
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "We build your solution using best practices, conduct thorough testing, and ensure everything works perfectly.",
    duration: "4-8 weeks",
    deliverables: ["Functional product", "Quality assurance", "Performance optimization"]
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your solution, provide training, and offer ongoing support to ensure your continued success.",
    duration: "1 week + ongoing",
    deliverables: ["Live deployment", "Training materials", "Support documentation"]
  }
]

export function ServicesProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" id="process">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We follow a proven methodology that ensures successful project delivery 
            and exceptional results for every client.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-background">
                    <CardHeader className="text-center space-y-4">
                      {/* Step Number */}
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-purple-600 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {index + 1}
                        </div>
                      </div>
                      
                      <div>
                        <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                        <div className="text-sm text-primary font-medium mb-2">
                          Duration: {step.duration}
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {step.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-3">Key Deliverables:</h4>
                        <ul className="space-y-2">
                          {step.deliverables.map((deliverable) => (
                            <li key={deliverable} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>{deliverable}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6 pt-8 border-t border-border/50"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss your project and create a customized plan that fits
              your timeline and budget.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
