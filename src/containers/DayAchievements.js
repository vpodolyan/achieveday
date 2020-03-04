import { connect } from 'react-redux'

import AchieveList from '../components/AchieveList'
import { removeAchievement } from '../actions'
import achievementService from '../services/data/achievements/achievementsService';
import { getAchievements as getAchievementsAction } from 'actions';

const mapStateToProps = (state) => {
    return {
        achievements: state.achievements
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAchivDelete: (id) => {
            dispatch(removeAchievement(id))
        },
        getAchievements: async () => {
            const achievements = await achievementService.getAchievements(new Date());
            dispatch(getAchievementsAction(achievements));
        },
    }
}

const DayAchievements = connect(
    mapStateToProps,
    mapDispatchToProps
)(AchieveList)

export default DayAchievements
