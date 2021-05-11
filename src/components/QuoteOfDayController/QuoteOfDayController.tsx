import { getDailyQuoteAction } from 'actions';
import { QuoteOfDay } from 'components/QuoteOfDay';
import isToday from 'date-fns/isToday';
import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAchievement } from 'types/IAchievement';
import { IAppState } from 'types/state/IAppState';

export const QuoteOfDayController: FC = () => {
  const achievements = useSelector<IAppState, IAchievement[]>(
    (state) => state.achievements.data
  );

  const date = useSelector<IAppState, Date>(
    (state) => state.datePicker.value,
    (prevDate, nextDate) => prevDate.getTime() === nextDate.getTime()
  );

  const lastQuoteFetchDate = useSelector<IAppState, Date | undefined>(
    (state) => state.quotes.lastSuccessFetchDate
  );

  const showQuoteOfDay = isToday(date) && achievements.length > 0;

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      showQuoteOfDay &&
      (!lastQuoteFetchDate || !isToday(lastQuoteFetchDate))
    ) {
      dispatch(getDailyQuoteAction());
    }
  }, [showQuoteOfDay, lastQuoteFetchDate]);

  return <QuoteOfDay show={showQuoteOfDay} />;
};
