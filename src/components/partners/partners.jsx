import './partners.css';
import React from "react";
import Slider from "react-slick";

export default function Partners () {
    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        centerMode: false,
        responsive: [ {
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        } ]
    };

    return (
        <>
            <section className="section">
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2>Our <em>Openings</em> </h2>

                                <section className="customer-logos slider">
                                    <Slider rtl { ...settings }>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" /></div>
                                        <div className="slide"><img alt="" src="https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg" /></div>
                                    </Slider>
                                </section>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}