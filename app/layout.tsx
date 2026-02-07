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

export const metadata: Metadata = {
  title: "Davies Wabuluka - Senior Software Engineer",
  description:
    "Senior Software Engineer with 7+ years designing production-grade platforms serving 10,000+ users. React, TypeScript, Node.js, GraphQL & AWS expert.",
  keywords: [
    "Senior Software Engineer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "AWS",
    "React Native",
    "Full-Stack Engineer",
  ],
  authors: [{ name: "Davies Wabuluka" }],
  openGraph: {
    title: "Davies Wabuluka - Senior Software Engineer",
    description:
      "7+ years designing production-grade platforms serving 10,000+ users across fintech, ridesharing, and audit management.",
    type: "website",
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
