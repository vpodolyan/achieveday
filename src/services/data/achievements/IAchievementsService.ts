import IAchievement from 'types/IAchievement';

export default interface IAchievementsService {
    getAchievements(date?: Date): Promise<IAchievement[]>;
    saveAchievement(achievement: IAchievement);
    deleteAchievement(id: string);
}
