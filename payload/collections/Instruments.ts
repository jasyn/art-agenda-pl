import { CollectionConfig } from 'payload/types';

const Instruments: CollectionConfig = {
  slug: 'instrumenty',
  labels: {
    singular: 'Instrument',
    plural: 'Instrumenty',
  },
  fields: [
    {
      name: 'instrument',
      label: 'Instrument',
      type: 'text',
      required: true,
    },
  ]
};

export default Instruments;