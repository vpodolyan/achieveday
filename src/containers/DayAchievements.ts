import { connect } from 'react-redux';

import {
  getAchievements as getAchievementsAction, getAchievementsSuccess as getAchievementsSuccessAction, removeAchievement, updateAchievement
} from 'actions';
import IAppState from 'types/state/IAppState';
import IAchievement from 'types/IAchievement';
import achievementService from '../services/data/achievements/achievementsService';
import { AchievementsList } from '../components/AchievementsList/AchievementsList';

const mapStateToProps = (state: IAppState) => ({
  achievements: state.achievements.data,
  loading: state.achievements.loading,
  selectedDate: state.datePicker.value
});

const mapDispatchToProps = (dispatch) => ({
  onAchievementDelete: (id) => {
    dispatch(removeAchievement(id));
  },
  getAchievements: async (date) => {
    dispatch(getAchievementsAction());
    const achievements = await achievementService.getAchievements(date || new Date());
    dispatch(getAchievementsSuccessAction(achievements));
  },
  onAchievementEdit: (achievement: IAchievement) => {
    dispatch(updateAchievement(achievement));
  }
});

const DayAchievements = connect(
  mapStateToProps,
  mapDispatchToProps
)(AchievementsList);

export default DayAchievements;
