import { Store } from "redux";

import { ADD_ACHIEVEMENT, ADD_ACHIEVEMENT_SUCCESS } from "actions/types";
import achievementService from "services/data/achievements/achievementsService";

const achievementsMiddleware = (store: Store)  => next => async action => {
    if (action.type === ADD_ACHIEVEMENT) {
        try {
            const achievement = await achievementService.saveAchievement(action.payload.achievement);
            store.dispatch({ type: ADD_ACHIEVEMENT_SUCCESS, payload: { achievement } })
        } catch {}
    }

    return next(action);
}

export default achievementsMiddleware;
