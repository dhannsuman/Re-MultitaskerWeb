import './footer.css';
import React from 'react'
import Logo from "../../assets/logo/Multitasker-Logo-Final-Black.png";

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
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/#about">About us</a></li>
                            <li><a href="/#work">Get started</a></li>
                        </ul>
                        <ul class="box">
                            <li class="link_name">Services</li>
                            <li><a href="/category">Graphic design</a></li>
                            <li><a href="/category">Handyman</a></li>
                            <li><a href="/category">Plumbing</a></li>
                            <li><a href="/category">Landscaper</a></li>
                            <li><a href="/category">And Many More</a></li>

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
                            <a href="/terms-and-conditions">Privacy policy</a>
                            <a href="/terms-and-conditions">Terms & condition</a>
                        </span>
                    </div>
                </div>
            </footer>

        </>
    )

}