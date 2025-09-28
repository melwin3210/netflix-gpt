import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black text-white opacity-75 w-full">
      <div className="text-2xl font-bold">Netflix GPT</div>
      <Link to="/login">
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </Link>
    </header>
  )
}

export default Header