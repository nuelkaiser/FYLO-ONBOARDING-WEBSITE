import React from 'react';
import './LandingPage.css';
import Nav from '../Reuseable/Nav';
import Button from '../Reuseable/Button';
import Intro from '../images/illustration-intro.png';
import Benefits from '../Reuseable/Benefits';
import Access from '../images/AccessEverywhere.svg';
import File from '../images/File.svg';
import Collab from '../images/Collaboration.svg';
import Secure from '../images/Security.svg';
import Arrow from '../images/icon-arrow.svg';
import Productive from '../images/illustration-stay-productive.png';
import Testify from '../Reuseable/Testify';


const LandingPages = () => {
    return (
        <div className='landing-container'>
            <div className='inner-container'>
                <Nav />
                <div className='intro-section'>
                    <img className='intro-img' src={Intro} alt='illustraton intro' />

                    <div className='intro-inner'>
                        <h1>
                            All your files in one secure location, accessible anywhere.
                        </h1>

                        <p>
                            Fylo stores all your important files in one secure location.
                            Access them whereever you need, share and collaborate with friends, family and co-workers.
                        </p>

                        <Button words={'Get Started'} />
                    </div>
                </div>

                <div className='bck'>
                    <div className='benefits-container'>
                        <Benefits
                            src={Access}
                            title={`Access your files anywhere`}
                            words={`  The ability to use a smartphone, tablet or computer to acceess your account
                     means your files follow you everywhere.`}
                        />

                        <Benefits
                            src={Secure}
                            title={`Security you can trust`}
                            words={`2-factor authentication and user controlled encryption are just a couple of
                     security features we allow to help secure your files.`}
                        />

                        <Benefits
                            src={Collab}
                            title={`Real-time Collaboration`}
                            words={`Securely share files and folders with friends, family and colleagues for live collaboration.
                     No email attachments required.`}
                        />
                        <Benefits
                            src={File}
                            title={`Store any type of file`}
                            words={`Whether you are sharing holiday photos or work documents.
                     Fylo has you covered allowing for all the file types to be securely stored and shared.`}
                        />
                    </div>

                    <div className='productive-container'>
                        <img src={Productive} alt='productive ilustration' />
                        <div>
                            <h1>
                                Stay productive, whereever you are
                            </h1>

                            <p>
                                Never let location be an issue when accessing your files.
                                Fylo has you covered form all your file storage needs.
                            </p>

                            <p>
                                Securely share files and folders with friends, family and colleagues for live collaboration.
                                No email attachments required.
                            </p>

                            <span>
                                See how Fylo works
                                <img src={Arrow} alt='Arrow'/>
                            </span>
                        </div>
                    </div>

                    <div className='testimonial-container'>
                        <Testify />
                        <Testify />
                        <Testify />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LandingPages