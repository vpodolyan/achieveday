import { IAchievement } from 'types/IAchievement';

export interface IAchievementsState {
  data: IAchievement[];
  loading: boolean;
}
