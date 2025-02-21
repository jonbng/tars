import type React from "react"
import { tarsMonoSharp, tarsMonoRounded, tarsMonoSmooth } from "./fonts"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${tarsMonoSharp.variable} ${tarsMonoRounded.variable} ${tarsMonoSmooth.variable}`}>
      <body>{children}</body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
