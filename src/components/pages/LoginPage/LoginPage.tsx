import { RouteComponentProps, useNavigate } from '@reach/router';
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { stitchClient } from 'stitch/client';
import { paths } from 'utils/paths';
import { DevelopmentBadge } from './DevelopmentBadge';
import { LoginForm } from './LoginForm';
import { LoginPageContainer } from './LoginPageContainer';
import { SignInWithGoogleButton } from './SignInWithGoogleButton';
import { SubTitle } from './Subtitle';
import { Title } from './Title';

type IProps = RouteComponentProps;

export const LoginPage: FC<IProps> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (stitchClient.auth.isLoggedIn) {
      navigate(paths.achievements);
    }
  }, [stitchClient.auth.isLoggedIn]);

  return (
    <LoginPageContainer>
      <DevelopmentBadge>{t('login_page.under_development')}</DevelopmentBadge>
      <div className="container">
        <Title>AchieveDay</Title>
        <SubTitle>
          <div className="d-none d-lg-block">
            {`${t('login_page.subtitle.first')} ${t(
              'login_page.subtitle.second'
            )} ${t('login_page.subtitle.third')} 🚀`}
          </div>
          <div className="d-lg-none">
            <div>{t('login_page.subtitle.first')}</div>
            <div>{t('login_page.subtitle.second')}</div>
            <div>{t('login_page.subtitle.third')} 🚀</div>
          </div>
        </SubTitle>
        <LoginForm>
          <SignInWithGoogleButton />
        </LoginForm>
      </div>
    </LoginPageContainer>
  );
};
