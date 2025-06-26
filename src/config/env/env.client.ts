import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

// env client
export const envClient = createEnv({
  client: {
    NEXT_PUBLIC_CLIENT_WEB_URL: z.string().min(1),
    NEXT_PUBLIC_CLIENT_API_URL: z.string().min(1),
  },
  emptyStringAsUndefined: true,
  experimental__runtimeEnv: {
    NEXT_PUBLIC_CLIENT_WEB_URL: process.env.NEXT_PUBLIC_CLIENT_WEB_URL,
    NEXT_PUBLIC_CLIENT_API_URL: process.env.NEXT_PUBLIC_CLIENT_API_URL,
  },
})
