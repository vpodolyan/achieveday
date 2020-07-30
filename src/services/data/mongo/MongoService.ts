import { RemoteMongoClient, RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import stitchClient from 'stitch/client';

import IAchievement from 'types/IAchievement';
import IAchievementsDataService from '../achievements/IAchievementsDataService';

class MongoService implements IAchievementsDataService {
    mongoClient: RemoteMongoClient;
    achievementsCollection: RemoteMongoCollection<IAchievement>;

    constructor() {
        this.mongoClient = stitchClient.getServiceClient(
            RemoteMongoClient.factory,
            "mongodb-atlas"
          );

          this.achievementsCollection = this.mongoClient.db("achieveday_db").collection<IAchievement>("achievements");
    }

    async getAchievements(date?: Date) {
        let query = {};
        if (date) {
            const startDate = new Date(date);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(date);
            endDate.setHours(23,59,59,999);
            query = { 'createDate': { '$gte': startDate, '$lte': endDate }};
        }

        return await this.achievementsCollection.find(query, { limit: 1000 }).asArray();
    }

    async addAchievement(achievement: IAchievement) {
        return await this.achievementsCollection.insertOne(achievement)
            .then(result => ({
                ...achievement,
                _id: result.insertedId,
            }))
    }

    async updateAchievement(achievement: IAchievement) {
        return await this.achievementsCollection.updateOne({ _id: achievement._id}, {'$set': { text: achievement.text }});
    }

    async deleteAchievement(id: string) {
        return await this.achievementsCollection.deleteOne({ _id: id });
    }
}

export default MongoService;
