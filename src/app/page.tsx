const resources = [
  {
    titleEn: 'AI Programming Blue Book',
    title: 'AI 编程蓝皮书',
    url: 'https://superhuang.feishu.cn',
    description: 'Comprehensive guide for AI programming concepts and practices',
  },
  {
    titleEn: '8 ChatGPT Tips: From Beginner to Master',
    title: '8 个 ChatGPT 使用技巧，带你从入门到精通',
    url: 'https://mp.weixin.qq.com/s/7EbiQpDoJep3apArn5lyrw',
    description: 'Essential tips and tricks for mastering ChatGPT in programming',
  },
  {
    titleEn: 'Understanding Code Indexing Logic in Cursor and WindSurf',
    title: '一文读懂 Cursor 与 WindSurf 的代码索引逻辑',
    url: 'https://mp.weixin.qq.com/s/Fl-K-tdRuhlT9I-bcLbtdg',
    description: 'Deep dive into code indexing mechanisms of modern AI coding tools',
  },
  {
    titleEn: 'Essential Best Practices for AI Coding Platforms',
    title: 'AI 编码平台上的必备最佳实践',
    url: 'https://www.reddit.com/r/aipromptprogramming/comments/1hzpvsl/essential_best_practices_mustdo_on_ai_coding/',
    description: 'Best practices and guidelines for AI-assisted programming',
  },
  {
    titleEn: 'Cursor Directory',
    title: 'Cursor directory',
    url: 'https://cursor.directory/',
    description: 'Comprehensive resource directory for Cursor AI editor',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main className="py-8 sm:py-12" role="main" aria-label="TraeDocs AI Programming Resources">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="text-center" role="banner">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-gray-900 dark:text-white inline-block">TraeDocs</span>
              <span className="mt-2 block text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400">AI Programming Knowledge Hub</span>
            </h1>
            <div className="mt-4 sm:mt-6 space-y-2">
              <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-900 dark:text-white px-4">Your trusted hub for AI programming resources, curated by Trae</p>
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400 px-4">精选优质AI编程相关文章，助力开发者更好地利用AI工具提升开发效率</p>
            </div>
          </header>

          <nav className="mt-10 sm:mt-16" role="navigation" aria-label="Resource navigation">
            <ul className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource, index) => (
                <li key={index} className="px-2 sm:px-0">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-lg border border-gray-200 bg-white p-4 sm:p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
                    aria-label={`${resource.titleEn} - ${resource.title}`}
                  >
                    <article>
                      <div className="space-y-2 sm:space-y-1.5">
                        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                          {resource.titleEn}
                        </h2>
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{resource.title}</div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 hidden sm:block">{resource.description}</p>
                      </div>
                      <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 truncate">{resource.url}</div>
                    </article>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <footer className="mt-12 sm:mt-20 text-center" role="contentinfo">
            <div className="mx-auto max-w-2xl text-sm px-4">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Disclaimer: All articles are linked to their original sources. Content belongs to respective authors and platforms.
              </p>
              <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-500">免责声明：所有文章均链接到原始来源，内容归属原作者和平台所有</p>
              <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">© 2024 TraeDocs. Curated with ❤️ by Trae</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
