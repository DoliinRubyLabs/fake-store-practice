import type { NextConfig } from 'next'

import { withPayload } from '@payloadcms/next/withPayload'

// config
const nextConfig: NextConfig = {
  output: 'standalone',

  poweredByHeader: false,

  images: {
    deviceSizes: [768, 1024, 1920],
    imageSizes: [32, 128, 384],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    minimumCacheTTL: 3600,
    formats: ['image/webp', 'image/avif'],
  },

  experimental: {
    optimizeServerReact: true,
    optimizePackageImports: [
      'luxon',
      'react-hook-form',
      'usehooks-ts',
      '@heroui/react',
      '@heroui/accordion',
      '@heroui/autocomplete',
      '@heroui/avatar',
      '@heroui/badge',
      '@heroui/button',
      '@heroui/card',
      '@heroui/chip',
      '@heroui/divider',
      '@heroui/dropdown',
      '@heroui/input',
      '@heroui/link',
      '@heroui/modal',
      '@heroui/navbar',
      '@heroui/radio',
      '@heroui/scroll-shadow',
      '@heroui/select',
      '@heroui/skeleton',
      '@heroui/spinner',
      '@heroui/system',
      '@heroui/table',
      '@heroui/tabs',
      '@heroui/theme',
      '@heroui/tooltip',
      'zustand',
      'framer-motion',
    ],
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

  redirects: async () => {
    return [
      {
        source: '/404',
        destination: '/not-found',
        permanent: true,
      },
      // TODO: add redirects when we have a locale
      //     {
      //       source: `/:locale/admin/:path*`,
      //       destination: '/admin/:path*',
      //       permanent: true,
      //     },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
