import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/kyzmin-logistic',
  assetPrefix: '/kyzmin-logistic/'
}

export default nextConfig
