import IAchievementsState from "./IAchievementsState";
import IDatePickerState from "./IDatePickerState";
import IQuotesState from "./IQuotesState";

export default interface IState {
    achievements: IAchievementsState;
    datePicker: IDatePickerState;
    quotes: IQuotesState;
}
