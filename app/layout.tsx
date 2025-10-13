import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import { ScrollAnimations } from "@/components/scroll-animations"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Tahasin Shadat | Software Engineer, AI & Robotics Developer at Northwestern University",
  description:
    "Tahasin Shadat (also known as Tahsin Shadat, Tahseen Shadat) is a software engineer and undergraduate at Northwestern University specializing in full-stack development, artificial intelligence, robotics, and machine learning. Experienced SWE intern at AWS, Brookfield Asset Management, Scale AI, and Google. Portfolio showcasing AI projects, robotics systems, and full-stack applications.",
  keywords: [
    "Tahasin Shadat",
    "Tahsin Shadat",
    "Tahseen Shadat",
    "Taseen Shadat",
    "Tasin Shadat",
    "Tahasin S",
    "T Shadat",
    "Software Engineer",
    "Full Stack Developer",
    "AI Developer",
    "Machine Learning Engineer",
    "Robotics Engineer",
    "Northwestern University",
    "Northwestern Computer Science",
    "AWS Intern",
    "Brookfield Asset Management",
    "Scale AI",
    "Google Student Engineer",
    "Invero Technologies CTO",
    "React Developer",
    "Next.js Developer",
    "Python Developer",
    "TypeScript Developer",
    "Computer Vision",
    "Deep Learning",
    "Autonomous Systems",
    "SLAM",
    "ROS2",
    "Three.js",
    "WebGL",
    "Portfolio",
    "Resume",
    "Projects",
    "Mancer Robotics",
  ],
  authors: [{ name: "Tahasin Shadat", url: "https://tahasin.dev" }],
  creator: "Tahasin Shadat",
  publisher: "Tahasin Shadat",
  generator: "Next.js",
  applicationName: "Tahasin Shadat Portfolio",
  referrer: "origin-when-cross-origin",
  metadataBase: new URL("https://tahasin.dev"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/ts-icon.svg",
    shortcut: "/ts-icon.svg",
  },
  openGraph: {
    title: "Tahasin Shadat | Software Engineer & AI Developer at Northwestern University",
    description:
      "Software engineer at Northwestern University with experience in full-stack development, AI, and robotics. SWE intern at AWS, Brookfield Asset Management, Scale AI, and Google. Explore my portfolio of AI-powered applications, autonomous robotics systems, and full-stack web projects.",
    url: "https://tahasin.dev",
    siteName: "Tahasin Shadat Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/linkedin-pfp.jpg",
        width: 1200,
        height: 630,
        alt: "Tahasin Shadat - Software Engineer and AI Developer at Northwestern University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahasin Shadat | Software Engineer & AI Developer",
    description:
      "Software engineer specializing in full-stack development, AI, and robotics. Northwestern University Computer Science student. SWE intern at AWS, Brookfield, Scale AI, and Google.",
    images: ["/linkedin-pfp.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://tahasin.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/ts-icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/ts-icon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tahasin Shadat",
              alternateName: [
                "Tahsin Shadat",
                "Tahseen Shadat",
                "Taseen Shadat",
                "Tasin Shadat",
                "Tahasin S",
                "T Shadat",
              ],
              url: "https://tahasin.dev",
              image: "https://tahasin.dev/linkedin-pfp.jpg",
              jobTitle: "Software Engineer",
              description:
                "Software engineer and undergraduate at Northwestern University specializing in full-stack development, artificial intelligence, and robotics",
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Northwestern University",
                },
                {
                  "@type": "Organization",
                  name: "Amazon Web Services",
                  description: "SWE Intern",
                },
                {
                  "@type": "Organization",
                  name: "Brookfield Asset Management",
                  description: "SWE Intern",
                },
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Northwestern University",
                department: "Computer Science",
              },
              sameAs: [
                "https://github.com/tahasinshadat",
                "https://linkedin.com/in/tahasin-shadat",
                "https://leetcode.com/u/tahasinshadat",
              ],
              email: "tahasinshadat@gmail.com",
              knowsAbout: [
                "Software Engineering",
                "Full Stack Development",
                "Artificial Intelligence",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Robotics",
                "Autonomous Systems",
                "SLAM",
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Three.js",
                "AWS",
                "Docker",
                "TensorFlow",
                "PyTorch",
                "ROS2",
                "OpenCV",
              ],
              hasOccupation: {
                "@type": "Occupation",
                name: "Software Engineer",
                occupationLocation: {
                  "@type": "City",
                  name: "Evanston, Illinois",
                },
                skills: [
                  "Full-Stack Development",
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Robotics",
                  "Computer Vision",
                  "Cloud Computing",
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tahasin Shadat Portfolio",
              alternateName: "Tahsin Shadat Portfolio",
              url: "https://tahasin.dev",
              description:
                "Personal portfolio website of Tahasin Shadat showcasing software engineering projects, AI applications, and robotics systems",
              author: {
                "@type": "Person",
                name: "Tahasin Shadat",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://tahasin.dev/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
        </Suspense>
        <ScrollAnimations />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  )
}
