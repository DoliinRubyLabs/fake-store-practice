import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development' ? 'standalone' : undefined,

  images: {
    deviceSizes: [768, 1024, 1920],
    imageSizes: [32, 128, 384],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    minimumCacheTTL: 3600,
    formats: ['image/webp', 'image/avif'],
  },

  experimental: {
    reactCompiler: true,

    optimizePackageImports: ['@heroui/react', 'framer-motion', 'luxon', 'react-hook-form', 'usehooks-ts', 'zustand'],
  },

  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
