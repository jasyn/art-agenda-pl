import { CollectionConfig } from 'payload/types';

const DancingSkills: CollectionConfig = {
  slug: 'tancy',
  labels: {
    singular: 'Taniec',
    plural: 'Tańcy',
  },
  admin: {
    useAsTitle: 'taniec',
  },
  fields: [
    {
      name: 'taniec',
      label: 'Taniec',
      type: 'text',
      required: true,
    },
  ]
};

export default DancingSkills;