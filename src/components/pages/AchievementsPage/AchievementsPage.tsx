import {
  AchievementsForSelectedDate
} from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import HeaderBar from 'components/HeaderBar';
import MainContainer from 'components/MainContainer';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';
import { createContext, FC } from 'react';
import StichAuthService from 'services/auth/StitchAuthService';
import stitchClient from 'stitch/client';

const authService = new StichAuthService(stitchClient);

const authContexValue = {
  authService
};

export const AuthContext = createContext(authContexValue);

export const AchievementsPage: FC = () => {
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
};
