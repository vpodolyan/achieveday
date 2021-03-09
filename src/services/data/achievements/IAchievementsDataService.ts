import { IAchievement } from 'types/IAchievement';

export interface IAchievementsDataService {
  getAchievements(date?: Date): Promise<IAchievement[]>;
  addAchievement(achievement: IAchievement);
  updateAchievement(achievement: IAchievement);
  deleteAchievement(id: string);
}
