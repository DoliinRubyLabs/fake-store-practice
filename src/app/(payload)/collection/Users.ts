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
    defaultColumns: ['email', 'name', 'role', 'createdAt'],
    useAsTitle: 'name',
    group: 'System',
    hideAPIURL: true,
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
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Super Admin', value: 'root' },
      ],
      defaultValue: 'admin',
      admin: {
        position: 'sidebar',
      },
      dbName: 'role',
      custom: {
        postgres: {
          type: 'text',
        },
      },
    },
  ],
}
