import { combineReducers } from 'redux';
import { achievementsReducer as achievements } from './achievements';
import { datePickerReducer as datePicker } from './datePickerReducer';
import { user } from './user';
import { quotes } from './quotesReducer';

export const reducers = combineReducers({
  achievements,
  datePicker,
  user,
  quotes
});
