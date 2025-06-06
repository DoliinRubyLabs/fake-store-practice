import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'

import config from '@/app/(payload)/payload.config'

// service
export const getHomeService = async () => {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { user } = await payload.auth({ headers })

  // return
  return { user, payloadConfig }
}
