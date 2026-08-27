import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Yorra Tech | Website Development, Digital Growth & Automation",
  description:
    "Contact Yorra Tech about website development, digital growth, SEO, lead generation, business automation, CRM, AI workflows, or a custom digital project.",
  alternates: {
    canonical: "https://yorra.in/contact",
  },
  openGraph: {
    title: "Contact Yorra Tech | Digital Solutions & Business Automation",
    description:
      "Talk to Yorra Tech about website development, digital growth, SEO, lead generation, and business automation.",
    url: "https://yorra.in/contact",
    siteName: "Yorra Tech",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
