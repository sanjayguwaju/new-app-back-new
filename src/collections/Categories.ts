import { generateSlug } from '../utilities/generateSlug'
import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data.title) {
          data.slug = generateSlug(data.title)
        }
        return data
      },
    ],
  },
}

export default Categories