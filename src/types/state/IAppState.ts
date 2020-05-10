import IAchievementsState from "./IAchievementsState";
import IDatePickerState from "./IDatePickerState";
import IQuotesState from "./IQuotesState";
import IUser from "types/IUser";

export default interface IAppState {
    achievements: IAchievementsState;
    datePicker: IDatePickerState;
    quotes: IQuotesState;
    user: IUser;
}
