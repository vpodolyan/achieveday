import IAchievement from 'types/IAchievement';

export default interface IAchievementsService {
    getAchievements(): IAchievement[];
}
