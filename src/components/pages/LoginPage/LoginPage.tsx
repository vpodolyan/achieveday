import * as React from 'react';
import LoginPageContainer from './LoginPageContainer';
import LoginForm from './LoginForm';
import SignInWithGoogleButton from './SignInWithGoogleButton';
import Title from './Title';
import SubTitle from './Subtitle';
import DevelopmentBadge from './DevelopmentBadge';
import {RouteComponentProps} from '@reach/router';

interface IProps extends RouteComponentProps {
}

const LoginPage: React.FC<IProps> = () => (
    <LoginPageContainer>
        <DevelopmentBadge>Under Development</ DevelopmentBadge>
        <div className='container'>
            <Title>
                AchieveDay
            </Title>
            <SubTitle>
                <div className='d-none d-lg-block'>
                    Write daily achievements. Get inspirational quotes. stay motivated 🚀
                </div>
                <div className='d-lg-none'>
                    <div>Write daily achievements.</div>
                    <div>Get inspirational quotes.</div>
                    <div>Stay motivated 🚀</div>
                </div>
            </SubTitle>
            <LoginForm>
                <SignInWithGoogleButton />
            </LoginForm>
        </div>
    </LoginPageContainer>
);

export default LoginPage;
