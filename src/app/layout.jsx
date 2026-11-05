import "@/styles/globals.css";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import CustomCursor from "@/components/motion/CustomCursor";
import MotionToggle from "@/components/motion/MotionToggle";
import { profile } from "@/data/profile";

export const metadata = {
  metadataBase: new URL("https://sampatakumar.github.io"),
  title: {
    default: "Sampatakumar V | Full-Stack Developer & Software Engineer",
    template: "%s | Sampatakumar V",
  },
  description:
    "Official portfolio of Sampatakumar V — Full-Stack Developer & Software Engineer based in Bengaluru, India. Creator of Smart Skill Hub (published in IRE Journals), ResumeAI, and real-time distributed web applications.",
  keywords: [
    "Sampatakumar",
    "Sampatakumar V",
    "Full Stack Developer",
    "Software Engineer",
    "Smart Skill Hub",
    "ResumeAI",
    "Git Reviewer",
    "Bengaluru Developer",
    "React 19",
    "Next.js App Router",
    "Node.js",
    "TypeScript",
    "IRE Journals",
    "GSAP Developer",
  ],
  authors: [{ name: "Sampatakumar V", url: "https://sampatakumar.github.io/" }],
  creator: "Sampatakumar V",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sampatakumar.github.io/",
    siteName: "Sampatakumar V Portfolio",
    title: "Sampatakumar V | Full-Stack Developer & Software Engineer",
    description:
      "Explore high-impact applications, AI systems, and published research engineered by Sampatakumar V. Specializing in Next.js, React, TypeScript, and resilient cloud architectures.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Sampatakumar V - Full-Stack Developer & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sampatakumar V | Full-Stack Developer & Software Engineer",
    description:
      "Full-Stack Developer exploring creative frontend engineering, intelligent applications, and meaningful software.",
    images: ["/profile.png"],
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
    google: ["google99665a0428bf1f0e.html", "CsY5j_qZzQC5AkwgFQmX6dfiKJY6wXgdFZcwfEGQHEo"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sampatakumar.github.io/#person",
        name: profile.name,
        givenName: profile.firstName,
        familyName: profile.lastName,
        url: profile.links.website,
        email: profile.contact.emailMailto,
        telephone: profile.contact.phone,
        image: "https://sampatakumar.github.io/profile.png",
        jobTitle: profile.title,
        alumniOf: {
          "@type": "EducationalOrganization",
          name: profile.education.institution,
        },
        knowsAbout: [
          "Full-Stack Web Engineering",
          "Next.js & React 19",
          "System Architecture",
          "TypeScript",
          "Node.js & Express",
          "MongoDB & PostgreSQL",
          "Docker Container Sandboxing",
          "AI Inference & LLM Pipelines",
        ],
        sameAs: [
          profile.socials.github.url,
          profile.socials.linkedin.url,
          profile.contact.whatsapp,
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://sampatakumar.github.io/#website",
        url: profile.links.website,
        name: "Sampatakumar V Portfolio",
        publisher: { "@id": "https://sampatakumar.github.io/#person" },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://sampatakumar.github.io/#agency",
        name: profile.links.agencyName,
        url: profile.links.services,
        telephone: profile.contact.phone,
        email: profile.contact.email,
        description: "Custom full-stack web applications, technical SEO optimization, and high-performance digital engineering.",
      },
    ],
  };

  return (
    <html
      lang="en"
      className="dark"
    >
      <body className="font-sans bg-canvas text-editorial-light selection:bg-accent selection:text-canvas antialiased">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Subtle Film Grain Noise Overlay */}
        <div className="film-grain" />

        {/* Global Smooth Momentum Scrolling Provider */}
        <SmoothScrollProvider>
          {/* Custom Precision Desktop Cursor */}
          <CustomCursor />

          {/* Accessibility Motion Toggle Button */}
          <MotionToggle />

          {/* Children Page Content */}
          <main className="min-h-screen flex flex-col justify-between">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

