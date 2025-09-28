import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_small.jpg)] h-screen w-full bg-cover bg-center flex flex-col'>
      <Header />
      <div className="flex-1 flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  )
}

export default App