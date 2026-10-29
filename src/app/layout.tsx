import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dieg0y.github.io"),
  title: "Diego Yonoff | Junior IAM Analyst — Identity & Access Management",
  description:
    "Portfolio of Diego Yonoff — junior IAM analyst based in Barranquilla, Colombia, focused on identity lifecycle (JML), RBAC, access reviews, Microsoft Entra ID and Active Directory, and identity security (ITDR). Open to remote junior IAM roles.",
  keywords: [
    "Diego Yonoff",
    "Junior IAM Analyst",
    "Identity and Access Management",
    "Identity Security",
    "ITDR",
    "Microsoft Entra ID",
    "Active Directory",
    "RBAC",
    "JML",
    "Access Reviews",
    "Identity Governance",
    "Barranquilla Colombia",
    "Remote IAM Jobs",
  ],
  authors: [{ name: "Diego Yonoff" }],
  creator: "Diego Yonoff",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://dieg0y.github.io/",
    siteName: "Diego Yonoff — IAM Portfolio",
    title: "Diego Yonoff | Junior IAM Analyst — Identity & Access Management",
    description:
      "Evidence-based IAM skills, identity-focused projects, labs, and certifications. Seeking a first remote junior IAM role.",
  },
  twitter: {
    card: "summary",
    title: "Diego Yonoff | Junior IAM Analyst",
    description:
      "Identity & Access Management portfolio — skills, projects, labs, and certifications with honest evidence levels.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Diego Yonoff Molina",
  jobTitle: "Junior IAM Analyst",
  description:
    "Systems Engineering student focused on Identity and Access Management (IAM) and Identity Security, seeking a first remote junior IAM role.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barranquilla",
    addressCountry: "Colombia",
  },
  url: "https://dieg0y.github.io/",
  sameAs: ["https://github.com/dieg0y", "https://www.linkedin.com/in/diegoyonoff/"],
  knowsAbout: [
    "Identity and Access Management (IAM)",
    "Identity Lifecycle Management (Joiner-Mover-Leaver)",
    "Role-Based Access Control (RBAC)",
    "Access Reviews",
    "Microsoft Entra ID",
    "Active Directory",
    "Identity Governance and Administration (IGA)",
    "OAuth 2.0 and OpenID Connect",
    "SAML",
    "SCIM",
    "JSON Web Tokens (JWT)",
    "Identity Threat Detection and Response (ITDR)",
    "Microsoft Graph API",
    "PowerShell",
    "Python",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased bg-paper text-ink font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
