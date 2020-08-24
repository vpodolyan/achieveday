/** Supported OAuth providers */
export enum OAuthProviders {
    Google,
    Facebook,
}

/** Authentication service interface. */
export interface IAuthService {
    /**
     * log in with one of the oauth providers.
     *
     * @param {OAuthProviders} provider - OAuth provider type.
     */
    logInOauth(provider: OAuthProviders)

    /**
     * Log out.
     */
    logOut()

    /**
     * Retrives true is the user is authenticated and logged in.
     */
    isAuthenticated(): boolean
}
