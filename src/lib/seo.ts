import { Metadata } from 'next'

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const defaultSEO = {
  title: 'Premium Business Template - Professional Website Solution',
  description: 'High-end, SEO-optimized business website template built with Next.js, Tailwind CSS, and modern design principles. Perfect for agencies, startups, and professional services.',
  keywords: ['business template', 'website template', 'nextjs', 'tailwind css', 'professional website', 'seo optimized'],
  image: '/og-image.jpg',
  url: 'https://your-domain.com',
  type: 'website' as const,
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags,
}: SEOProps = {}): Metadata {
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title
  const seoDescription = description || defaultSEO.description
  const seoImage = image || defaultSEO.image
  const seoUrl = url ? `${defaultSEO.url}${url}` : defaultSEO.url
  const seoKeywords = keywords || defaultSEO.keywords

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: 'Premium Business Template',
    publisher: 'Premium Business Template',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultSEO.url),
    alternates: {
      canonical: seoUrl,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: seoUrl,
      siteName: 'Premium Business Template',
      images: [
        {
          url: seoImage,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      locale: 'en_US',
      type: type === 'product' ? 'website' : type,
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
        section,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [seoImage],
      creator: '@yourtwitterhandle',
      site: '@yourtwitterhandle',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
  }
}

export function generateStructuredData(type: 'Organization' | 'WebSite' | 'Article' | 'Product', data: Record<string, unknown>) {
  const baseUrl = defaultSEO.url

  switch (type) {
    case 'Organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: data.name || 'Your Business Name',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        description: data.description || defaultSEO.description,
        address: data.address && {
          '@type': 'PostalAddress',
          streetAddress: data.address.street,
          addressLocality: data.address.city,
          addressRegion: data.address.state,
          postalCode: data.address.zip,
          addressCountry: data.address.country,
        },
        contactPoint: data.contact && {
          '@type': 'ContactPoint',
          telephone: data.contact.phone,
          contactType: 'customer service',
          email: data.contact.email,
        },
        sameAs: data.socialMedia || [],
      }

    case 'WebSite':
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: data.name || defaultSEO.title,
        url: baseUrl,
        description: data.description || defaultSEO.description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${baseUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      }

    case 'Article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        image: data.image,
        author: {
          '@type': 'Person',
          name: data.author,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Your Business Name',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      }

    case 'Product':
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: data.name,
        description: data.description,
        image: data.image,
        brand: {
          '@type': 'Brand',
          name: data.brand || 'Your Business Name',
        },
        offers: {
          '@type': 'Offer',
          price: data.price,
          priceCurrency: data.currency || 'USD',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'Your Business Name',
          },
        },
      }

    default:
      return null
  }
}
