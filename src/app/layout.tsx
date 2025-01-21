import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://traedocs.com'),
  title: {
    template: '%s | TraeDocs',
    default: 'TraeDocs - The AI Programming Knowledge Hub',
  },
  description: 'TraeDocs: Your trusted hub for AI programming resources. Curated by Trae, featuring high-quality articles and guides for AI-powered development.',
  keywords: 'TraeDocs, Trae, AI Programming Hub, AI Development Resources, Trae AI Resources, AI Programming Guide, TraeDocs Resources',
  authors: [{ name: 'Trae Team' }],
  creator: 'Trae',
  publisher: 'TraeDocs',
  openGraph: {
    title: 'TraeDocs - The AI Programming Knowledge Hub',
    description: 'TraeDocs: Your trusted hub for AI programming resources by Trae',
    url: 'https://traedocs.com',
    siteName: 'TraeDocs',
    locale: 'en-US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TraeDocs - AI Programming Resources',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TraeDocs - The AI Programming Knowledge Hub',
    description: 'TraeDocs: Your trusted hub for AI programming resources by Trae',
    creator: '@TraeDocs',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://traedocs.com',
  },
  verification: {
    google: 'google-site-verification-code', // 需要替换为实际的验证码
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
