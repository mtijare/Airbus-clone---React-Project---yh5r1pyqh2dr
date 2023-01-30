import React, { useContext } from 'react'
import logo from './AIR.PA_BIG.png'
import logo1 from './airplane.png'
import { Link } from 'react-router-dom'
import {MediumContext} from '../context/MediumContext'

const Navbar = () => {

  const { user , handleUserAuth } = useContext(MediumContext)

  return (
    
<nav className="navbar">
  <div className="navbar1">
    <div >
    <a href="/" className="flex items-center">
        <img src={logo} className="logo" alt="Flowbite Logo" />
        
    </a>
    <img src={logo1} className="logo1" alt="airplane Logo" />
    </div>
    <div className="logged" id="navbar-default">
      <ul className="log">
        
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