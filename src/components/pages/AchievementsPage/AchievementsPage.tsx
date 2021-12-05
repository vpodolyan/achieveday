import { AchievementsForSelectedDate } from 'components/AchievementsForSelectedDate/AchievementsForSelectedDate';
import { DatePickerContainer } from 'components/DatePicker/DatePickerContainer';
import { HeaderBar } from 'components/HeaderBar/HeaderBar';
import { MainContainer } from 'components/MainContainer/MainContainer';
import { NewAchievement } from 'components/NewAchievement/NewAchievement';
import { QuoteOfDayController } from 'components/QuoteOfDayController/QuoteOfDayController';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const AchievementsPage: FC = () => {
  const { t } = useTranslation('achievements');

  return (
    <>
      <HeaderBar />
      <MainContainer title={t('title')}>
        <DatePickerContainer />
        <AchievementsForSelectedDate />
        <NewAchievement />
        <QuoteOfDayController />
      </MainContainer>
    </>
  );
};
