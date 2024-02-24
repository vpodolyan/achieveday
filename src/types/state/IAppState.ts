import { IUser } from 'types/IUser';

import { IDatePickerState } from './IDatePickerState';

export interface IAppState {
  datePicker: IDatePickerState;
  user: IUser;
}
