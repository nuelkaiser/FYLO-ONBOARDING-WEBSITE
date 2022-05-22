import React from 'react';
import Logo from '../images/Logo'
import './Nav.css'

const Nav = () => {
  return (
    <div className='logo-container'>
        <Logo/>

        <ul>
            <li>
                Features
            </li>

            <li>Team</li>

            <li>
                Signin
            </li>
        </ul>
    </div>
  )
}

export default Nav