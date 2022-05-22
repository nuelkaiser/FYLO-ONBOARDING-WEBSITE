import React from 'react';
import './Button.css'

const Button = ({words}) => {
  return (
    <div className='btn'>
        {words}
    </div>
  )
}

export default Button