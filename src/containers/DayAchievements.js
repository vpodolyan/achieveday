import { connect } from 'react-redux'
import AchieveList from '../components/AchieveList'
import {removeAchievement} from '../actions'

const mapStateToProps = (state) => {
  return {
    achievements: state.achievements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAchivDelete: (id) => {
      dispatch(removeAchievement(id))
    }
  }
}

const DayAchievements = connect(
  mapStateToProps,
  mapDispatchToProps
)(AchieveList)

export default DayAchievements
