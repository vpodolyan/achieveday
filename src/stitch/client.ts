import { Stitch } from 'mongodb-stitch-browser-sdk';

if (!process.env.MONGO_STITCH_APP_ID) {
  throw new Error('MONGO_STITCH_APP_ID is not defined!');
}

const appId = process.env.MONGO_STITCH_APP_ID || 'demo';

const stitchClient = Stitch.initializeDefaultAppClient(appId);

export { stitchClient };
