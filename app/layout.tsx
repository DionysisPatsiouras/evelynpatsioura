import type { Metadata } from "next"

import "./globals.css"

import "bootstrap/dist/css/bootstrap.min.css"

import GoogleAnalytics from "./components/GoogleAnalytics"
import ScrollToTop from "./components/ScrollToTop"



export const metadata: Metadata = {
  title: "Έβελυν Πατσιούρα - Ψυχολόγος (BSc, ΜΑ)",
  description: "Παροχή συμβουλευτικής υποστήριξης και ατομική ψυχοθεραπεία σε εφήβους και ενήλικες σε ένα ασφαλές και υποστηρικτικό περιβάλλον με έμφαση στις μοναδικές ανάγκες του κάθε ατόμου. Έβελυν Πατσιούρα - Ψυχολόγος (BSc, ΜΑ",
  openGraph: {
    title: "Έβελυν Πατσιούρα - Ψυχολόγος (BSc, ΜΑ)",
    description: "Ψυχολογική υποστήριξη και συμβουλευτική",
    url: "https://www.evelynpatsioura.gr",
    siteName: "Έβελυν Πατσιούρα - Ψυχολόγος (BSc, ΜΑ)",
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

  keywords: ["ψυχολόγος", "ψυχοθεραπεία", "συμβουλευτική", "άγχος", "κατάθλιψη", "διαχείριση άγχους", "κρίσεις πανικού", "φοβίες", "αυτοεκτίμηση", "cbt"],
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

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </head>
      <body>
        {children}
        <ScrollToTop />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
