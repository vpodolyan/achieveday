import { Reducer } from 'redux';
import { IUser } from 'types/IUser';

const initialState = {};

export const user: Reducer<IUser | {}> = (state = initialState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...action.payload
    };
  }
  return state;
};
