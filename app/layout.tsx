import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
  metadataBase: new URL("https://yorra.in"),

  title: {
    default: "Yorra Tech | Build. Grow. Automate.",
    template: "%s | Yorra Tech",
  },

  description:
    "Yorra Tech helps businesses build powerful websites, grow their digital presence, and automate business processes.",

  keywords: [
    "Yorra Tech",
    "website development",
    "digital growth",
    "business automation",
    "web development company",
    "SEO services",
    "business automation services",
  ],

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Yorra Tech | Build. Grow. Automate.",
    description:
      "Yorra Tech helps businesses build powerful websites, grow their digital presence, and automate business processes.",
    url: "https://yorra.in/",
    siteName: "Yorra Tech",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yorra.in/#organization",
      name: "Yorra Tech",
      url: "https://yorra.in/",
      logo: {
        "@type": "ImageObject",
        url: "https://yorra.in/icon.png",
      },
      description:
        "Yorra Tech helps businesses build powerful websites, grow their digital presence, and automate business processes.",
    },
    {
      "@type": "WebSite",
      "@id": "https://yorra.in/#website",
      url: "https://yorra.in/",
      name: "Yorra Tech",
      publisher: {
        "@id": "https://yorra.in/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        <LoadingScreen />
        <ScrollProgress />
        <MouseGlow />
        <Navbar />

        {children}

        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}