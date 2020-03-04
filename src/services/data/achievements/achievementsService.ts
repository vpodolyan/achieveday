import IAchievementsService from "./IAchievementsService";
import IAchievement from "types/IAchievement";
import IAchievementsDataService from "./IAchievementsDataService";
import MongoService from "../mongo/MongoService";

class AchievementsService implements IAchievementsService {
    dataService: IAchievementsDataService;

    constructor() {
        this.dataService = new MongoService();
    }

    getAchievements(date?: Date) {
        return this.dataService.getAchievements(date);
    }
    
    saveAchievement(achievement: IAchievement) {
        return this.dataService.saveAchievement(achievement);
    }

    deleteAchievement(id: string) {
        return this.dataService.deleteAchievement(id);
    }
}

const achievementService = new AchievementsService();

export default achievementService;
