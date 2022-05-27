import React from 'react';
import './Testify.css';


const Testify = ({text, img, name, work}) => {
  return (
    <div className='test'>
        <p>
           {text}
        </p>

        <div className='test-container'>
            <img className='founder' src={img} alt='profile' />
            <div>
                <h5>{name}</h5>
                <small>{work}</small>
            </div>
        </div>
    </div>
  )
}

export default Testify