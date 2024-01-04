
import React, { useEffect } from 'react'
import './App.css'

import { useState } from 'react'
import { Todos } from './components/Todos'

function App() {
  const [user,setuser]=useState(null)
  
  

  return (
    <>
      <div>
        <h1>My Todo</h1>
        <Todos/>
      </div>
    </>
  )
}

export default App
