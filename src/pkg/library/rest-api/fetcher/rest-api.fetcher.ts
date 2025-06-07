import ky, { type KyInstance } from 'ky'

// fetcher
export const restApiFetcher: KyInstance = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_CLIENT_API_URL}`,
  credentials: 'include',
  throwHttpErrors: false,
})

export const cmsApiFetcher: KyInstance = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_CMS_API_URL}`,
  credentials: 'include',
  throwHttpErrors: false,
})
