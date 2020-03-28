import * as types from './types'
import IAchievement from 'types/IAchievement'

export const addAchievement = (achievement) => {
  return {
    type: types.ADD_ACHIEVEMENT,
    payload: { achievement },
  }
}

export const removeAchievement = (id) => {
  return {
    type: types.REMOVE_ACHIEVEMENT,
    payload: { id },
  }
}

export const switchDate = (direction) => {
    return {
        type: direction
    }
}

export const setSelectedDate = (date) => {
    return {
        type: types.SET_SELECTED_DATE,
        value: date
    }
}

export const setCalendarVisibility = (value) => {
    return {
        type: types.SET_CALENDAR_VISIBILITY,
        value
    }
}

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
});

export const getAchievements = () => ({
  type: types.GET_ACHIEVEMENTS,
  payload: {},
})

export const getAchievementsSuccess = (achievements: IAchievement[]) => ({
  type: types.GET_ACHIEVEMENTS_SUCCESS,
  payload: { achievements }
})

