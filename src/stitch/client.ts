import { Stitch } from 'mongodb-stitch-browser-sdk';

const appId = 'achievedayapp-zjent';

export const stitchClient = Stitch.initializeDefaultAppClient(appId);
