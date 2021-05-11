import { AchievementsForSelectedDate } from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';
import { FC } from 'react';

export const AchievementsPage: FC = () => {
  return (
    <div
      style={{
        height: '100%',
        backgroundSize: '100%',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.1),rgba(0, 0, 0, 0.1)), url(https://picsum.photos/3200/1800)'
        // 'url(https://images.unsplash.com/photo-1592395940145-e2b7020d4148?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80)'
        // 'url(https://images.unsplash.com/photo-1565220845241-8e83f4b4e1d2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3947&q=80)'
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
