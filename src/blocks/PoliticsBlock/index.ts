import type { Block } from 'payload/types';
import richText from '../../fields/richText';

export const PoliticsBlock: Block = {
  slug: 'politics-block',
  labels: {
    singular: 'Politic',
    plural: 'Politics',
  },
  fields: [
    {
      type: 'relationship',
      name: 'selectedCategories',
      label: 'Select Categories',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      type: 'relationship',
      name: 'blockPosts',
      label: 'Select Politic Posts',
      relationTo: 'single-post',
      hasMany: true,
      filterOptions: ({ relationTo, siblingData }) => {
        if (relationTo === 'single-post') {
          if (siblingData?.selectedCategories?.length > 0) {
            console.log("selectedCategories --->", siblingData);
            const abc = {
              'categories': {
                $elemMatch: {
                  id: {
                    $in: siblingData.selectedCategories.map(category => category),
                  },
                },
              },
            };
            return abc;
          }
        }
        return {};
      },
    },
  ],
};
