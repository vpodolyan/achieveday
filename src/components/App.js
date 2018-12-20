import React from 'react'
import { Stitch } from 'mongodb-stitch-browser-sdk';

import StichAuthService from '../services/auth/StitchAuthService';
import { OAuthProviders } from '../services/auth/AuthService';

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePickerContainer from '../containers/DatePickerContainer'

const appId = 'achievedayapp-zjent';
const client = Stitch.initializeDefaultAppClient(appId);

const authService = new StichAuthService(client);

let userContexValue = {
    authService,
};

export const UserContext = React.createContext(userContexValue);

if (client.auth.hasRedirectResult()) {
    client.auth.handleRedirectResult().then(user => {
        console.log('USER ', user.profile.data);
        userContexValue.user = user.profile.data
    });
}

const App = () => (
    <UserContext.Provider value={userContexValue}>
        <DatePickerContainer />
        <DayAchievements />
        <NewAchievement />
    </UserContext.Provider>
)

export default App;
