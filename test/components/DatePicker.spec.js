import expect from 'expect'
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import FakeStore from '../utils/FakeStore'

import DatePicker from '../../src/components/DatePicker'

describe('DatePicker component', () => {
    let component;
    const onDateSwitch = expect.createSpy();
    const selectedDate = { value: new Date() };

    beforeEach(() => {
        // TODO: Move this line to container component test
        // const store = FakeStore({ selectedDate: selectedDate });

        // const wrapper = mount(
        //     <Provider store={store}>
        //         <DatePicker selectedDate={selectedDateVal} onDateSwitch={onDateSwitch} />
        //     </Provider>
        // )
        //
        // component = wrapper.find(DatePicker);

        component = shallow(
            <DatePicker selectedDate={selectedDate.value} onDateSwitch={onDateSwitch} />
        );
    })

    it('should render', () => {
        expect(component.length).toBeTruthy();
    })

    it('should display date passed to props', () => {
        expect(component.find('.date-picker__input').get(0).props.value).toBe(selectedDate.value.toLocaleDateString());
    })

    it('should call onDateSwitch when arrow clicked ', () => {
        component.find('.date-picker__arrow-left').simulate('click');
        expect(onDateSwitch).toHaveBeenCalled();
    })
})
