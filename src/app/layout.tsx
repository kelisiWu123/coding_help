import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TraeDocs - AI编程资源导航',
  description: '精选优质AI编程相关文章，提供便捷的资源导航',
  keywords: 'AI编程, 人工智能, 编程教程, 开发工具, ChatGPT, GitHub Copilot',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
