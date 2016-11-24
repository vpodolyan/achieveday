import { connect } from 'react-redux'
import DatePicker from './DatePicker'
import { switchDate, setSelectedDate } from '../../src/actions'

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate.value,
    visible: state.selectedDate.visible,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSwitch: (direction) => {
        dispatch(switchDate(direction))
    },
    onDateSelected: (date) => {
        dispatch(setSelectedDate(date))
    }
  }
}

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker)

export default DatePickerContainer
