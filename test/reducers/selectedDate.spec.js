import expect from 'expect'
import * as types from '../../src/actions/types'
import selectedDateReducer from '../../src/reducers/selectedDate'

describe('selectedDate reducer', () => {

    it('should switch the date to previous one', () => {
        const beforeState = { value: new Date() }
        const afterState = { value: new Date(beforeState.value.getTime() - 86400000) }

        expect(selectedDateReducer(beforeState, { type: types.PREV_DATE })).toEqual(afterState);
    })
})
