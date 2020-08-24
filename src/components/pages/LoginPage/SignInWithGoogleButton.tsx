import * as React from 'react';
import styled from 'styled-components';
import { AuthContext } from 'components/App';
import { IAuthService, OAuthProviders } from 'services/auth/IAuthService';
import Icon from 'images/btn_google_signin_light_normal_web.png';

const Button = styled.div`
    cursor: pointer;
`;

const SignInWithGoogleButton = () => (
  <AuthContext.Consumer>
    {({ authService }: { authService: IAuthService }) => (
      <Button role="button" onClick={() => authService.logInOauth(OAuthProviders.Google)}>
        <img src={Icon} />
      </Button>
    )}
  </AuthContext.Consumer>
);

export default SignInWithGoogleButton;
