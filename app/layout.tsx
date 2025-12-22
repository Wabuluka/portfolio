import type { Metadata } from "next";
import "./global.css";

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
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
