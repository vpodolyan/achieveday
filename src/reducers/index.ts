import { combineReducers } from 'redux';
import { datePickerReducer as datePicker } from './datePickerReducer';
import { user } from './user';

export const reducers = combineReducers({
  datePicker,
  user
});
