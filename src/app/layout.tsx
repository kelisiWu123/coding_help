import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TraeDocs - AI Programming Resources',
  description: 'Curated collection of high-quality AI programming articles and resources to help developers leverage AI tools effectively | AI编程资源导航，精选优质AI编程相关文章',
  keywords: 'AI Programming, ChatGPT, Cursor, AI Tools, Programming Resources, AI Development, 编程资源, AI开发',
  authors: [{ name: 'TraeDocs Team' }],
  openGraph: {
    title: 'TraeDocs - AI Programming Resources',
    description: 'Curated collection of high-quality AI programming articles and resources',
    url: 'https://traedocs.com',
    siteName: 'TraeDocs',
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TraeDocs - AI Programming Resources',
    description: 'Curated collection of high-quality AI programming articles and resources',
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
