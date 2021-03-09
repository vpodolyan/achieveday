import { IMongoItem } from './IMongoItem';

export interface IAchievement extends IMongoItem {
  text: string;
  createDate: Date;
  editDate: Date;
}
