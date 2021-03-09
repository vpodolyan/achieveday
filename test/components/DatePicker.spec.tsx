import expect from 'expect';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { DatePickerContainer } from '../../src/components/DatePicker/DatePickerContainer';
import { DatePicker } from '../../src/components/DatePicker/DatePicker';
import { createStore, Store } from 'redux';
import { IDatePickerState } from '../../src/types/state/IDatePickerState';
import { datePickerReducer } from '../../src/reducers/datePickerReducer';

describe('DatePicker component', () => {
  let component;
  const onDateSwitch = expect.createSpy();
  const selectedDate = new Date();

  beforeEach(() => {
    // TODO: Move this line to container component test
    const store = createStore(datePickerReducer, { value: selectedDate,  visible: false});

    const wrapper = mount(
      <Provider store={store as Store<IDatePickerState, any>}>
        <DatePickerContainer />
      </Provider>
    );

    component = wrapper.find(DatePicker);
  });

  it('should render', () => {
    expect(component.length).toBeTruthy();
  });

  it('should display date passed to props', () => {
    expect(component.find('.date-picker__input').get(0).props.value).toBe(selectedDate.value.toLocaleDateString());
  });

  it('should call onDateSwitch when arrow clicked ', () => {
    component.find('.date-picker__arrow-left').simulate('click');
    expect(onDateSwitch).toHaveBeenCalled();
  });
});
