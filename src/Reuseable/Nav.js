import React from 'react';
import Logo from '../images/Logo.svg'
import './Nav.css'

const Nav = () => {
  return (
    <div className='logo-container'>
      <img className='logo' src={Logo} alt='Logo' />

        <ul>
            <li>
                Features
            </li>

            <li>Team</li>

            <li>
                Sign in
            </li>
        </ul>
    </div>
  )
}

export default Nav