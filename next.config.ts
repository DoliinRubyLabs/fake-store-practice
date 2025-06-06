import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV !== 'test' && process.env.NODE_ENV !== 'development' ? 'standalone' : undefined,

  images: {
    deviceSizes: [460, 1024, 1920, 3840],
    imageSizes: [16, 64, 128, 384],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  experimental: {
    reactCompiler: true,

    optimisticClientCache: true,

    webpackMemoryOptimizations: true,

    clientRouterFilter: true,
    clientRouterFilterRedirects: true,
    optimizeServerReact: true,

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
