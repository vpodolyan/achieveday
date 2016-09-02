import React from 'react'

import AchieveList from "./AchieveList"
import NewAchievement from '../containers/NewAchievement'

const App = () => (
  <div>
    <AchieveList achieves={[]}/>
    <NewAchievement />
  </div>
)

export default App
