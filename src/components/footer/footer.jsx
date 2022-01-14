import './footer.css';
import React from 'react'
import Logo from "../../assets/logo/Multitasker-Logo-Final-Black.png";
import { Link } from "react-router-dom"

export default function Footer () {
    return (
        <>
            <footer>
                <div class="content">
                    <div class="top">
                        <div class="logo-details">
                            <img src={ Logo } alt="logo" width="150" />
                            {/* <span class="logo_name">Multitasker</span> */ }
                        </div>
                        <div class="media-icons">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                    <div class="link-boxes">
                        <ul class="box">
                            <li class="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/#about">About us</Link></li>
                            <li><Link to="/#work">Get started</Link></li>
                        </ul>
                        <ul class="box">
                            <li class="link_name">Services</li>
                            <li><Link to="/category">Graphic design</Link></li>
                            <li><Link to="/category">Handyman</Link></li>
                            <li><Link to="/category">Plumbing</Link></li>
                            <li><Link to="/category">Landscaper</Link></li>
                            <li><Link to="/category">And Many More</Link></li>

                        </ul>
                        <div className="center-heading col-lg-6" >
                            <h2>Learn More About <em>Multitasker</em></h2>
                            <p class="">Multitasker helps you get more time back in your day! You can book tasks from a variety of categories to best suit your needs. If you don’t see a category please post your task or errand so our independent taskers can help.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="bottom-details">
                    <div class="bottom_text">
                        <span class="copyright_text">Copyright © 2021 <a href="#">Multitasker.</a>All rights reserved</span>
                        <span class="policy_terms">
                            <Link to="/terms-and-conditions">Privacy policy</Link>
                            <Link to="/terms-and-conditions">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )

}