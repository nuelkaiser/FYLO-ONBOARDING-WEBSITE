import React from 'react';
import './Button.css'

const Button = ({words,  className}) => {
  return (
    <div className={className ? 'sign' : 'btn'}>
        {words}
    </div>
  )
}

export default Button