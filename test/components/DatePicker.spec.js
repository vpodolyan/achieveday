import expect from 'expect'
import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import FakeStore from '../utils/FakeStore'

import DatePicker from '../../src/containers/DatePicker'

function setup() {
    const component = shallow(
        <DatePicker />
    )

    return { component }
}

describe('DatePicker component', () => {
    let component;

    beforeEach(() => {
        const store = FakeStore({});

        const wrapper = mount(
            <Provider store={store}>
                <DatePicker />
            </Provider>
        )

        component = wrapper.find(DatePicker);
    })

    let selectedDate = (component) => { component.find('.date-picker__input').get(0).value }

    it('should render', () => {
        expect(component.length).toBeTruthy();
    })

    it('should display current date by default', () => {
        expect(component.find('.date-picker__input').get(0).value).toBe(new Date().toLocaleDateString());
    })

    it('should switch the selected date to previous one', () => {
        let date = new Date();
        date.setDate(date.getDate() - 1);

        component.find('.date-picker__arrow-left').simulate('click');
        expect(component.find('.date-picker__input').get(0).value).toBe(date.toLocaleDateString());
    })
})
