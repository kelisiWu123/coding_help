const resources = [
  {
    titleEn: 'AI Programming Blue Book',
    title: 'AI 编程蓝皮书',
    url: 'https://superhuang.feishu.cn',
  },
  {
    titleEn: '8 ChatGPT Tips: From Beginner to Master',
    title: '8 个 ChatGPT 使用技巧，带你从入门到精通',
    url: 'https://mp.weixin.qq.com/s/7EbiQpDoJep3apArn5lyrw',
  },
  {
    titleEn: 'Understanding Code Indexing Logic in Cursor and WindSurf',
    title: '一文读懂 Cursor 与 WindSurf 的代码索引逻辑',
    url: 'https://mp.weixin.qq.com/s/Fl-K-tdRuhlT9I-bcLbtdg',
  },
  {
    titleEn: 'Essential Best Practices for AI Coding Platforms',
    title: 'AI 编码平台上的必备最佳实践',
    url: 'https://www.reddit.com/r/aipromptprogramming/comments/1hzpvsl/essential_best_practices_mustdo_on_ai_coding/',
  },
  {
    titleEn: 'Cursor Directory',
    title: 'Cursor directory',
    url: 'https://cursor.directory/',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              <div className="text-gray-900 dark:text-white">AI Programming Resources</div>
              <div className="mt-2 text-2xl sm:text-3xl text-gray-600 dark:text-gray-400">AI编程资源导航</div>
            </h1>
            <div className="mt-6 space-y-2">
              <p className="text-lg leading-8 text-gray-900 dark:text-white">Curated AI programming articles to help developers better leverage AI tools for improved productivity</p>
              <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">精选优质AI编程相关文章，助力开发者更好地利用AI工具提升开发效率</p>
            </div>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900 hover:shadow-md transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="space-y-1.5">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{resource.titleEn}</h2>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{resource.title}</div>
                </div>
                <div className="mt-2 text-xs text-gray-400 dark:text-gray-500 truncate">{resource.url}</div>
              </a>
            ))}
          </div>

          <footer className="mt-20 text-center">
            <div className="mx-auto max-w-2xl text-sm">
              <p className="text-gray-600 dark:text-gray-400">Disclaimer: All articles are linked to their original sources. The content belongs to respective authors and platforms.</p>
              <p className="mt-1 text-gray-500 dark:text-gray-500">免责声明：所有文章均链接到原始来源，内容归属原作者和平台所有</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}
