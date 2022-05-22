import React from 'react';
import './Testify.css';
import Profile1 from '../images/profile-1.jpg';

const Testify = () => {
  return (
    <div className='test'>
        <p>
            Fylo has increased our team productivity by an oder of magnitude.
            Since making the switch, our team has become a well-oiled collaborative machine.
        </p>

        <div className='test-container'>
            <img className='founder' src={Profile1} alt='profile' />
            <div>
                <h5>Safish Patel</h5>
                <small>Ceo of huddle</small>
            </div>
        </div>
    </div>
  )
}

export default Testify