import { Reducer } from 'redux';
import { IAchievementsState } from 'types/state/IAchievementsState';

import * as types from '../actions/types';

const initialState: IAchievementsState = {
  data: [],
  loading: false
};

export const achievements: Reducer<IAchievementsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case types.ADD_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        data: [
          ...state.data,
          {
            ...action.payload.achievement
          }
        ]
      };

    case types.UPDATE_ACHIEVEMENT:
      return {
        ...state,
        data: state.data.map((a) => {
          if (a._id === action.payload.achievement._id) {
            return {
              ...a,
              ...action.payload.achievement
            };
          }

          return a;
        })
      };

    case types.REMOVE_ACHIEVEMENT_SUCCESS:
      return {
        ...state,
        data: state.data.filter((a) => a._id !== action.payload.id)
      };

    case types.GET_ACHIEVEMENTS:
      return { ...state, data: [], loading: true };

    case types.GET_ACHIEVEMENTS_SUCCESS:
      return { ...state, data: action.payload.achievements, loading: false };

    default:
      return state;
  }
};

export { initialState as achievementsInitialState };
