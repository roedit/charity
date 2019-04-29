import React from 'react'
import './app.sass'

 const App = () => {
   console.log(process.env.API_KEY);
   return (<div className="app"> Charity App! </div>)
 }

export default App