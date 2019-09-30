import * as types from '../actions/types'

const initialState = [
    {
        id: 1,
        text: 'test text'
    }
]

export default function achievements(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ACHIEVEMENT_SUCCESS:
            return [
                ...state,
                {
                    id: action.payload.achievement._id,
                    _id: action.payload.achievement._id,
                    text: action.payload.achievement.text
                }
            ]

        case types.REMOVE_ACHIEVEMENT:
            return state.filter((a) => a.id !== action.id);
        
        case types.GET_ACHIEVEMENTS:
            return action.payload.achievements;

        default:
            return state;

    }
}

export { initialState as achievementsInitialState };
