import * as types from './types'

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

export const getAchievements = (achievements) => ({
  type: types.GET_ACHIEVEMENTS,
  payload: { achievements }
})
