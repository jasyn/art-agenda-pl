import { CollectionConfig } from 'payload/types';

const SingingSkills: CollectionConfig = {
  slug: 'spiewy',
  labels: {
    singular: 'Śpiew',
    plural: 'Śpiewy',
  },
  fields: [
    {
      name: 'spiew',
      label: 'Śpiew',
      type: 'text',
      required: true,
    },
  ]
};

export default SingingSkills;