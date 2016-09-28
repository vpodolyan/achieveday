import React from 'react'
import { connect } from 'react-redux'
import { addAchievement } from '../actions'

let NewAchievement = ({ dispatch }) => {
  let input;
  let form1;

  const onAddClick = (e) => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addAchievement(input.value))
      input.value = ''
      input.focus()
  }

  return (
    <div>
      <form onSubmit={e => { onAddClick(e) }}>
        <input ref={node => { input = node }} />
        <a className="add-btn" href="#" onClick={e => { onAddClick(e) }}>
          +
        </a>
      </form>
    </div>
  )
}
NewAchievement = connect()(NewAchievement)

export default NewAchievement
