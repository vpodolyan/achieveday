import { connect } from 'react-redux'

import AchieveList from '../components/AchieveList'
import achievementService from '../services/data/achievements/achievementsService';
import { getAchievements as getAchievementsAction, getAchievementsSuccess as getAchievementsSuccessAction, removeAchievement, getDailyQuoteAction } from 'actions';
import IState from 'types/state/IState';

const mapStateToProps = (state: IState) => ({
    achievements: state.achievements.data,
    loading: state.achievements.loading,
    selectedDate: state.datePicker.value,
})

const mapDispatchToProps = (dispatch) => {
    return {
        onAchivDelete: (id) => {
            dispatch(removeAchievement(id))
        },
        getAchievements: async (date) => {
            dispatch(getAchievementsAction());
            const achievements = await achievementService.getAchievements(date || new Date());
            dispatch(getAchievementsSuccessAction(achievements));
        },
        getDialyQuote: () => {
            dispatch(getDailyQuoteAction());
        }
    }
}

const DayAchievements = connect(
    mapStateToProps,
    mapDispatchToProps
)(AchieveList)

export default DayAchievements;
