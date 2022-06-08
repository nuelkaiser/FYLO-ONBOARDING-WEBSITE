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
import Arrow from '../images/Arrow.svg';
import Productive from '../images/illustration-stay-productive.png';
import Testify from '../Reuseable/Testify';
import Footer from '../Reuseable/Footer';
import Profile1 from '../images/profile-1.jpg';
import Profile2 from '../images/profile-2.jpg';
import Profile3 from '../images/profile-3.jpg';
import Quote from '../images/bg-quotes.png'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();


const LandingPages = () => {

    let [checker, SetChecker] = useState('');
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const email = document.getElementById("check");


    function regis(e) {
        e.preventDefault();
        console.log(checker)

        if (checker.match(mailformat)) {
            email.style.display = 'none'
        } else {
            email.style.display = 'flex'
        }

    }



    return (
        <div className='landing-container'>
            <div className='inner-container'>
                <Nav />
                <div className='intro-section'>
                    <img className='intro-img' src={Intro} alt='illustraton intro' data-aos="fade-up" data-aos-duration="1300"/>

                    <div className='intro-inner' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1300">
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
                        <img className='prodo' src={Productive} alt='productive ilustration' data-aos="flip-right" data-aos-duration="1300"/>
                        <div data-aos="flip-left" data-aos-duration="1300">
                            <h1>
                                Stay productive, whereever you are
                            </h1>

                            <p>
                                Never let location be an issue when accessing your files.
                                Fylo has you covered for all your file storage needs.
                            </p>

                            <p>
                                Securely share files and folders with friends, family and colleagues for live collaboration.
                                No email attachments required.
                            </p>

                            <div className='arr'>
                                See how Fylo works
                               <img className='arr-1' src={Arrow}  alt='arr'/>
                            </div>
                        </div>
                    </div>

                    <div className='testimonial-container'>
                        <img className='quotes' src={Quote} alt='bg' />
                        <Testify
                            text={` Fylo has increased our team productivity by an order of magnitude.
                         Since making the switch, our team has become a well-oiled collaborative machine.`}
                            img={Profile1}
                            name={`Safish Patel`}
                            work={`Founder & CEO, Huddle`} />

                        <Testify
                            text={` Fylo has increased our team productivity by an order of magnitude.
                         Since making the switch, our team has become a well-oiled collaborative machine.`}
                            img={Profile2}
                            name={`Bruce Mckenzie`}
                            work={`Founder & CEO, Huddle`} />

                        <Testify
                            text={` Fylo has increased our team productivity by an order of magnitude.
                         Since making the switch, our team has become a well-oiled collaborative machine.`}
                            img={Profile3}
                            name={`Iva Boyd`}
                            work={`Founder & CEO, Huddle`} />
                    </div>


                    <div className='footer-container'>
                        <div className='early'>
                            <h1>
                                Get early access today
                            </h1>

                            <p>
                                It only takes a minute to sign up and our free starter tier is extremely generous.
                                If you have any questions, our support team will happily help you.
                            </p>

                            <div>
                                <form className='signup-container' onSubmit={regis} >
                                    <div className='input-container'>
                                        <input className='signup-input' placeholder='emailexample.com' value={checker} onChange={(e) => { SetChecker(e.target.value) }} />
                                    </div>
                                    <Button className={true} words={`Get Started For Free`} onChecker={regis} />
                                </form>

                                <small id='check' className='checker'>
                                    Please Enter vald email address
                                </small>
                            </div>
                        </div>


                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPages