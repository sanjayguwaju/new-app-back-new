import { Block } from 'payload/types';

const HeaderBlock: Block = {
  slug: 'header-block',
  labels: {
    singular: 'Header Block',
    plural: 'Header Blocks',
  },
  fields: [
    {
      name: 'logo',
      type: 'upload',
      label: 'Logo',
      relationTo: 'media', // Assuming you have a media collection
      required: true,
    },
    {
      name: 'adImage',
      type: 'upload',
      label: 'Advertisement Image',
      relationTo: 'media', // Assuming you have a media collection
      required: true,
    },
    {
      name: 'adUrl',
      type: 'text',
      label: 'Advertisement URL',
      required: true,
    },
  ],
};

export default HeaderBlock;