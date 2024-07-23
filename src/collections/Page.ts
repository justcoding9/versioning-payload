import { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  versions: {
    drafts: true,
  },
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
    readVersions: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: {
        en: 'title',
        fr: 'titre',
      },
      localized: true,
    },
    {
      name: 'description',
      type: 'text',
      label: {
        en: 'description',
        fr: 'description',
      },
      localized: true,
    },
  ],
}
