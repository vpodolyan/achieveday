import IAchievement from 'types/IAchievement';

export default interface IAchievementsDataService {
    getAchievements(date?: Date): Promise<IAchievement[]>;
    saveAchievement(achievement: IAchievement);
    deleteAchievement(id: string);
}
