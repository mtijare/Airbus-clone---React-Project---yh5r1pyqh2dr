import React, { useContext } from 'react'
import logo from './AIR.PA_BIG.png'
import { Link } from 'react-router-dom'
import {MediumContext} from '../context/MediumContext'

const Navbar = () => {

  const { user , handleUserAuth } = useContext(MediumContext)

  return (
    
<nav className="navbar">
  <div className="navbar1">
    <a href="/" className="flex items-center">
        <img src={logo} className="logo" alt="Flowbite Logo" />
        
    </a>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
        <li>
         { user ?
          <img
            src={user.photoURL}
            alt='logo'
            width={30}
            height={30}
            className='rounded'
          /> 
          :
         <button onClick={handleUserAuth} className="login"
          >Login</button>
         }
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar