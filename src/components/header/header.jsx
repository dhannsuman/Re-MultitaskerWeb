import React from 'react'
import './header.css';
import Lottie from 'react-lottie-player'
import Navbar from '../Navbar/Navbar'
import Animation from '../../assets/man.json'

export default function Header () {

    return (
        <>

            <Navbar />

            <div className="welcome-area mb-5" id="welcome">

                <div className="header-text">
                    <div className="container">
                        {/* <Lottie animationData="https://assets8.lottiefiles.com/packages/lf20_phe1drh8.json" background="transparent" speed="1" loop controls autoplay /> */ }
                        <div className="row">
                            <div className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                                <h1>Get Your Job <em>DONE</em> With Multitasker</h1>
                                <p>Multitasker helps you get more time back in your day! You
                                    can book tasks from a variety of categories to best suit
                                    your needs.</p>
                                <a href="#about" className="main-button-slider">Get To Know Us</a>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}