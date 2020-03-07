import * as React from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import DayPicker from 'react-day-picker'

import { localeUtils } from 'utils/i18n'
import { NEXT_DATE, PREV_DATE } from 'actions/types'
import Arrow from 'components/Arrow';
import CentredBox from 'components/CentredBox';
import Input from 'components/Input'

import 'react-day-picker/lib/style.css'

interface IProps {
    selectedDate: Date;
    visible: boolean;
    setCalendarVisibility: (value: boolean) => void;
    onDateSwitch: (direction: typeof NEXT_DATE | typeof PREV_DATE) => void;
    onDateSelected: (date: Date) => void;
}
const DatePicker: React.FC<IProps> = ({ selectedDate, setCalendarVisibility, onDateSwitch, onDateSelected, visible }) => {
  const ref = React.useRef<any>();

  const onInputFocus = () => {
    setCalendarVisibility(true);
  };

  useOnclickOutside(ref, () => {
      setCalendarVisibility(false);
  });

  return (
    <div>
      <Arrow onClick={() => onDateSwitch(PREV_DATE)}> &lt; </Arrow>
      <Input
        type="text"
        className="text-center"
        ref={input => input}
        value={selectedDate.toLocaleDateString()}
        onFocus={onInputFocus}
      />
      <Arrow onClick={() => onDateSwitch(NEXT_DATE)}> &gt; </Arrow>
      {visible && (
        <CentredBox>
          <div ref={ref}>
            <DayPicker
              locale={"en"}
              localeUtils={localeUtils}
              onDayClick={day => {
                onDateSelected(day);
              }}
            />
          </div>
        </CentredBox>
      )}
    </div>
  );
};

export default DatePicker;
