import { setCalendarVisibility as changeVisibility, setSelectedDate, switchDate } from 'actions';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IAppState from 'types/state/IAppState';

import { DatePicker } from './DatePicker';

export const DatePickerContainer: FC = () => {
  const selectedDate = useSelector((state: IAppState) => state.datePicker.value);
  const visible = useSelector((state: IAppState) => state.datePicker.visible);

  const dispatch = useDispatch();

  const onDateSwitch = (direction) => {
    dispatch(switchDate(direction));
  };

  const onDateSelected = (date) => {
    dispatch(setSelectedDate(date));
  };

  const setCalendarVisibility = (value) => {
    dispatch(changeVisibility(value));
  };

  return (
    <DatePicker
      selectedDate={selectedDate}
      visible={visible}
      onDateSwitch={onDateSwitch}
      onDateSelected={onDateSelected}
      setCalendarVisibility={setCalendarVisibility}
    />
  );
};
