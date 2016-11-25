import expect from 'expect'
import * as types from '../../src/actions/types'
import datePickerReducer from '../../src/reducers/datePickerReducer'
import * as actions from '../../src/actions'

describe('datePickerReducer reducer', () => {

    it('should switch the date to previous one', () => {
        const beforeState = { value: new Date() }
        const afterState = { value: new Date(beforeState.value.getTime() - 86400000) }

        expect(datePickerReducer(beforeState, { type: types.PREV_DATE })).toEqual(afterState);
    })

    it('should set selectedDate', () => {
        const beforeState = { value: new Date(), value: false }
        const newDate = new Date("2001-10-01")
        const afterState = { value: newDate, visible: false }

        expect(datePickerReducer(beforeState, actions.setSelectedDate(newDate))).toEqual(afterState)
    })

    it('should set the visible value to "false" on SET_SELECTED_DATE action', () => {
        const beforeState = { value: new Date(), visible: true }
        const newDate = new Date("2001-10-01")
        const afterState = { value: newDate, visible: false }

        expect(datePickerReducer(beforeState, actions.setSelectedDate(newDate))).toEqual(afterState)
    })

    it('should switch calendar visibilty', () => {
        const beforeState = { value: new Date(), visible: false }
        const afterState = { value: beforeState.value, visible: true }

        expect(datePickerReducer(beforeState, actions.setCalendarVisibility(true))).toEqual(afterState)
    })
})
