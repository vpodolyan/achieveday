import { connect } from 'react-redux'
import DatePicker from '../components/DatePicker'
import { switchDate, setSelectedDate, setCalendarVisibility } from '../actions'

const mapStateToProps = (state) => {
  return {
    selectedDate: state.datePicker.value,
    visible: state.datePicker.visible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSwitch: (direction) => {
        dispatch(switchDate(direction))
    },
    onDateSelected: (date) => {
        dispatch(setSelectedDate(date))
    },
    setCalendarVisibility: (value) => {
        dispatch(setCalendarVisibility(value))
    }
  }
}

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker)

export default DatePickerContainer
