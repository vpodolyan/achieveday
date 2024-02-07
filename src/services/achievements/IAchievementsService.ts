import { IAchievement } from 'types/IAchievement';

export interface IAchievementsService {
  getAchievements(date?: Date): Promise<IAchievement[]>;
  addAchievement(achievement: Partial<IAchievement>);
  updateAchievement(achievement: IAchievement);
  deleteAchievement(id: string);
}
