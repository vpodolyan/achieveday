import IAchievement from 'types/IAchievement';

export default interface IAchievementsDataService {
  getAchievements(date?: Date): Promise<IAchievement[]>;
  addAchievement(achievement: IAchievement);
  updateAchievement(achievement: IAchievement);
  deleteAchievement(id: string);
}
