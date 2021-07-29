import { RemoteMongoCollection } from 'mongodb-stitch-browser-sdk';
import { MongoCollectionName } from 'types/MongoCollectionName';

export interface IMongoService {
  getCollection<T>(name: MongoCollectionName): RemoteMongoCollection<T>;
}
