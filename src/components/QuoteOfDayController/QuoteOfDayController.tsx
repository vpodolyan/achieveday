import { FC, useEffect } from 'react';
import isToday from 'date-fns/isToday';
import { QuoteOfDay } from 'components/QuoteOfDay';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { IAppState } from 'types/state/IAppState';
import { IAchievement } from 'types/IAchievement';
import { getDailyQuoteAction } from 'actions';

export const QuoteOfDayController: FC = () => {
  const achievements = useSelector<IAppState, IAchievement[]>(
    (state) => state.achievements.data,
    shallowEqual
  );
  const date = useSelector<IAppState, Date>(
    (state) => state.datePicker.value,
    shallowEqual
  );
  const showQuoteOfDay = isToday(date) && achievements.length > 0;

  const dispatch = useDispatch();

  useEffect(() => {
    if (showQuoteOfDay) {
      dispatch(getDailyQuoteAction());
    }
  }, [showQuoteOfDay]);

  return <QuoteOfDay show={showQuoteOfDay} />;
};
