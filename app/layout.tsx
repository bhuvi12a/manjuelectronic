import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LED TV Repair Services in Hosur | Sony, Samsung, LG & Mi TV Repair | Manju Electronics",
  description:
    "Top-rated LED TV Repair Services in Hosur. Specialist for Sony brand TV repair in Hosur, Samsung, LG, Mi, OnePlus, Vu, TCL 4K Smart TVs. Doorstep service in Basthi & Hosur. Call +91 98947 66097.",
  keywords: [
    "LED TV repair services in Hosur",
    "TV repair in Hosur",
    "Sony brand TV repair in Hosur",
    "Samsung TV repair in Hosur",
    "LG TV repair in Hosur",
    "Mi TV repair in Hosur",
    "OnePlus TV repair in Hosur",
    "TCL TV repair in Hosur",
    "Vu TV repair in Hosur",
    "Realme TV repair in Hosur",
    "Panasonic TV repair in Hosur",
    "Haier TV repair in Hosur",
    "4K LED TV screen repair Hosur",
    "TV backlight replacement Hosur",
    "TV motherboard repair Hosur",
    "RO water purifier service in Hosur",
    "UPS inverter repair in Hosur",
    "DTH dish installation Hosur",
    "Manju Electronics Hosur",
    "Doorstep TV technician Hosur"
  ],
  authors: [{ name: "Manjunath Sir - Manju Electronics Hosur" }],
  creator: "Manju Electronics",
  publisher: "Manju Electronics",
  formatDetection: {
    telephone: true,
    address: true,
  },
  other: {
    "geo.position": "12.7450633;77.8378731",
    "geo.placename": "Basthi, Hosur, Tamil Nadu 635109, India",
    "geo.region": "IN-TN",
    "ICBM": "12.7450633, 77.8378731",
  },
  openGraph: {
    title: "LED TV Repair Services in Hosur | Sony, Samsung, LG, Mi TV Specialist",
    description: "5.0 Star Rated TV Repair Shop in Hosur. Fast doorstep LED, 4K Smart TV display, panel & motherboard repair by Manjunath Sir.",
    url: "https://manjuelectronics.in",
    siteName: "MANJU ELECTRONICS (4K.LEDTV SERVICE)",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LED TV Repair Services in Hosur | Manju Electronics",
    description: "Expert Sony, Samsung, LG & Mi TV repair in Hosur with doorstep service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ElectronicsRepair",
  "name": "MANJU ELECTRONICS (4K.LEDTV SERVICE)",
  "image": "https://manjuelectronics.in/images/manjunath_technician.jpg",
  "@id": "https://manjuelectronics.in/#localbusiness",
  "url": "https://manjuelectronics.in",
  "telephone": "+919894766097",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Basthi",
    "addressLocality": "Hosur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "635109",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.7450633,
    "longitude": 77.8378731
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "21:00"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "316"
  },
  "areaServed": [
    { "@type": "City", "name": "Hosur" },
    { "@type": "Place", "name": "Basthi, Hosur" },
    { "@type": "Place", "name": "Bagalur Road, Hosur" },
    { "@type": "Place", "name": "TVS Nagar, Hosur" },
    { "@type": "Place", "name": "SIPCOT, Hosur" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hosur Electronics Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "LED TV Repair Services in Hosur",
          "description": "Doorstep repair for Sony brand TV repair in Hosur, Samsung, LG, Mi, OnePlus, TCL, Vu, Panasonic & Haier 4K Smart TVs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Sony Brand TV Repair in Hosur",
          "description": "Specialized Sony Bravia LED TV display panel, backlight & motherboard repair in Hosur."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "RO Water Purifier Service in Hosur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UPS & Inverter Repair in Hosur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "DTH Dish Signal Alignment in Hosur"
        }
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

