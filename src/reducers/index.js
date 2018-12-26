import { combineReducers } from 'redux'
import achievements from './achievements'
import datePicker from './datePickerReducer'
import user from './user';

export default combineReducers({ achievements, datePicker, user })
