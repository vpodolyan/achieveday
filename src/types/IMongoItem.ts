/* eslint-disable camelcase */
// eslint-disable-next-line import/no-unresolved
import { ObjectID } from 'mongodb';

export default interface IMongoItem {
    _id: ObjectID;
    owner_id: string;
}
