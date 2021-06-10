import { AchievementsForSelectedDate } from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';
import { FC } from 'react';
import { useTheme } from 'theming/useTheme';

export const AchievementsPage: FC = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        height: '100%',
        backgroundColor: theme.colors.common.background
      }}
    >
      <HeaderBar />
      <MainContainer>
        <DatePickerContainer />
        <AchievementsForSelectedDate />
        <NewAchievement />
        <QuoteOfDayController />
      </MainContainer>
    </div>
  );
};
