import * as types from '../actions/types'

const initialState = {
    value: new Date(),
    visible: true
}

export default function selectedDate(state = initialState, action) {
    switch (action.type) {
        case types.NEXT_DATE:
            return { ...state, value: new Date(state.value.getTime() + 86400000)}
        case types.PREV_DATE:
            return { ...state, value: new Date(state.value.getTime() - 86400000)}
        case types.SET_SELECTED_DATE:
            return { ...state, value: action.value, visible: false }
        default:
            return state;
    }
}
