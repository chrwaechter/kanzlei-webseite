import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://www.kanzlei-waechter.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Rechtsanwalt Christian Wächter | Kanzlei München",
    template: "%s | Kanzlei Wächter München",
  },
  description:
    "Rechtsanwaltskanzlei Christian Wächter in München - Experte für Erbrecht, Familienrecht, Immobilienrecht und Zwangsversteigerungsrecht. Über 20 Jahre Erfahrung. Jetzt Termin vereinbaren.",

  keywords: [
    "Rechtsanwalt München",
    "Kanzlei München",
    "Christian Wächter",
    "Erbrecht München",
    "Familienrecht München",
    "Immobilienrecht München",
    "Zwangsversteigerungsrecht",
    "Scheidung München",
    "Testament München",
    "Anwalt Erbschaft",
    "Österreichisches Recht",
    "Rechtsberatung München",
  ],

  authors: [{ name: "Christian Wächter", url: BASE_URL }],
  creator: "Christian Wächter",
  publisher: "Kanzlei Wächter",

  // Canonical & alternates
  alternates: {
    canonical: BASE_URL,
    languages: {
      "de-DE": BASE_URL,
    },
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Kanzlei Wächter München",
    title: "Rechtsanwalt Christian Wächter | Kanzlei München",
    description:
      "Kompetente Rechtsberatung in München - Erbrecht, Familienrecht, Immobilienrecht und Zwangsversteigerungsrecht. Über 20 Jahre Erfahrung.",
    images: [
      {
        url: "/images/og-image.jpg", // 1200x630px Bild hier ablegen
        width: 1200,
        height: 630,
        alt: "Rechtsanwalt Christian Wächter - Kanzlei München",
      },
    ],
  },

  // Twitter / X Card
  twitter: {
    card: "summary_large_image",
    title: "Rechtsanwalt Christian Wächter | Kanzlei München",
    description:
      "Kompetente Rechtsberatung in München - Erbrecht, Familienrecht, Immobilienrecht und Zwangsversteigerungsrecht.",
    images: ["/images/og-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  // Verification (optional - eintragen wenn Google Search Console eingerichtet)
  // verification: {
  //   google: "GOOGLE_SEARCH_CONSOLE_TOKEN",
  // },
};

// Strukturierte Daten (JSON-LD) für Google
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Rechtsanwalt Christian Wächter",
  url: BASE_URL,
  telephone: "+49-89-51518765",
  email: "mail@ra-waechter.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hermann-Lingg-Str. 10",
    addressLocality: "München",
    postalCode: "80336",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1395507,
    longitude: 11.5407277,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "München",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rechtsgebiete",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Erbrecht" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Familienrecht" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Immobilienrecht" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zwangsversteigerungsrecht" } },
    ],
  },
  founder: {
    "@type": "Person",
    name: "Christian Wächter",
    jobTitle: "Rechtsanwalt",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}