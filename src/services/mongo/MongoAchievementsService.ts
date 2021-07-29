import { RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import { IAchievement } from 'types/IAchievement';

import { IAchievementsDataService } from '../achievements/IAchievementsDataService';
import { MongoService } from './MongoService';

export class MongoAchievementsService implements IAchievementsDataService {
  achievementsCollection: RemoteMongoCollection<IAchievement>;

  constructor() {
    const mongoService = new MongoService();

    this.achievementsCollection = mongoService.getCollection('achievements');
  }

  async getAchievements(date?: Date) {
    let query = {};
    if (date) {
      const startDate = new Date(date);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(date);
      endDate.setHours(23, 59, 59, 999);
      query = { createDate: { $gte: startDate, $lte: endDate } };
    }

    return this.achievementsCollection.find(query, { limit: 1000 }).asArray();
  }

  async addAchievement(achievement: IAchievement) {
    return this.achievementsCollection
      .insertOne(achievement)
      .then((result) => ({
        ...achievement,
        _id: result.insertedId
      }));
  }

  async updateAchievement(achievement: IAchievement) {
    return this.achievementsCollection.updateOne(
      { _id: achievement._id },
      { $set: { text: achievement.text } }
    );
  }

  async deleteAchievement(id: string) {
    return this.achievementsCollection.deleteOne({ _id: id });
  }
}
