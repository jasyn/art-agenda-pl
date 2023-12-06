import { buildConfig } from 'payload/config';
import path from 'path';
import { Users } from './collections/Users';
import { Pages } from './collections/Pages';
import { MainMenu } from './globals/MainMenu';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { Media } from './collections/Media';
import seo from '@payloadcms/plugin-seo';
import Actors from './collections/Actors';
import Languages from './collections/Languages';
import SingingSkills from './collections/SingingSkills';
import DancingSkills from './collections/DancingSkills';
import Instruments from './collections/Instruments';

const adapter = s3Adapter({
  config: {
    endpoint: process.env.NEXT_PUBLIC_S3_ENDPOINT,
    region: process.env.S3_REGION,
    forcePathStyle: true,
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
    }
  },
  bucket: process.env.NEXT_PUBLIC_S3_BUCKET as string,
})

export default buildConfig({
  collections: [
    Actors,
    Languages,
    SingingSkills,
    DancingSkills,
    Instruments,
    Pages,
    Users,
    Media,
    {
      slug: 'examples',
      fields: [
        {
          name: 'title',
          type: 'text',
        }
      ]
    }
  ],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI as string
  }),
  localization: {
      locales: [
        'pl',
      ],
      defaultLocale: 'pl',
      fallback: true
  },
  globals: [
    MainMenu,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
      collections: ['pages']
    }),
    cloudStorage({
      collections: {
        'media': {
          adapter,
          disablePayloadAccessControl: true,
        }
      },
    }),
  ],
});
