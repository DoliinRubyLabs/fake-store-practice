import { Field } from 'payload'

// published field
export const publishedField = (): Field => {
  return {
    name: 'publishedAt',
    type: 'date',
    admin: {
      position: 'sidebar',
    },
  }
}
