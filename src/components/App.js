import React from 'react'

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePickerContainer from '../containers/DatePickerContainer'

const App = () => (
  <div>
    <DatePickerContainer />
    <DayAchievements />
    <NewAchievement />
  </div>
)

export default App
