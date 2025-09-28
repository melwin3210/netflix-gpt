import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <div  className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_small.jpg)] h-screen w-full flex justify-center items-center'>
     <LoginForm />
    </div>
  )
}

export default App
