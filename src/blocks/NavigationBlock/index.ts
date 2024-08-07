import { Block } from 'payload/types';

const NavigationBlock: Block = {
  slug: 'navigation-block',
  labels: {
    singular: 'Navigation Block',
    plural: 'Navigation Blocks',
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigation Items',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'subNavItems',
          type: 'array',
          label: 'Sub Navigation Items',
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default NavigationBlock;