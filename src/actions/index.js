import * as types from './types'

export const addAchievement = (id, text) => {
  return {
    type: types.ADD_ACHIEVEMENT,
    id,
    text
  }
}

export const removeAchievement = (id) => {
  return {
    type: types.REMOVE_ACHIEVEMENT,
    id: id
  }
}
