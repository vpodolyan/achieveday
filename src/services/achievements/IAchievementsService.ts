import { IAchievement } from 'types/IAchievement';

export interface IAchievementsService {
  getAchievements(date?: Date): Promise<IAchievement[]>;
  addAchievement(achievement: IAchievement);
  updateAchievement(achievement: IAchievement);
  deleteAchievement(id: string);
}
