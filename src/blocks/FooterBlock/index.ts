import { Block } from 'payload/types';

const FooterBlock: Block = {
  slug: 'footer-block',
  labels: {
    singular: 'Footer Block',
    plural: 'Footer Blocks',
  },
  fields: [
    {
      name: 'textContent',
      type: 'richText',
      label: 'Text Content',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          label: 'Platform',
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
};

export default FooterBlock;