import { RemoteMongoClient, RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import { stitchClient } from 'stitch/client';

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

    async getAchievements() {
        return await this.achievementsCollection.find({}, { limit: 1000 }).asArray();
    }

    async saveAchievement(achievement: IAchievement) {
        return await this.achievementsCollection.insertOne(achievement)
            .then(result => ({
                ...achievement,
                _id: result.insertedId,
            }))     
    }

    async deleteAchievement(id: string) {
        return await this.achievementsCollection.deleteOne({ _id: id });
    }
}

export default MongoService;
