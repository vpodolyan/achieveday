import * as React from 'react';
import { connect } from 'react-redux';
import { setUser } from 'actions';
import stitchClient from 'stitch/client';
import HeaderBar from 'components/HeaderBar';
import MainContainer from 'components/MainContainer';
import DatePickerContainer from 'containers/DatePickerContainer';
import DayAchievements from 'containers/DayAchievements';
import NewAchievement from 'containers/NewAchievement';
import StichAuthService from 'services/auth/StitchAuthService';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';

interface IProps {
    setUser: typeof setUser;

}

const authService = new StichAuthService(stitchClient);

const authContexValue = {
  authService
};

export const AuthContext = React.createContext(authContexValue);

class AchievementsPage extends React.PureComponent<IProps> {
  render () {
    return (
      <AuthContext.Provider value={authContexValue}>
        <HeaderBar />
        <MainContainer>
          <DatePickerContainer />
          <DayAchievements />
          <NewAchievement />
          <QuoteOfDayController />
        </MainContainer>
      </AuthContext.Provider>
    );
  }
}

export default connect(null, { setUser })(AchievementsPage);
