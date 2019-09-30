import React from 'react'
import { connect } from 'react-redux';

import StichAuthService from '../services/auth/StitchAuthService';
import stitchClient from '../stitch/client';

import { setUser } from 'actions';

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePickerContainer from '../containers/DatePickerContainer'
import HeaderBar from '../components/HeaderBar';
import MainContainer from './MainContainer';

const authService = new StichAuthService(stitchClient);

const authContexValue = {
    authService,
};

export const AuthContext = React.createContext(authContexValue);



class App extends React.PureComponent {
    componentWillMount() {
        if (stitchClient.auth.isLoggedIn) {
            this.props.setUser(stitchClient.auth.user.profile.data);
        }
    }

    componentDidMount() {
        if (stitchClient.auth.hasRedirectResult()) {
            stitchClient.auth.handleRedirectResult().then(user => {
                this.props.setUser(user.profile.data);
            });
        }
    }

    render() {
        return (
            <AuthContext.Provider value={authContexValue}>
                <HeaderBar />
                <MainContainer>
                    <DatePickerContainer />
                    <DayAchievements />
                    <NewAchievement />
                </MainContainer>
            </AuthContext.Provider>
        )
    }
}

export default connect(null, { setUser })(App);
