import { stitchClient } from 'stitch/client';
import { StitchAuthService } from './StitchAuthService';

const authService = new StitchAuthService(stitchClient);

export { authService };
