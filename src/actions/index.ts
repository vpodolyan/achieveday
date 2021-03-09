import { IAchievement } from 'types/IAchievement';
import { IQuote } from 'types/IQuote';
import * as types from './types';

export const addAchievement = (achievement: Partial<IAchievement>) => ({
  type: types.ADD_ACHIEVEMENT,
  payload: { achievement }
});

export const updateAchievement = (achievement: IAchievement) => ({
  type: types.UPDATE_ACHIEVEMENT,
  payload: { achievement }
});

export const removeAchievement = (id) => ({
  type: types.REMOVE_ACHIEVEMENT,
  payload: { id }
});

export const switchDate = (direction) => ({
  type: direction
});

export const setSelectedDate = (date) => ({
  type: types.SET_SELECTED_DATE,
  value: date
});

export const setCalendarVisibility = (value) => ({
  type: types.SET_CALENDAR_VISIBILITY,
  value
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user
});

export const getAchievements = () => ({
  type: types.GET_ACHIEVEMENTS,
  payload: {}
});

export const getAchievementsSuccess = (achievements: IAchievement[]) => ({
  type: types.GET_ACHIEVEMENTS_SUCCESS,
  payload: { achievements }
});

export const getDailyQuoteAction = () => ({
  type: types.GET_DAILY_QUOTE,
  payload: {}
});

export const getDaiylyQuoteSuccessAction = (quote: IQuote) => ({
  type: types.GET_DAILY_QUOTE_SUCCESS,
  payload: { quote }
});

export const getDaiylyQuoteFailAction = () => ({
  type: types.GET_DAILY_QUOTE_FAIL,
  payload: {}
});
