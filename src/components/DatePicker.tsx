import * as React from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';
import DayPicker from 'react-day-picker'
import styled from 'styled-components';

import { NEXT_DATE, PREV_DATE } from 'actions/types'
import Arrow from 'components/Arrow';
import Input from 'components/Input'

import 'react-day-picker/lib/style.css'

const DatePickerWrapper = styled(DayPicker)`
  position: absoulte;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 100;
`;

const DateInput = styled(Input)`
  width: 75%;

  :hover {
    cursor: pointer;
  }
`;

interface IProps {
    selectedDate: Date;
    visible: boolean;
    setCalendarVisibility: (value: boolean) => void;
    onDateSwitch: (direction: typeof NEXT_DATE | typeof PREV_DATE) => void;
    onDateSelected: (date: Date) => void;
}
const DatePicker: React.FC<IProps> = ({
  selectedDate,
  setCalendarVisibility,
  onDateSwitch,
  onDateSelected,
  visible,
}) => {
  const ref = React.useRef<any>();

  const onInputFocus = () => {
    setCalendarVisibility(true);
  };

  useOnclickOutside(() => {
    setCalendarVisibility(false);
  }, {refs: [ref]});

  return (
    <div className="d-flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <Arrow onClick={() => onDateSwitch(PREV_DATE)}> &lt; </Arrow>
        <DateInput
          readOnly
          type="text"
          className="text-center"
          ref={(input) => input}
          value={selectedDate.toLocaleDateString()}
          onFocus={onInputFocus}
        />
        <Arrow onClick={() => onDateSwitch(NEXT_DATE)}> &gt; </Arrow>
      </div>
      {visible && (
        <div
          ref={ref}
          className="d-flex justify-content-center position-relative"
        >
          <DatePickerWrapper
            className="position-absolute"
            locale={"en"}
            onDayClick={(day) => {
              onDateSelected(day);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
