import { GoogleRedirectCredential, FacebookRedirectCredential, StitchAppClient } from 'mongodb-stitch-browser-sdk';

import { AuthService, OAuthProviders } from './AuthService'; 

export default class StitchAuthService implements AuthService {
    client: StitchAppClient;

    /**
     *@param client - Mongo Stitch client
     */
    constructor(client: StitchAppClient) {
        this.client = client;
    }

    getRedirectCridential(provider: OAuthProviders) {
        switch (provider) {
            case OAuthProviders.Google:
                return new GoogleRedirectCredential();
            case OAuthProviders.Facebook:
                return new FacebookRedirectCredential();
        }
    }

    logInOauth(provider: OAuthProviders) {
        return this.client.auth.loginWithRedirect(this.getRedirectCridential(provider));
    }

    logOut() {
        return this.client.auth.logout();
    }

    isAuthenticated() {
        return this.client.auth.isLoggedIn;
    }
}