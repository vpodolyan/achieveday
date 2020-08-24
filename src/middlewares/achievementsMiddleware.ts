import { Store } from 'redux';

import {
  ADD_ACHIEVEMENT, ADD_ACHIEVEMENT_SUCCESS, REMOVE_ACHIEVEMENT, REMOVE_ACHIEVEMENT_SUCCESS, UPDATE_ACHIEVEMENT, UPDATE_ACHIEVEMENT_SUCCESS
} from 'actions/types';
import achievementService from 'services/data/achievements/achievementsService';

const achievementsMiddleware = (store: Store) => (next) => async (action) => {
  if (action.type === ADD_ACHIEVEMENT) {
    try {
      const achievement = await achievementService.addAchievement(action.payload.achievement);

      store.dispatch({ type: ADD_ACHIEVEMENT_SUCCESS, payload: { achievement } });
    // eslint-disable-next-line no-empty
    } catch {}
  } else if (action.type === UPDATE_ACHIEVEMENT) {
    try {
      const { achievement } = action.payload;

      await achievementService.updateAchievement(achievement);

      store.dispatch({ type: UPDATE_ACHIEVEMENT_SUCCESS, payload: { achievement } });
    // eslint-disable-next-line no-empty
    } catch {}
  } else if (action.type === REMOVE_ACHIEVEMENT) {
    try {
      await achievementService.deleteAchievement(action.payload.id);

      store.dispatch({ type: REMOVE_ACHIEVEMENT_SUCCESS, payload: action.payload });
    // eslint-disable-next-line no-empty
    } catch {}
  }

  return next(action);
};

export default achievementsMiddleware;
