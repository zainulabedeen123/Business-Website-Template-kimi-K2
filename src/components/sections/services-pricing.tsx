"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/layout/section"

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "one-time",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page responsive website",
      "Mobile optimization",
      "Basic SEO setup",
      "Contact form integration",
      "3 months support"
    ],
    popular: false,
    cta: "Get Started"
  },
  {
    name: "Professional",
    price: "$5,000",
    period: "one-time",
    description: "Ideal for growing businesses",
    features: [
      "10-page responsive website",
      "Custom design & branding",
      "Advanced SEO optimization",
      "E-commerce integration",
      "Analytics setup",
      "6 months support"
    ],
    popular: true,
    cta: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "quote",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Advanced integrations",
      "Performance optimization",
      "Security features",
      "12 months support"
    ],
    popular: false,
    cta: "Contact Us"
  }
]

export function ServicesPricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" background="muted" id="pricing">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Simple{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that best fits 
            your business needs and budget.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <Card className={`h-full transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-xl shadow-primary/20 scale-105' 
                  : 'hover:shadow-lg border-0 bg-background'
              }`}>
                <CardHeader className="text-center space-y-4">
                  <div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">
                      {plan.description}
                    </CardDescription>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">
                      {plan.price}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.period}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
