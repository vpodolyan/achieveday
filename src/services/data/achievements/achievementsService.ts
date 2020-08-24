import IAchievement from 'types/IAchievement';
import IAchievementsService from './IAchievementsService';
import IAchievementsDataService from './IAchievementsDataService';
import MongoService from '../mongo/MongoService';

class AchievementsService implements IAchievementsService {
    dataService: IAchievementsDataService;

    constructor () {
      this.dataService = new MongoService();
    }

    getAchievements (date?: Date) {
      return this.dataService.getAchievements(date);
    }

    addAchievement (achievement: IAchievement) {
      return this.dataService.addAchievement(achievement);
    }

    updateAchievement (achievement: IAchievement) {
      return this.dataService.updateAchievement(achievement);
    }

    deleteAchievement (id: string) {
      return this.dataService.deleteAchievement(id);
    }
}

const achievementService = new AchievementsService();

export default achievementService;
