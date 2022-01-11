import './testimonials.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

export default function Testimonials () {
    const values = [
        {
            img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            star: 4,
            name: "John Doe",
            title: "CEO, ABC Company",
            comment: "looks like a great company, I am very happy with the service"
        },
        {
            img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            star: 5,
            name: "John Doe",
            title: "CEO, ABC Company",
            comment: "looks like a great company, I am very happy with the service"
        }, {
            img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            star: 3,
            name: "John Doe",
            title: "CEO, ABC Company",
            comment: "looks like a great company, I am very happy with the service"
        }, {
            img: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
            star: 4,
            name: "John Doe",
            title: "CEO, ABC Company",
            comment: "looks like a great company, I am very happy with the service"
        }
    ];

    const options = {
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        }
    }

    return (
        <>
            <section className="section" id="testimonials">
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2>What They Think <em>About Us</em></h2>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                            <OwlCarousel className="owl-carousel owl-theme" loop margin={ 20 } nav pagination { ...options } >
                                { values.map( ( value ) => (
                                    <div className="item service-item">
                                        <div className="author">
                                            <i><img src={ value.img } className="rounded-circle" width="75" alt="Author One" /></i>
                                        </div>
                                        <div className="testimonial-content">
                                            <ul className="stars">
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                            </ul>
                                            <h4>{ value.name }</h4>
                                            <p>“{ value.comment }”</p>
                                            <span>{ value.title }</span>
                                        </div>
                                    </div>
                                ) ) }

                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}