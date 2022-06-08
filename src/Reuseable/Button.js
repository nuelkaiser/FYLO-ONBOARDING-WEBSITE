import React from 'react';
import './Button.css'

const Button = ({words,  className, onChecker}) => {
  return (
    <div onClick={onChecker} className={className ? 'sign' : 'btn'}>
        {words}
    </div>
  )
}

export default Button