import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import { stitchClient } from 'stitch/client';

import IAchievement from 'types/IAchievement';

class MongoService {
    mongoClient: RemoteMongoClient;

    constructor() {
        this.mongoClient = stitchClient.getServiceClient(
            RemoteMongoClient.factory,
            "mongodb-atlas"
          );
    }

    async getAchievements() {
        return await this.mongoClient.db("achieveday_db").collection<IAchievement>("achievements").find({}, { limit: 1000 }).asArray();
    }
}