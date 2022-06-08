import React from 'react';
import './Testify.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const Testify = ({text, img, name, work}) => {
  return (
    <div className='test' data-aos="fade-down" data-aos-anchor-placement="top-center" data-aos-duration="1300">
        <p className='p'>
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