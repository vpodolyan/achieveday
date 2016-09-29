import React from 'react'

import DayAchievements from '../containers/DayAchievements'
import NewAchievement from '../containers/NewAchievement'
import DatePicker from '../containers/DatePicker'

const App = () => (
  <div>
    <DatePicker />
    <DayAchievements />
    <NewAchievement />
  </div>
)

export default App
