import React from 'react'
import { connect } from 'react-redux'
import { addAchievement } from '../actions'

let NewAchievement = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addAchievement(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          +
        </button>
      </form>
    </div>
  )
}
NewAchievement = connect()(NewAchievement)

export default NewAchievement
