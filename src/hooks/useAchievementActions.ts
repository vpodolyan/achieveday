import { useReducer } from 'react';

import achievements, { achievementsInitialState } from 'reducers/achievements';
import achievementService from 'services/data/achievements/achievementsService';
import { getAchievements as getAchievementsAction } from 'actions';

export default function useAchievementActions() {
    const [dispatch] = useReducer(achievements, achievementsInitialState);

    const getAchievements = async () => {
        const achievements = await achievementService.getAchievements();
        dispatch(getAchievementsAction(achievements));
    }

    return {
        getAchievements,
    }
}