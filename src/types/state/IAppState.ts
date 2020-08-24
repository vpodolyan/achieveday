import IUser from 'types/IUser';
import IAchievementsState from './IAchievementsState';
import IDatePickerState from './IDatePickerState';
import IQuotesState from './IQuotesState';

export default interface IAppState {
    achievements: IAchievementsState;
    datePicker: IDatePickerState;
    quotes: IQuotesState;
    user: IUser;
}
