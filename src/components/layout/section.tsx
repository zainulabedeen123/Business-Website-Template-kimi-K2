import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerSize?: "sm" | "md" | "lg" | "xl" | "full"
  padding?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "default" | "muted" | "accent" | "primary"
  id?: string
}

const paddingClasses = {
  none: "",
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24"
}

const backgroundClasses = {
  default: "",
  muted: "bg-muted/50",
  accent: "bg-accent/50", 
  primary: "bg-primary text-primary-foreground"
}

export function Section({ 
  children, 
  className,
  containerSize = "lg",
  padding = "lg",
  background = "default",
  id
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        paddingClasses[padding],
        backgroundClasses[background],
        className
      )}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  )
}
