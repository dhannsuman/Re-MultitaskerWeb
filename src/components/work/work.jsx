import './work.css';
import React from 'react';
import { Link } from "react-router-dom"


export default function Work () {
    return (
        <>

            <section className="section" id="work" >
                <div className="container" id="brute" style={ { backgroundColor: 'rgba( 250, 250, 250, 0.1 )', borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="center-heading">
                        <h2>What We <em>Do?</em></h2>
                        <p>A network of talented people making
                            everyday life easier</p></div>

                </div>

                <div class="circles-gallery">
                    <img src="https://cdn-icons-png.flaticon.com/512/3899/3899147.png" alt="Some Tech Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1949/1949291.png" alt="Some Tech Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995491.png" alt="Some Tech Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1518/1518965.png" alt="Some Architecture Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" alt="Some Architecture Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/3400/3400272.png" alt="Some Architecture Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/2806/2806972.png" alt="Some Architecture Picture" />
                    <img src="https://cdn-icons-png.flaticon.com/512/1320/1320477.png" alt="Some Architecture Picture" />
                </div>
                <div className="circles-gallery">
                    <h6>Home cleaning</h6>
                    <h6>Trucking</h6>
                    <h6>Handyman</h6>
                    <h6>Landscaper</h6>
                    <h6>Plumbing</h6>
                    <h6>Lifestyle</h6>
                    <h6>Graphic</h6>
                    <h6>Security</h6>

                </div>
                <a href="/category" className="arrow">LEARN MORE <i class="fas fa-arrow-right"></i></a>

                <div className="brute-css">
                    <img src="https://cdn-icons-png.flaticon.com/512/3899/3899147.png" alt="Some Tech Picture" />
                    <p>Cleaning</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1949/1949291.png" alt="Some Tech Picture" />
                    <p>Trucking</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995491.png" alt="Some Tech Picture" />
                    <p>Handyman</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1518/1518965.png" alt="Some Architecture Picture" />
                    <p>Landscaper</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1995/1995507.png" alt="Some Architecture Picture" />
                    <p>Plumbing</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/3400/3400272.png" alt="Some Architecture Picture" />
                    <p>Lifestyle</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/2806/2806972.png" alt="Some Architecture Picture" />
                    <p>Graphic</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/1320/1320477.png" alt="Some Architecture Picture" />
                    <p>Security</p>
                    <Link to="/category" className="arrow-btn">LEARN MORE <i class="fas fa-arrow-right"></i></Link>
                </div>

            </section>
        </>
    )

}