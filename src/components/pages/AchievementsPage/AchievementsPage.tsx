import { AchievementsForSelectedDate } from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import MainContainer from 'components/MainContainer';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';
import { FC } from 'react';

export const AchievementsPage: FC = () => {
  return (
    <>
      <HeaderBar />
      <MainContainer>
        <DatePickerContainer />
        <AchievementsForSelectedDate />
        <NewAchievement />
        <QuoteOfDayController />
      </MainContainer>
    </>
  );
};
