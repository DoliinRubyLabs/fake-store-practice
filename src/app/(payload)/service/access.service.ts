import type { Access } from 'payload'

// anyone
export const anyone: Access = () => true

// authenticated
export const authenticated: Access = ({ req: { user } }) => Boolean(user)

// super admin
export const superAdmin: Access = ({ req: { user } }) => Boolean(user)

// authenticated or published
export const authenticatedOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
