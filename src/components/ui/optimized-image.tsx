"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  fill?: boolean
  priority?: boolean
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
  sizes?: string
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  sizes,
  objectFit = "cover",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Generate a simple blur placeholder if none provided
  const defaultBlurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rq5TaULdtqdu9n9LmRXeX2VkjBYZjjqvqKObrm+gA8fmN/9k="

  if (hasError) {
    return (
      <div className={cn(
        "flex items-center justify-center bg-muted text-muted-foreground",
        className
      )}>
        <span className="text-sm">Image not available</span>
      </div>
    )
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL || defaultBlurDataURL}
        sizes={sizes}
        className={cn(
          "transition-all duration-700 ease-in-out",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0",
          `object-${objectFit}`
        )}
        style={{ objectFit }}
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
    </div>
  )
}
