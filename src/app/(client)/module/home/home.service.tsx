import { getPayload } from 'payload'

import config from '@/app/(payload)/payload.config'

// service
export const getHomeService = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const { docs } = await payload.find({
    collection: 'pages',
    locale: 'en',
    where: { slug: { equals: 'home-page' } },
    depth: 2,
    limit: 1,
    pagination: false,
  })

  // return
  return { data: docs?.at(0) || null }
}
