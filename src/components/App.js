import React from 'react'
import { connect } from 'react-redux';
import { Router } from '@reach/router';

import StichAuthService from '../services/auth/StitchAuthService';
import stitchClient from '../stitch/client';

import { setUser } from 'actions';

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePickerContainer from '../containers/DatePickerContainer'
import HeaderBar from '../components/HeaderBar';
import MainContainer from './MainContainer';
import AchievementsPage from './pages/AchievementsPage/AchievementsPage';

const authService = new StichAuthService(stitchClient);

const authContexValue = {
    authService,
};

export const AuthContext = React.createContext(authContexValue);



class App extends React.PureComponent {
    componentDidMount() {

        if (stitchClient.auth.hasRedirectResult()) {
            stitchClient.auth.handleRedirectResult().then(user => {
                this.props.setUser(user.profile.data);
            });
        }

        if (stitchClient.auth.isLoggedIn) {
            this.props.setUser({ ...stitchClient.auth.user.profile.data, id: stitchClient.auth.user.id });
        }
    }

    render() {
        return (
            <AuthContext.Provider value={authContexValue}>
                <Router>
                    <AchievementsPage path='/' />
                </Router>
            </AuthContext.Provider>
        )
    }
}

export default connect(null, { setUser })(App);
