import * as types from '../actions/types'

export default function achievements(state = {}, action) {
    switch (action.type) {
        case types.ADD_ACHIEVEMENT:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text
                }
            ]
        case types.REMOVE_ACHIEVEMENT:
            return state.filter((a) => a.id !== action.id);
        default:
            return state;

    }
}
