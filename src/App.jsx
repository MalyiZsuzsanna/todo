
import React, { useEffect } from 'react'
import './App.css'

import { useState } from 'react'
import { Todos } from './components/Todos'
import { Login } from './components/Login'
import { getCurrentUser, signOuthUser } from './utils'
import LogoutIcon from '@mui/icons-material/Logout';

function App() {
  const [user,setUser]=useState(null)
  
  getCurrentUser(setUser)

  return (
    <>
      <div className="app">
        <h1>My Todo</h1>
        {user && <LogoutIcon 
        sx={{width:"100%",cursore:"pointer",color:"blue",fontSize:"15px"}}
        onClick={()=>signOuthUser()}
        />}
        {user==null ? <Login/> : <Todos/>}
      </div>
    </>
  )
}

export default App
