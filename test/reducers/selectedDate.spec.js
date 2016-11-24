import expect from 'expect'
import * as types from '../../src/actions/types'
import selectedDateReducer from '../../src/reducers/selectedDate'
import * as actions from '../../src/actions'

describe('selectedDate reducer', () => {

    it('should switch the date to previous one', () => {
        const beforeState = { value: new Date() }
        const afterState = { value: new Date(beforeState.value.getTime() - 86400000) }

        expect(selectedDateReducer(beforeState, { type: types.PREV_DATE })).toEqual(afterState);
    })

    it('should set selectedDate', () => {
        const beforeState = { value: new Date(), value: false }
        const newDate = new Date("2001-10-01")
        const afterState = { value: newDate, visible: false }

        expect(selectedDateReducer(beforeState, actions.setSelectedDate(newDate))).toEqual(afterState)
    })

    it('should set the visible value to "false" on SET_SELECTED_DATE action', () => {
        const beforeState = { value: new Date(), visible: true }
        const newDate = new Date("2001-10-01")
        const afterState = { value: newDate, visible: false }

        expect(selectedDateReducer(beforeState, actions.setSelectedDate(newDate))).toEqual(afterState)
    })
})
