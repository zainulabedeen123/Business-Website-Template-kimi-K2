"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Section } from "@/components/layout/section"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { STOCK_IMAGES } from "@/lib/images"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    image: STOCK_IMAGES.testimonials.client1,
    content: "Working with this team has been transformative for our business. Their expertise and dedication helped us increase our revenue by 300% in just 6 months. The strategic approach and attention to detail exceeded all expectations.",
    rating: 5,
    results: "+300% Revenue Growth"
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    company: "Growth Co.",
    image: STOCK_IMAGES.testimonials.client2,
    content: "The level of professionalism and quality of work exceeded our expectations. They delivered exactly what we needed, on time and within budget. Our conversion rates improved by 150%.",
    rating: 5,
    results: "+150% Conversion Rate"
  },
  {
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Studio",
    image: STOCK_IMAGES.testimonials.client3,
    content: "Outstanding service and support. The team went above and beyond to ensure our project was a success. Our brand visibility increased dramatically across all channels.",
    rating: 5,
    results: "+200% Brand Visibility"
  },
  {
    name: "David Thompson",
    role: "CTO",
    company: "InnovateLab",
    image: STOCK_IMAGES.testimonials.client4,
    content: "Their technical expertise is unmatched. They solved complex problems that other agencies couldn't handle and delivered exceptional results. System performance improved by 400%.",
    rating: 5,
    results: "+400% Performance"
  },
  {
    name: "Lisa Wang",
    role: "Operations Manager",
    company: "ScaleUp Solutions",
    image: STOCK_IMAGES.testimonials.client5,
    content: "The ROI we've seen from their work has been incredible. Our efficiency improved dramatically and our customers are happier than ever. Operational costs reduced by 60%.",
    rating: 5,
    results: "-60% Operational Costs"
  },
  {
    name: "James Miller",
    role: "Product Manager",
    company: "NextGen Apps",
    image: STOCK_IMAGES.testimonials.client6,
    content: "Professional, reliable, and results-driven. They understand business needs and translate them into effective digital solutions. User engagement increased by 250%.",
    rating: 5,
    results: "+250% User Engagement"
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <Section padding="xl" id="testimonials">
      <div ref={ref} className="space-y-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about working with us and the results they've achieved.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-0 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-6 space-y-6">
                  {/* Quote Icon and Rating */}
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Results Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    {testimonial.results}
                  </div>

                  {/* Author */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-border/50">
                    <div className="relative">
                      <Avatar className="w-12 h-12 ring-2 ring-primary/20">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-primary font-medium">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1200+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
