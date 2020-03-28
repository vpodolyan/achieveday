import IAchievementsState from "./IAchievementsState";
import IDatePickerState from "./IDatePickerState";

export default interface IState {
    achievements: IAchievementsState;
    datePicker: IDatePickerState;
}
