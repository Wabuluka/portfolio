import type { Metadata } from "next";
import "./global.css";
import { Manrope } from "next/font/google";
import { ReduxProvider } from "@/components/providers/ReduxProvider";
import { ThemeInitializer } from "@/components/ThemeInitializer";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Davies Wabuluka - Full-Stack Engineer",
  description:
    "7+ years building scalable web and mobile platforms. React, TypeScript, Node.js, AWS specialist.",
  keywords: [
    "Full-Stack Engineer",
    "React Developer",
    "Node.js",
    "TypeScript",
    "AWS",
    "Software Engineer",
  ],
  authors: [{ name: "Davies Wabuluka" }],
  openGraph: {
    title: "Davies Wabuluka - Full-Stack Engineer",
    description: "7+ years building scalable web and mobile platforms",
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
        {/* Script to prevent flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme') || 'system';
                  var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var initialTheme = storedTheme === 'system' ? systemTheme : storedTheme;
                  
                  // Apply theme to html element
                  document.documentElement.classList.add(initialTheme);
                  document.documentElement.style.colorScheme = initialTheme;
                  
                  // Also set a data attribute for CSS targeting
                  document.documentElement.setAttribute('data-theme', initialTheme);
                } catch (e) {
                  // Fallback to light theme
                  document.documentElement.classList.add('light');
                  document.documentElement.style.colorScheme = 'light';
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${manrope.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ReduxProvider>
          <ThemeInitializer />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
