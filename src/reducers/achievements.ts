import * as types from '../actions/types'
import IAchievementsState from 'types/state/IAchievementsState';

const initialState: IAchievementsState = {
    data: [],
    loading: false,
}

export default function achievements(state = initialState, action) {
    switch (action.type) {
        case types.ADD_ACHIEVEMENT_SUCCESS:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        _id: action.payload.achievement._id,
                        text: action.payload.achievement.text
                    }
                ]
            }

        case types.REMOVE_ACHIEVEMENT_SUCCESS:
            return { ...state, data: state.data.filter((a) => a._id !== action.payload.id) };
        
        case types.GET_ACHIEVEMENTS:
            return { ...state, data: [], loading: true };

        case types.GET_ACHIEVEMENTS_SUCCESS:
            return { ...state, data: action.payload.achievements, loading: false };

        default:
            return state;

    }
}

export { initialState as achievementsInitialState };
