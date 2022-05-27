import React from 'react';
import Logo from '../images/Logo';
import './Footer.css';
import Location from '../images/icon-location.svg';
import Phone from '../images/icon-phone.svg';
import Email from '../images/icon-email.svg';
import Facebook from '../images/Facebook';
import Twitter from '../images/Twitter';
import Instagram from '../images/Instagram';

const Footer = () => {
    return (
        <div className='footer'>
            <Logo />

            <div className='inner-footer'>
                <div className='location'>
                    <img className='locate' src={Location} alt='Location' />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua
                    </p>
                </div>

                <div className='contact'>
                    <span>
                        <img src={Phone} alt='Phone' />
                        <p>+1-543-123-4567</p>
                    </span>

                    <span>
                        <img src={Email} alt='Email' />
                        <p>example@fylo.com</p>
                    </span>

                </div>

                <div className='info'>
                    <span>
                        About Us
                    </span>

                    <span>
                        Jobs
                    </span>

                    <span>
                        Press
                    </span>

                    <span>
                        Blog
                    </span>
                </div>

                <div className='reach'>
                    <span>
                        Contact Us
                    </span>

                    <span>
                        Terms
                    </span>

                    <span>
                        Privacy
                    </span>
                </div>

                <div className='media'>
                    <div className='media-container'>
                        <Facebook />
                    </div>

                    <div  className='media-container'>
                        <Twitter />
                    </div>

                    <div  className='media-container'>
                        <Instagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer