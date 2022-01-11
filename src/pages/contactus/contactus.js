import React from "react"
import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/footer/footer"
import Home from '../../assets/logo/home.png'
import Email from '../../assets/logo/email.png'
import Instagram from '../../assets/logo/insta.png'
import Headphones from '../../assets/logo/headphones.png'

export default function Contact () {
    require( './styles.css' )
    return (
        <>
            <Navbar />
            <div className="container-fluid contact-us-header-bg">
                <h1 className="text-white w-100 text-center">Contact Us</h1>
                <div className="links w-100 text-center">
                    <Link className="text-white" to={ { pathname: "/" } }>Home</Link>
                    <span className="mx-2 text-white">/</span>
                    <Link className="text-white" to={ { pathname: "/contact" } }>Contact Us</Link>
                </div>
            </div>
            <section className="container-fluid sm-bp" style={ { background: '#f5f5f5' } }>
                <div className="sm-no-pad container contact-body">
                    <div className="left mx-2">
                        <h3 className="mb-3 head">Get In Touch</h3>
                        <p>At Multitasker we invite freelancers to take part in this innovative and
                            modern idea so that we can make it user friendly.</p>  <br />
                        <ul className="ps-0">
                            <li>
                                <div className="col-2 d-flex justify-content-center">
                                    <img className="img-fluid" src={ Home } alt="home" />
                                </div>
                                <div className="col-10 px-1">
                                    <h3>Locations</h3>
                                    <p>2nd fl Bermudiana Arcade, 27 Queen Street, Hamilton, HM11</p>
                                </div>
                            </li>
                            <li>
                                <div className="col-2 d-flex justify-content-center">
                                    <img className="img-fluid" src={ Email } alt="home" />
                                </div>
                                <div className="col-10 px-1">
                                    <h3>Email Address</h3>
                                    <p> info@multitaskerbda.com
                                        support@multitaskerbda.com
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="col-2 d-flex justify-content-center">
                                    <i id="WPLOGO" className="fa fa-whatsapp"></i>
                                </div>
                                <div className="col-10 px-1">
                                    <h3>WhatsApp Chat with us</h3>
                                    <p>&nbsp;</p>
                                    <p className="text-end">
                                        <span>
                                            <a href="https://wa.me/+14417350222">Click To Chat</a>
                                        </span>
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="col-2 d-flex justify-content-center">
                                    <img className="img-fluid" src={ Instagram } alt="home" />
                                </div>
                                <div className="col-10 px-1">
                                    <h3>Reach us on Instagram</h3>
                                    <p>&nbsp;</p>
                                    <p className="text-end mb-0">
                                        <span>
                                            <a href="https://www.instagram.com/multitaskerbda">Click To Chat</a>
                                        </span>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="right mx-3">
                        <div className="d-flex dropus">
                            <div className="">
                                <img className="img-fluid my-1" src={ Headphones } alt="" />
                            </div>
                            <div className="col-10 px-1">
                                <h3 className="head">Drop Us a Line</h3>
                                <p>
                                    If you have a query to ask or have questions in your mind, feel free to send us an email using this form. Our team will get back to you soon.
                                </p>
                            </div>
                        </div>

                        <br />

                        <div className="message-form">
                            <div className="input-box">
                                <div className="input-item p-2">
                                    <p>First Name</p>
                                    <input type="text" />
                                </div>
                                <div className="input-item p-2">
                                    <p>Last Name</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-item p-2">
                                    <p>Your email</p>
                                    <input type="text" />
                                </div>
                                <div className="input-item p-2">
                                    <p>Contact number</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="m-2">
                                <p className="px-1">Your message (optional)</p>
                                <textarea className="w-100"></textarea>
                            </div>

                            <button className="contact-BTN ms-2 my-2">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="gst-Container container">
                <div className="gst bg-white">
                    <div className="content-Container">
                        <h3>Get Started Today</h3>
                        <p>
                            To hire a tasker, register and post your task. To become a tasker, register and find a job today.
                        </p>
                    </div>
                    <div className="btn-Container">
                        <a href="/#mobile" className="contact-BTN ms-2 my-2 text-white">Get Started</a>
                    </div>
                </div>
            </div>

            <Footer />


        </>
    )

}