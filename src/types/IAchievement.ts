import IMongoItem from './IMongoItem';

export default interface IAchievement extends IMongoItem {
  text: string;
  createDate: Date;
  editDate: Date;
}
