"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/layout/section"
import { cn } from "@/lib/utils"

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  "Web Development",
  "Digital Marketing",
  "Consulting",
  "E-commerce Solutions",
  "Mobile App Development",
  "SEO Optimization",
  "Other"
]

const budgetRanges = [
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log("Form submitted:", data)
    setIsSubmitting(false)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  if (isSubmitted) {
    return (
      <Section padding="lg" background="muted">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="border-green-200 bg-green-50">
            <CardContent className="pt-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-600">
                Thank you for reaching out. We'll get back to you within 2 hours.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </Section>
    )
  }

  return (
    <Section padding="xl" background="muted" id="contact-form">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get Your Free{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tell us about your project and we'll provide you with a detailed proposal 
            and timeline within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Please fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className={cn(errors.firstName && "border-red-500")}
                      placeholder="John"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className={cn(errors.lastName && "border-red-500")}
                      placeholder="Doe"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={cn(errors.email && "border-red-500")}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={cn(errors.phone && "border-red-500")}
                      placeholder="+1 (555) 123-4567"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    {...register("company")}
                    className={cn(errors.company && "border-red-500")}
                    placeholder="Your Company Inc."
                  />
                  {errors.company && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.company.message}
                    </p>
                  )}
                </div>

                {/* Service and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">
                      Service Needed *
                    </label>
                    <select
                      id="service"
                      {...register("service")}
                      className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        errors.service && "border-red-500"
                      )}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="budget" className="text-sm font-medium">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      {...register("budget")}
                      className={cn(
                        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        errors.budget && "border-red-500"
                      )}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-sm text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Project Description *
                  </label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    className={cn(errors.message && "border-red-500")}
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
