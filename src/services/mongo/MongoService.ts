import {
  RemoteMongoClient,
  RemoteMongoCollection
} from 'mongodb-stitch-browser-services-mongodb-remote';
import { stitchClient } from 'stitch/client';
import { MongoCollectionName } from 'types/MongoCollectionName';

import { IMongoService } from './IMongoService';

export class MongoService implements IMongoService {
  mongoClient: RemoteMongoClient;

  constructor() {
    this.mongoClient = stitchClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
  }

  getCollection<T>(name: MongoCollectionName): RemoteMongoCollection<T> {
    return this.mongoClient.db('achieveday_db').collection<T>(name);
  }
}
