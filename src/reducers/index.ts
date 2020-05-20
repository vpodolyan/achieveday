import { combineReducers } from 'redux'
import achievements from './achievements'
import datePicker from './datePickerReducer'
import user from './user';
import quotes from './quotesReducer';

export default combineReducers({ achievements, datePicker, user, quotes });
