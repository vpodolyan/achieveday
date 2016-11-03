import * as types from '../actions/types'

const initialState = {
    value: new Date()
}

export default function selectedDate(state = initialState, action) {
    switch (action.type) {
        case types.NEXT_DATE:
            return { ...state, value: new Date(state.value.getTime() + 86400000)}
        case types.PREV_DATE:
            return { ...state, value: new Date(state.value.getTime() - 86400000)}
        default:
            return state;
    }
}
