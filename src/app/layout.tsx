import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMetadata as generateSEOMetadata, generateStructuredData } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'hsl(221.2 83.2% 53.3%)' },
    { media: '(prefers-color-scheme: dark)', color: 'hsl(217.2 91.2% 59.8%)' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationData = {
    name: "Your Business Name",
    description: "Premium business solutions and professional services",
    address: {
      street: "123 Business Street",
      city: "Business City",
      state: "BC",
      zip: "12345",
      country: "US",
    },
    contact: {
      phone: "+1-555-123-4567",
      email: "contact@yourbusiness.com",
    },
    socialMedia: [
      "https://facebook.com/yourbusiness",
      "https://twitter.com/yourbusiness",
      "https://linkedin.com/company/yourbusiness",
    ],
  };

  const websiteData = {
    name: "Premium Business Template",
    description: "High-end, SEO-optimized business website template",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('Organization', organizationData)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('WebSite', websiteData)),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
