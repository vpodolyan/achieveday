import { Stitch } from 'mongodb-stitch-browser-sdk';

const appId = 'achievedayapp-zjent';

const stitchClient = Stitch.initializeDefaultAppClient(appId);

export default stitchClient;
