import React, { useState } from "react"
import { Link } from "react-router-dom"


const Navbar = () => {

    const [ navbar, setNavbar ] = useState( false )
    const [ know, setKnow ] = useState( false )

    return (
        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav navbar navbar-expand-md navbar-light fixed">
                            <a href="/" className="logo">
                                <img src="https://i.ibb.co/gZhsVNv/Multitasker-Logo-Final-Color.png" alt="Multitasker-Logo-Final-Color" height="75" />
                            </a>

                            <div className="collapse navbar-collapse" >
                                <ul className="nav navbar-nav ml-auto py-4 py-md-0">

                                    <li className="scroll-to-section"><a href="/#work" className="menu-item">Home</a></li>
                                    <li className="scroll-to-section"><a href="/#about" className="menu-item">About</a></li>
                                    <li className="scroll-to-section"><a href="/#testimonials" className="menu-item">Testimonials</a>
                                    </li>
                                    <li className="scroll-to-section"><p className="menu-item">
                                        <Link to="/category">Category</Link></p></li>


                                    <li className="scroll-to-section"><p className="menu-item">
                                        <Link to="/contact">Contact Us</Link></p>
                                    </li>
                                    <li className="menu-item">
                                        <a href="/#mobile" className="main-button-slider" style={ { paddingBottom: '30px', paddingTop: '0' } }>DOWNLOAD NOW</a>

                                    </li>

                                </ul>
                            </div>


                            <a className='menu-trigger' onClick={ () => setNavbar( !navbar ) }>
                                <span>Menu</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className={ navbar ? 'd-flex' : 'd-none' } id="bruteNav">
                <ul>
                    <li className="scroll-to-section"><a href="/#welcome" className="menu-item">Home</a></li>
                    <li className="scroll-to-section"><a href="/#about" className="menu-item">About</a></li>
                    <li className="scroll-to-section"><a href="/#testimonials" className="menu-item">Testimonials</a>
                    </li>
                    <li className="scroll-to-section">
                        <Link to="/category">Category</Link>
                    </li>


                    <div className={ know ? "d-block" : "d-none" }>
                        <li><a href="" className="menu-item">About Us</a></li>
                        <li><a href="" className="menu-item">Features</a></li>
                        <li><a href="" className="menu-item">FAQ's</a></li>
                        <li><a href="" className="menu-item">Blog</a></li>
                    </div>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </header>

    )
}

export default Navbar
