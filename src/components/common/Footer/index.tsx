import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">关于我们</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">TraeDocs致力于为开发者提供优质的AI编程资源导航，助力开发者更好地利用AI工具提升开发效率。</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">快速链接</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/docs/getting-started" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  入门指南
                </Link>
              </li>
              <li>
                <Link href="/docs/tools" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  工具教程
                </Link>
              </li>
              <li>
                <Link href="/docs/cases" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  实践案例
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">资源分类</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/docs/tools/chatgpt" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  ChatGPT
                </Link>
              </li>
              <li>
                <Link href="/docs/tools/github-copilot" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  GitHub Copilot
                </Link>
              </li>
              <li>
                <Link href="/docs/tools/claude" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Claude
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">联系我们</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="https://github.com/traedocs" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} TraeDocs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
