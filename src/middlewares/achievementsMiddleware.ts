import { Store } from "redux";

import { ADD_ACHIEVEMENT, ADD_ACHIEVEMENT_SUCCESS, REMOVE_ACHIEVEMENT, REMOVE_ACHIEVEMENT_SUCCESS } from "actions/types";
import achievementService from "services/data/achievements/achievementsService";

const achievementsMiddleware = (store: Store) => next => async action => {
    if (action.type === ADD_ACHIEVEMENT) {
        try {
            const achievement = await achievementService.saveAchievement(action.payload.achievement);
            store.dispatch({ type: ADD_ACHIEVEMENT_SUCCESS, payload: { achievement } })
        } catch {}
    } else if (action.type === REMOVE_ACHIEVEMENT) {
        try {
            await achievementService.deleteAchievement(action.payload.id);
            store.dispatch({ type: REMOVE_ACHIEVEMENT_SUCCESS, payload: action.payload })
        } catch {}
    }

    return next(action);
}

export default achievementsMiddleware;
