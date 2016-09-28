import { connect } from 'react-redux'
import { removeAchievement } from '../actions'

let newAchivId = 0;

let NewAchievement = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addAchievement(newAchivId++, input.value))
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
