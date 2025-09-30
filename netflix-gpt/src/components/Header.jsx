import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const userData = useSelector((store) => store.userSlice)
    if(userData){
        console.log("userData in header:", userData);
        
    }
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white opacity-75 w-full">
      <div className="text-2xl font-bold">Netflix GPT</div>
      <div>
        {userData?.isLoggedIn ? (
          <span className="mr-4">Welcome, {userData.userInfo?.email}!</span>
        ) : (
          <Link to="/login">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header