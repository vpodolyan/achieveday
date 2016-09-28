import React, { PropTypes } from 'react'
import Achievement from './Achievement'

const AchieveList = ({ achievements }) => (
  <ul>
    {achievements.map(achievmnt =>
      <Achievement
        key={achievmnt.id}
        {...achievmnt}
      />
    )}
  </ul>
)

AchieveList.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  // onTodoClick: PropTypes.func.isRequired
}

export default AchieveList
