/** Supported OAuth providers */
export enum OAuthProviders {
  Google,
  Facebook
}

/** Authentication service interface. */
export interface IAuthService {
  /**
   * log in with one of the oauth providers.
   *
   * @param {OAuthProviders} provider - OAuth provider type.
   */
  logInOauth(provider: OAuthProviders);

  /**
   * Log out.
   */
  logOut();

  /**
   * Retrieves true is the user is authenticated and logged in.
   */
  isAuthenticated(): boolean;

  /**
   * Retrieves current user id or undefined if the user is not authorized.
   */
  getUserId(): string | undefined;
}
