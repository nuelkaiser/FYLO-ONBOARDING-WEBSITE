import React from 'react';
import './Benefits.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();




const Benefits = ({src, title, words}) => {


  return (
    <div className='benefits'  data-aos="zoom-in">
        <img src={src} alt='illustration'/>
        <h2>{title}</h2>
        <p>
          {words}
        </p>
    </div>
  )
}

export default Benefits