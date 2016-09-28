import * as types from './types'

export const addAchievement = (text) => {
  return {
    type: types.ADD_ACHIEVEMENT,
    text
  }
}

export const removeAchievement = (id) => {
  return {
    type: types.REMOVE_ACHIEVEMENT,
    id: id
  }
}
