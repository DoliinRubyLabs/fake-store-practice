import { IncomingCollectionVersions } from 'node_modules/payload/dist/versions/types'

// versions field
export const versionsField = (): boolean | IncomingCollectionVersions => {
  return {
    drafts: {
      autosave: {
        interval: 5000,
      },
    },
    maxPerDoc: 15,
  }
}
