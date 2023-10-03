import { CollectionConfig } from 'payload/types';

const Languages: CollectionConfig = {
  slug: 'jezyki',
  labels: {
    singular: 'Język',
    plural: 'Języki',
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