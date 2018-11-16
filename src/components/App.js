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

if(client.auth.hasRedirectResult()){
  client.auth.handleRedirectResult().then(user => {
     console.log('USER ', user.profile.data);
  });
}

const App = () => (
  <div>
    {
      !authService.isAuthenticated() && (
        <div>
          NOT LOGGED IN
          <button onClick={() => authService.logInOauth(OAuthProviders.Google)}>
            LogIn
          </button>
        </div>
      )
    }
    {
      authService.isAuthenticated() && (
        <div>
          LOGGED IN
          <button onClick={() => authService.logOut()}>
            LogOut
          </button>
        </div>
      )
    }
    <DatePickerContainer />
    <DayAchievements />
    <NewAchievement />
  </div>
)

export default App
