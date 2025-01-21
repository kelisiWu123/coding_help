/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // 静态导出时需要禁用图片优化
  },
}

module.exports = nextConfig
