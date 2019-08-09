import IAchievement from 'types/IAchievement';

export default interface IAchievementsDataService {
    getAchievements(): Promise<IAchievement[]>;
    saveAchievement(achievement: IAchievement);
    deleteAchievement(id: string);
}
