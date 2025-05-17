import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lucy Mae Tan | Software Engineer & Graphic Designer",
  description: "Experienced Software Engineer and Graphic Designer based in the Philippines. Specializing in React, Angular, Node.js, and creative digital solutions with a focus on user-centric design and development.",
  keywords: [
    "Lucy Mae Tan",
    "Software Engineer",
    "Web Developer",
    "Graphic Designer",
    "Philippines Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Angular Developer",
    "Node.js Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Creative Developer",
    "Web Designer Philippines",
    "Frontend Developer"
  ],
  authors: [{ name: "Lucy Mae Tan", url: "https://linkedin.com/in/lucy-mae-tan-286940230" }],
  creator: "Lucy Mae Tan",
  publisher: "Lucy Mae Tan",
  category: "Technology",
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
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://lucymaetan.com",
    siteName: "Lucy Mae Tan - Software Engineer & Designer Portfolio",
    title: "Lucy Mae Tan | Software Engineer & Graphic Designer Portfolio",
    description: "Experienced Software Engineer and Graphic Designer based in the Philippines. Explore my projects featuring React, Angular, Node.js development and creative design solutions.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Lucy Mae Tan - Software Engineer and Graphic Designer Portfolio"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucy Mae Tan | Software Engineer & Graphic Designer",
    description: "Software Engineer and Graphic Designer crafting digital experiences with modern web technologies and creative design solutions.",
    images: ["/og-image.jpg"],
    creator: "@lucymaetan",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://lucymaetan.com",
  },
  other: {
    "theme-color": "#060606",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black",
  },
}; 