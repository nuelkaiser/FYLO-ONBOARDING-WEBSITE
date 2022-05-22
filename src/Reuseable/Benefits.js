import React from 'react';
import './Benefits.css';



const Benefits = ({src, title, words}) => {


  return (
    <div className='benefits'>
        <img src={src} alt='illustration'/>
        <h2>{title}</h2>
        <p>
          {words}
        </p>
    </div>
  )
}

export default Benefits