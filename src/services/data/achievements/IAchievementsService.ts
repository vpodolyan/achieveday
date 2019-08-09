import IAchievement from 'types/IAchievement';

export default interface IAchievementsService {
    getAchievements(): Promise<IAchievement[]>;
    saveAchievement(achievement: IAchievement);
    deleteAchievement(id: string);
}
