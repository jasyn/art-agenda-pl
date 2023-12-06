import { CollectionConfig } from 'payload/types';

const Languages: CollectionConfig = {
  slug: 'jezyki',
  labels: {
    singular: 'Język',
    plural: 'Języki',
  },
  admin: {
    useAsTitle: 'jezyk',
  },
  fields: [
    {
      name: 'jezyk',
      label: 'Język',
      type: 'text',
      required: true,
    },
  ]
};

export default Languages;