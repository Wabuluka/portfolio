import type { Metadata } from "next";
import "./global.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { ThemeInitializer } from "@/components/ThemeInitializer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

const siteUrl = "https://davieswabuluka.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Davies Wabuluka — Senior Software Engineer",
    template: "%s | Davies Wabuluka",
  },
  description:
    "Senior Software Engineer with 7+ years designing production-grade platforms serving 10,000+ users across fintech, ridesharing & audit management. React, TypeScript, Node.js, GraphQL & AWS expert.",
  keywords: [
    "Davies Wabuluka",
    "Senior Software Engineer",
    "Full-Stack Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "GraphQL Developer",
    "AWS Architect",
    "React Native Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Davies Wabuluka", url: siteUrl }],
  creator: "Davies Wabuluka",
  publisher: "Davies Wabuluka",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Davies Wabuluka",
    title: "Davies Wabuluka — Senior Software Engineer",
    description:
      "7+ years designing production-grade platforms serving 10,000+ users across fintech, ridesharing & audit management. Expert in React, TypeScript, Node.js & AWS.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Davies Wabuluka — Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Davies Wabuluka — Senior Software Engineer",
    description:
      "7+ years designing production-grade platforms serving 10,000+ users. React, TypeScript, Node.js & AWS expert.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme') || 'system';
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = storedTheme === 'system' ? systemTheme : storedTheme;
                  document.documentElement.classList.add(initialTheme);
                  document.documentElement.style.colorScheme = initialTheme;
                  document.documentElement.setAttribute('data-theme', initialTheme);
                } catch (e) {
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrains.variable} font-sans antialiased bg-base-100 text-base-content transition-colors duration-200`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ReduxProvider>
          <ThemeInitializer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
