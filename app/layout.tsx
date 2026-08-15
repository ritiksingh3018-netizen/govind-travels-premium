import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body>
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