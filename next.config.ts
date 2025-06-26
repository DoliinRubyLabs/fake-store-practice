import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import { withPayload } from '@payloadcms/next/withPayload'

// i18n
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/pkg/library/locale/request.ts',
  experimental: {
    createMessagesDeclaration: './translations/en.json',
  },
})

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
    reactCompiler: true,
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
        source: `/:locale/admin/:path*`,
        destination: '/admin/:path*',
        permanent: true,
      },
      {
        source: '/404',
        destination: '/not-found',
        permanent: true,
      },
    ]
  },
}

export default withPayload(withNextIntl(nextConfig), { devBundleServerPackages: false })
