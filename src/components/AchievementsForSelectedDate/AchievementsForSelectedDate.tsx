import {
  getAchievements as getAchievementsAction,
  getAchievementsSuccess,
  removeAchievement,
  updateAchievement
} from 'actions';
import { AchievementsList } from 'components/AchievementsList/AchievementsList';
import { Spinner } from 'components/Spinner/Spinner';
import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { achievementService } from 'services/data/achievements/achievementsService';
import { IAchievement } from 'types/IAchievement';
import { IAppState } from 'types/state/IAppState';

export const AchievementsForSelectedDate: FC = () => {
  const loading = useSelector<IAppState>((state) => state.achievements.loading);

  const selectedDate = useSelector<IAppState, Date>(
    (state) => state.datePicker.value,
    (prevDate, nextDate) => prevDate.getTime() === nextDate.getTime()
  );

  const achievements = useSelector<IAppState, IAchievement[]>(
    (state) => state.achievements.data
  );

  const dispatch = useDispatch();

  const handleAchievementDelete = (id) => {
    dispatch(removeAchievement(id));
  };

  const getAchievements = useCallback(
    async (date) => {
      dispatch(getAchievementsAction());
      const achievements = await achievementService.getAchievements(
        date || new Date()
      );
      dispatch(getAchievementsSuccess(achievements));
    },
    [dispatch, getAchievementsAction, getAchievementsSuccess]
  );

  const handleAchievementEdit = (achievement: IAchievement) => {
    dispatch(updateAchievement(achievement));
  };

  useEffect(() => {
    getAchievements(selectedDate);
  }, [getAchievements, selectedDate]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {loading ? (
        <div className="pt-5">
          <Spinner size={2} />
        </div>
      ) : (
        <AchievementsList
          achievements={achievements}
          onAchievementDelete={handleAchievementDelete}
          onAchievementEdit={handleAchievementEdit}
        />
      )}
    </div>
  );
};
