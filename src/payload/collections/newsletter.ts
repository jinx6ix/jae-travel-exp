import type { CollectionConfig } from 'payload/types'

const NewsLetter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
    },
  ],
}

export default NewsLetter
