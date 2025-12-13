import type { Metadata } from "next"

import "./globals.css"

import "bootstrap/dist/css/bootstrap.min.css"

import GoogleAnalytics from "./components/GoogleAnalytics"



export const metadata: Metadata = {
  title: "Έβελυν Πατσιούρα- Ψυχολόγος (BSc)",
  description: "Ψυχολογική υποστήριξη και συμβουλευτική από την Έβελυν Πατσιούρα, πτυχιούχο ψυχολόγο. Εξειδίκευση σε άγχος, κατάθλιψη και προσωπική ανάπτυξη.",
  openGraph: {
    title: "Έβελυν Πατσιούρα - Ψυχολόγος (BSc)",
    description: "Ψυχολογική υποστήριξη και συμβουλευτική",
    url: "https://www.evelynpatsioura.gr",
    siteName: "Έβελυν Πατσιούρα",
    // images: [
    //   {
    //     url: "/og-image.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "Έβελυν Πατσιούρα - Ψυχολόγος",
    //   },
    // ],
    locale: "el_GR",
    type: "website",
  },

  keywords: ["ψυχολόγος", "ψυχοθεραπεία", "συμβουλευτική", "άγχος", "κατάθλιψη"],
  authors: [{ name: "Έβελυν Πατσιούρα" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://www.evelynpatsioura.gr",
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}
