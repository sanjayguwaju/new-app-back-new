import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const HeroBlock: Block = {
  slug: 'hero-block',
  labels: {
    singular: 'Hero',
    plural: 'Heroes',
  },
  fields: [
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Hero Posts',
      relationTo: 'single-post',
      hasMany: true,
      filterOptions: {
        'categories': {
          $elemMatch: {
            title: {
              equals: 'Politics',
            },
          },
        },
        $sort: {
          createdAt: -1, // Sort by creation date in descending order
        },
        $limit: 2, // Limit the results to the latest two posts
      },
    },
  ],
};