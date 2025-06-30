import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import { withPayload } from '@payloadcms/next/withPayload'

import { envClient } from '@/config/env'

// i18n
const withNextIntl = createNextIntlPlugin({
  requestConfig: './src/pkg/libraries/locale/request.ts',
  experimental: {
    createMessagesDeclaration: './translations/en.json',
  },
})

// next config
const nextConfig: NextConfig = {
  output: 'standalone',

  poweredByHeader: false,

  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  serverExternalPackages: ['pino', 'pino-pretty'],

  experimental: {
    reactCompiler: true,
    optimizeServerReact: true,
    optimizePackageImports: [
      'zod',
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

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: envClient.NEXT_PUBLIC_CLIENT_WEB_URL },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS' },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
}

export default withPayload(withNextIntl(nextConfig), { devBundleServerPackages: false })
