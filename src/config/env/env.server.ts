import { z } from 'zod'

import { createEnv } from '@t3-oss/env-nextjs'

// env server
export const envServer = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().min(1, { message: 'PAYLOAD_SECRET is required' }),
    DATABASE_URI: z.string().min(1, { message: 'DATABASE_URI is required' }),
    S3_BUCKET: z.string().min(1, { message: 'S3_BUCKET is required' }),
    S3_ACCESS_KEY_ID: z.string().min(1, { message: 'S3_ACCESS_KEY_ID is required' }),
    S3_SECRET_ACCESS_KEY: z.string().min(1, { message: 'S3_SECRET_ACCESS_KEY is required' }),
    S3_REGION: z.string().min(1, { message: 'S3_REGION is required' }),
    S3_ENDPOINT: z.string().min(1, { message: 'S3_ENDPOINT is required' }),
  },
  emptyStringAsUndefined: true,
  runtimeEnv: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URI: process.env.DATABASE_URI,
    S3_BUCKET: process.env.S3_BUCKET,
    S3_ACCESS_KEY_ID: process.env.S3_ACCESS_KEY_ID,
    S3_SECRET_ACCESS_KEY: process.env.S3_SECRET_ACCESS_KEY,
    S3_REGION: process.env.S3_REGION,
    S3_ENDPOINT: process.env.S3_ENDPOINT,
  },
})
