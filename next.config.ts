import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

const isProd = process.env.NODE_ENV === 'production'

// config
const nextConfig: NextConfig = {
  output: 'standalone',

  generateBuildId: async () => {
    if (process.env.BUILD_ID) {
      return process.env.BUILD_ID
    } else {
      return `${new Date().getTime()}`
    }
  },

  images: {
    deviceSizes: [768, 1024, 1920],
    imageSizes: [32, 128, 384],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    minimumCacheTTL: 3600,
    formats: ['image/webp', 'image/avif'],
  },

  experimental: {
    optimizePackageImports: ['@heroui/react', 'framer-motion', 'luxon', 'react-hook-form', 'usehooks-ts', 'zustand'],

    optimizeServerReact: true,
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
    config.optimization = {
      ...config.optimization,
      concatenateModules: isProd,
      splitChunks: {
        chunks: 'all',
        maxSize: 1500000,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    }

    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    config.infrastructureLogging = {
      level: 'error',
    }

    return config
  },

  // TODO: add redirects when we have a locale
  // redirects: async () => {
  //   return [
  //     {
  //       source: `/:locale/admin/:path*`,
  //       destination: '/admin/:path*',
  //       permanent: true,
  //     },
  //   ]
  // },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
