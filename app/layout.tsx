import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Axiora GTM — Outbound Systems That Fill Your Pipeline',
  description: 'We build done-for-you GTM systems combining AI automation, lead generation, and outreach campaigns that consistently deliver qualified pipeline for B2B companies.',
  keywords: 'GTM engineering, lead generation, AI automation, outbound systems, B2B growth',
  authors: [{ name: 'Abdullah Al Masud' }],
  openGraph: {
    title: 'Axiora GTM — Outbound Systems That Fill Your Pipeline',
    description: 'Done-for-you GTM systems combining AI automation and outreach.',
    url: 'https://axioragtm.com',
    siteName: 'Axiora GTM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@axioragtm',
    creator: '@axioragtm',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
