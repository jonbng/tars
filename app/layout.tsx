import type React from "react";
import { tarsMonoSharp, tarsMonoRounded, tarsMonoSmooth } from "./fonts";
import "./globals.css";
import { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tarsMonoSharp.variable} ${tarsMonoRounded.variable} ${tarsMonoSmooth.variable} overflow-x-hidden`}
    >
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Tars Mono",
  description: "A monospaced font designed for titles and creative projects.",
  authors: [
    {
      name: "Jonathan Bangert",
      url: "https://jonathanb.dk",
    },
  ],
  category: "Design",
  keywords: ["font", "typography", "monospace", "design", "creative"],
  creator: "Jonathan Bangert",
  publisher: "Jonathan Bangert",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",
  metadataBase: new URL("https://tars.jonathanb.dk"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Tars Mono",
    description: "A monospaced font designed for titles and creative projects.",
    creator: "@arctixdev",
    site: "@arctixdev",
    images: ["/og-image.png"],
  },
  openGraph: {
    title: "Tars Mono",
    description: "A monospaced font designed for titles and creative projects.",
    url: "https://tars.jonathanb.dk",
    siteName: "Tars Mono",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};
