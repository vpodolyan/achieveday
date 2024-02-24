import { QuoteOfDay } from 'components/QuoteOfDay';
import isToday from 'date-fns/isToday';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAchievements } from 'services/achievements/hooks/useAchievements';
import { useQuoteOfDay } from 'services/quotes/hooks/useQuoteOfDay';
import { IAppState } from 'types/state/IAppState';

export const QuoteOfDayController: FC = () => {
  const { isLoading: isAchievementsLoading, data } = useAchievements();

  const date = useSelector<IAppState, Date>(
    (state) => state.datePicker.value,
    (prevDate, nextDate) => prevDate.getTime() === nextDate.getTime()
  );

  const showQuoteOfDay =
    !isAchievementsLoading && isToday(date) && !!data?.length;

  const { isLoading: isQuoteLoading, data: quote } =
    useQuoteOfDay(showQuoteOfDay);

  return (
    <QuoteOfDay
      show={showQuoteOfDay}
      quote={quote}
      isLoading={isQuoteLoading}
    />
  );
};
