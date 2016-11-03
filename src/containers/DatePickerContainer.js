import { connect } from 'react-redux'
import DatePicker from './DatePicker'
import { switchDate } from '../../src/actions'

const mapStateToProps = (state) => {
  return {
    selectedDate: state.selectedDate
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDateSwitch: (direction) => {
      dispatch(switchDate(direction))
    }
  }
}

const DatePickerContainer = connect(mapStateToProps, mapDispatchToProps)(DatePicker)

export default DatePickerContainer
