import * as React from 'react';
import LoginPageContainer from './LoginPageContainer';
import LoginForm from './LoginForm';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import Title from './Title';
import SubTitle from './Subtitle';
import DevelopmentBadge from './DevelopmentBadge';

const LoginPage: React.FC = () => (
    <LoginPageContainer>
        <DevelopmentBadge>Under Development</ DevelopmentBadge>
        <Title>
            AchieveDay
        </Title>
        <SubTitle>
            Write daily achievements. Get inspirational quotes. Stay motivated 🚀
        </SubTitle>
        <LoginForm>
            <SignInWithGoogleButton />
        </LoginForm>
    </LoginPageContainer>
);

export default LoginPage;
