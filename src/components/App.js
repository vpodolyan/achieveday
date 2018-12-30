import React from 'react'
import { connect } from 'react-redux';
import { Stitch } from 'mongodb-stitch-browser-sdk';

import StichAuthService from '../services/auth/StitchAuthService';

import { setUser } from 'actions';

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePickerContainer from '../containers/DatePickerContainer'
import HeaderBar from '../components/HeaderBar';

const appId = 'achievedayapp-zjent';
const client = Stitch.initializeDefaultAppClient(appId);

const authService = new StichAuthService(client);

const authContexValue = {
    authService,
};

export const AuthContext = React.createContext(authContexValue);



class App extends React.PureComponent {
    componentDidMount() {
        if (client.auth.hasRedirectResult()) {
            client.auth.handleRedirectResult().then(user => {
                this.props.setUser(user.profile.data);
            });
        }
    }

    render() {
        return (
            <AuthContext.Provider value={authContexValue}>
                <HeaderBar />
                <DatePickerContainer />
                <DayAchievements />
                <NewAchievement />
            </AuthContext.Provider>
        )
    }
}

export default connect(null, { setUser })(App);
