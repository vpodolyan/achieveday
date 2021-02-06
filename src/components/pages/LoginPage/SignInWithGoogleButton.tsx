import { FC, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from 'components/App';
import { IAuthService, OAuthProviders } from 'services/auth/IAuthService';
import { useTranslation } from 'react-i18next';

import logo from 'images/g-logo.png';

interface ILogoWrapperProps {
  clicked: boolean;
}

const Button = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 220px;
  height: 48px;
  border-radius: 24px;
  background-color: #4285f4;
  color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  transition: background-color 0.218s, border-color 0.218s, box-shadow 0.218s;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px rgba(66, 133, 244, 0.3);
  }

  &:active {
    background-color: #3367d6;
    transition: background-color 0.2s;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 14px;
  position: absolute;
  height: 100%;
  width: ${({ clicked }: ILogoWrapperProps) => clicked ? '100%' : '48px'};
  border-radius: ${({ clicked }: ILogoWrapperProps) => clicked ? '24px' : '50%'};
  background-color: #fff;
  transition: width 0.3s, border-radius 0.1s;
`;

const Logo = styled.img`
  width: 18px;
  height: 18px;
`;

const TextBase = styled.div`
  font-family: Roboto, Ubuntu, arial, sans-serif;
  font-weight: 500;
  letter-spacing: 0.21px;
  line-height: 48px;
`;

const Text = styled(TextBase)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  margin-left: 32px;
`;

const SigningText = styled(TextBase)`
  color: #888888;
  width: 100%;
  text-align: center;
  margin-left: 30px;
  visibility: ${({ clicked }: ILogoWrapperProps) => clicked ? 'visible' : 'hidden'};
  opacity: ${({ clicked }: ILogoWrapperProps) => clicked ? '1' : '0'};
  transition: opacity 0.6s;
`;

const SignInWithGoogleButton: FC = () => {
  const { t } = useTranslation();
  const [clicked, setClicked] = useState(false);

  return (
    <AuthContext.Consumer>
      {({ authService }: { authService: IAuthService }) => (
        <Button
          role="button"
          onClick={() => {
            authService.logInOauth(OAuthProviders.Google);
            setClicked(true);
          }}
        >
          <LogoWrapper clicked={clicked}>
            <SigningText clicked={clicked}>{`${t('login_page.signing_in')}...`}</SigningText>
            <Logo src={logo} alt='Sign in with Google' />
          </LogoWrapper>
          <Text>{t('login_page.sign_in_with_google')}</Text>
        </Button>
      )}
    </AuthContext.Consumer>
  );
};

export default SignInWithGoogleButton;
