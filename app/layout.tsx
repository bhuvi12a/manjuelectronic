import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0284c7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manjuelectronics.in"),
  title: "Best LED TV Repair Services in Hosur | 4K LED TV Repair Specialist | Manju Electronics",
  description:
    "Looking for the best LED TV repair services in Hosur? Manju Electronics is your #1 4K LED TV repair specialist. Doorstep display backlight, panel & motherboard repair for Sony, Samsung, LG, Mi TVs in Hosur. Call +91 98947 66097.",
  keywords: [
    "best LED tv repair services in hosur",
    "led tv repair services",
    "4k led tv repair specialist",
    "4k led tv repair spicalist",
    "LED TV repair services in Hosur",
    "best LED TV repair in Hosur",
    "4K LED TV repair specialist in Hosur",
    "doorstep LED TV repair services",
    "LED TV repair services near me",
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
  authors: [{ name: "Mr. Manjunath - Manju Electronics Hosur" }],
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
    "place:location:latitude": "12.7450633",
    "place:location:longitude": "77.8378731",
  },
  openGraph: {
    title: "Best LED TV Repair Services in Hosur | 4K LED TV Repair Specialist",
    description: "5.0 Star rated best LED TV repair services in Hosur. Certified 4K LED TV repair specialist Mr. Manjunath provides same-day doorstep TV display panel & motherboard repair.",
    url: "https://manjuelectronics.in",
    siteName: "MANJU ELECTRONICS (4K.LEDTV SERVICE)",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LED TV Repair Services in Hosur | 4K LED TV Repair Specialist",
    description: "Expert doorstep LED TV repair services in Hosur for Sony, Samsung, LG, Mi 4K Smart TVs.",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
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
  verification: {
    google: "YEkwtjqMNJ9KBYD3KLb77Nl6NRa2wo3GkUHXCWUSqOI",
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
  "hasMap": "https://www.google.com/maps/dir//MANJU+ELECTRONICS+(4K.LEDTV+SERVICE),+Basthi,+Hosur,+Tamil+Nadu+635109/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae7194d192855f:0xa29cb460e95228a?sa=X&ved=1t:57443&ictx=111",
  "sameAs": [
    "https://www.google.com/maps/dir//MANJU+ELECTRONICS+(4K.LEDTV+SERVICE),+Basthi,+Hosur,+Tamil+Nadu+635109/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bae7194d192855f:0xa29cb460e95228a?sa=X&ved=1t:57443&ictx=111"
  ],
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
          "name": "Best LED TV Repair Services in Hosur",
          "description": "Top-rated doorstep LED TV repair services in Hosur by 4K LED TV repair specialist Mr. Manjunath for Sony, Samsung, LG, Mi, OnePlus, TCL, Vu, Panasonic & Haier 4K Smart TVs."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "4K LED TV Repair Specialist in Hosur",
          "description": "Specialized 4K LED & OLED Smart TV display panel backlight replacement, T-Con board fixes, and motherboard repairs in Hosur."
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

