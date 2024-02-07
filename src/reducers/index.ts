import { combineReducers } from 'redux';
import { datePickerReducer as datePicker } from './datePickerReducer';
import { user } from './user';
import { quotes } from './quotesReducer';

export const reducers = combineReducers({
  datePicker,
  user,
  quotes
});
