import IDatePickerState from 'types/state/IDatePickerState';
import * as types from '../actions/types';

const initialState: IDatePickerState = {
  value: new Date(),
  visible: false
};

export default function datePickerReducer(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_DATE:
      return { ...state, value: new Date(state.value.getTime() + 86400000) };
    case types.PREV_DATE:
      return { ...state, value: new Date(state.value.getTime() - 86400000) };
    case types.SET_SELECTED_DATE:
      return { ...state, value: action.value, visible: false };
    case types.SET_CALENDAR_VISIBILITY:
      return { ...state, visible: action.value };
    default:
      return state;
  }
}
