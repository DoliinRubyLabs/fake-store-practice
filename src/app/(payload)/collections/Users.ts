import type { CollectionConfig } from 'payload'

import { authenticated, superAdmin } from '../service/access.service'

// users
export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: superAdmin,
    read: authenticated,
    update: superAdmin,
    delete: superAdmin,
  },
  admin: {
    defaultColumns: ['email', 'name', 'role'],
    useAsTitle: 'name',
  },
  auth: true,
  labels: {
    singular: 'Admin',
    plural: 'Admins',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'root' },
      ],
      defaultValue: 'admin',
    },
  ],
  timestamps: true,
}
