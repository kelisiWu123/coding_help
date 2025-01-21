'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/75 backdrop-blur dark:border-gray-800 dark:bg-gray-900/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold text-gray-900 dark:text-white">TraeDocs</span>
          </Link>
          <nav className="hidden md:flex md:space-x-8">
            <Link href="/docs/getting-started" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              入门指南
            </Link>
            <Link href="/docs/tools" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              工具教程
            </Link>
            <Link href="/docs/cases" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              实践案例
            </Link>
            <Link href="/docs/news" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
              技术前沿
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}
