import { combineReducers } from 'redux'
import achievements from './achievements'
import datePicker from './datePickerReducer'

export default combineReducers({ achievements, datePicker })
