import React, { PropTypes } from 'react'
import Achievement from './Achievement'

const AchieveList = ({ achievements, onAchivDelete }) => (
  <ul>
    {achievements.map(achievmnt =>
      <Achievement
        key={achievmnt.id}
        {...achievmnt}
        onAchivDelete={onAchivDelete}
      />
    )}
  </ul>
)

AchieveList.propTypes = {
  achievements: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onAchivDelete: PropTypes.func.isRequired
}

export default AchieveList
