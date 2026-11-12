import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

/* Self-hosted variable fonts (latin subset), downloaded from Google Fonts.
 * Local files remove the compile-time network dependency that breaks
 * Turbopack builds when the font cache gets corrupted — and load faster. */
const playfair = localFont({
  variable: "--font-playfair",
  src: [
    {
      path: "./fonts/PlayfairDisplay-latin-variable.woff2",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./fonts/PlayfairDisplay-italic-latin-variable.woff2",
      weight: "400 900",
      style: "italic",
    },
  ],
  display: "swap",
});

const dmSans = localFont({
  variable: "--font-dm-sans",
  src: [
    {
      path: "./fonts/DMSans-latin-variable.woff2",
      weight: "100 1000",
      style: "normal",
    },
    {
      path: "./fonts/DMSans-italic-latin-variable.woff2",
      weight: "100 1000",
      style: "italic",
    },
  ],
  display: "swap",
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  src: [
    {
      path: "./fonts/JetBrainsMono-latin-variable.woff2",
      weight: "100 800",
      style: "normal",
    },
  ],
  display: "swap",
});

/* Dark-first: the site opens on the ink theme; the header toggle and a
 * stored preference still switch it, and the system option stays available. */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f8f6" },
    { media: "(prefers-color-scheme: dark)", color: "#17140f" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://dieg0y.github.io"),
  title: "Diego Yonoff | IAM Analyst — Identity & Access Management",
  description:
    "Portfolio of Diego Yonoff — IAM analyst based in Barranquilla, Colombia, focused on identity lifecycle (JML), RBAC, access reviews, Microsoft Entra ID and Active Directory, and identity security (ITDR). Open to remote IAM roles.",
  keywords: [
    "Diego Yonoff",
    "IAM Analyst",
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
    title: "Diego Yonoff | IAM Analyst — Identity & Access Management",
    description:
      "Evidence-based IAM skills, identity-focused projects, labs, and certifications. Seeking a first remote IAM role.",
  },
  twitter: {
    card: "summary",
    title: "Diego Yonoff | IAM Analyst",
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
  jobTitle: "IAM Analyst",
  description:
    "Systems Engineering student focused on Identity and Access Management (IAM) and Identity Security, seeking a first remote IAM role.",
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
          defaultTheme="dark"
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
