import React from 'react'
import './app.sass'
import Charity from './charity/Charity'
import Donations from './donations/Donations'

 const App = () => {
   return (
    <div className="app"> 
      <Charity />
      <Donations />
    </div>
   )
 }

export default App