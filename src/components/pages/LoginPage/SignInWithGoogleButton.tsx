import * as React from 'react';
import { AuthContext } from 'components/App';
import { IAuthService, OAuthProviders } from 'services/auth/IAuthService';
import Icon from 'images/btn_google_signin_light_normal_web.png';

const SignInWithGoogleButton = () => (
    <AuthContext.Consumer>
        {({ authService }: { authService: IAuthService }) => (
            <div role='button' onClick={() => authService.logInOauth(OAuthProviders.Google)}>
                <img src={Icon} />
            </div>
        )}
    </AuthContext.Consumer>
)

export default SignInWithGoogleButton;
