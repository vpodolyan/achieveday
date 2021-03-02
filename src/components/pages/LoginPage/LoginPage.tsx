import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from '@reach/router';
import LoginPageContainer from './LoginPageContainer';
import LoginForm from './LoginForm';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import Title from './Title';
import SubTitle from './Subtitle';
import DevelopmentBadge from './DevelopmentBadge';

type IProps = RouteComponentProps;

const LoginPage: FC<IProps> = () => {
  const { t } = useTranslation();

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

export default LoginPage;
