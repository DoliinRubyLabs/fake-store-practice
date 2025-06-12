import { MetadataRoute } from 'next'

// robots
const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
  }
}

export default robots
