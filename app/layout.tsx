import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "./components/layout/LenisProvider";
import { Metadata } from "next";
import { seoConfig } from "./config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucymaetan.com'),
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: "Lucy Mae Tan" }],
  creator: "Lucy Mae Tan",
  publisher: "Lucy Mae Tan",
  alternates: seoConfig.alternates,
  openGraph: {
    ...seoConfig.openGraph,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucy Mae Tan - Full Stack Developer',
      },
    ],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

// Enhanced JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://lucymaetan.com/#person",
      name: "Lucy Mae Tan",
      url: "https://lucymaetan.com",
      sameAs: [
        "https://github.com/lucenmae",
        "https://linkedin.com/in/lucymaetan",
      ],
      jobTitle: "Full Stack Developer",
      image: {
        "@type": "ImageObject",
        "@id": "https://lucymaetan.com/#image",
        url: "https://lucymaetan.com/profile-image.jpg",
        width: 1200,
        height: 630,
      },
      description: seoConfig.description,
    },
    {
      "@type": "WebSite",
      "@id": "https://lucymaetan.com/#website",
      url: "https://lucymaetan.com",
      name: seoConfig.defaultTitle,
      publisher: {
        "@id": "https://lucymaetan.com/#person"
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": "https://lucymaetan.com/#webpage",
      url: "https://lucymaetan.com",
      name: seoConfig.defaultTitle,
      isPartOf: { "@id": "https://lucymaetan.com/#website" },
      about: { "@id": "https://lucymaetan.com/#person" },
      description: seoConfig.description,
      breadcrumb: {
        "@id": "https://lucymaetan.com/#breadcrumb"
      },
      inLanguage: "en-US",
      potentialAction: [
        {
          "@type": "ReadAction",
          target: ["https://lucymaetan.com"]
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
