import type React from "react"
// import { tarsMonoSharp, tarsMonoRounded, tarsMonoSmooth } from "./fonts"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en" className={`${tarsMonoSharp.variable} ${tarsMonoRounded.variable} ${tarsMonoSmooth.variable}`}>
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export const metadata = {
  title: "Tars Mono",
  description: "A monospaced font designed for coding and creative projects.",
  openGraph: {
    title: "Tars Mono",
    description:
      "A monospaced font designed for coding and creative projects.",
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
}