import * as types from '../actions/types'

const initialState = [
    {
        id: 1,
        text: 'test text'
    }
]

export default function achievements(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ACHIEVEMENT:
            const lastAchivId = state.length > 0 ? state[state.length - 1].id + 1 : 1;
            return [
                ...state,
                {
                    id: lastAchivId,
                    text: action.text
                }
            ]
        case types.REMOVE_ACHIEVEMENT:
            return state.filter((a) => a.id !== action.id);
        default:
            return state;

    }
}
