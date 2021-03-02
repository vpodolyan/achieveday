import IAchievement from 'types/IAchievement';

export default interface IAchievementsState {
  data: IAchievement[];
  loading: boolean;
}
