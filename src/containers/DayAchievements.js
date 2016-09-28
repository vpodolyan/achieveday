import { connect } from 'react-redux'
import AchieveList from '../components/AchieveList'

const mapStateToProps = (state) => {
  return {
    achievements: state.achievements
  }
}

const DayAchievements = connect(
  mapStateToProps
)(AchieveList)

export default DayAchievements
