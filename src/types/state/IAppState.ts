import { IUser } from 'types/IUser';

import { IDatePickerState } from './IDatePickerState';
import { IQuotesState } from './IQuotesState';

export interface IAppState {
  datePicker: IDatePickerState;
  quotes: IQuotesState;
  user: IUser;
}
