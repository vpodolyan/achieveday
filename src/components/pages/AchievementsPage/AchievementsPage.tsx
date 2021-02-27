import { createContext, PureComponent } from 'react';
import { connect } from 'react-redux';
import { setUser } from 'actions';
import stitchClient from 'stitch/client';
import HeaderBar from 'components/HeaderBar';
import MainContainer from 'components/MainContainer';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import { AchievementsForSelectedDate } from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import StichAuthService from 'services/auth/StitchAuthService';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';

interface IProps {
  setUser: typeof setUser;
}

const authService = new StichAuthService(stitchClient);

const authContexValue = {
  authService
};

export const AuthContext = createContext(authContexValue);

class AchievementsPage extends PureComponent<IProps> {
  render () {
    return (
      <AuthContext.Provider value={authContexValue}>
        <HeaderBar />
        <MainContainer>
          <DatePickerContainer />
          <AchievementsForSelectedDate />
          <NewAchievement />
          <QuoteOfDayController />
        </MainContainer>
      </AuthContext.Provider>
    );
  }
}

export default connect(null, { setUser })(AchievementsPage);
