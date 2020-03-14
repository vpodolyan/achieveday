import * as React from 'react';
import LoginPageContainer from './LoginPageContainer';
import LoginForm from './LoginForm';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import Title from './Title';
import SubTitle from './Subtitle';

const LoginPage: React.FC = () => (
    <LoginPageContainer>
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
