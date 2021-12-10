import './footer.css';
import React from 'react'


export default function Footer () {
    return (
        <>
            <footer id="contact-us">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <form id="contact" action="" method="post">
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <fieldset>
                                                    <input name="name" type="text" id="name" placeholder="Full Name" required=""
                                                        style={ { backgroundColor: 'rgba( 250, 250, 250, 0.3 )' } } />
                                                </fieldset>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                                <fieldset>
                                                    <input name="email" type="text" id="email" placeholder="E-Mail Address"
                                                        required="" style={ { backgroundColor: 'rgba( 250, 250, 250, 0.3 )' } } />
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <textarea name="message" rows="6" id="message" placeholder="Your Message"
                                                        required="" style={ { backgroundColor: 'rgba( 250, 250, 250, 0.3 )' } }></textarea>
                                                </fieldset>
                                            </div>
                                            <div className="col-lg-12">
                                                <fieldset>
                                                    <button type="submit" id="form-submit" className="main-button">Send Message
                                                        Now</button>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="right-content col-lg-6 col-md-12 col-sm-12">
                                <h2>More About <em>Multitasker</em></h2>
                                <p>Phasellus dapibus urna vel lacus accumsan, iaculis eleifend leo auctor.Duis at finibus odio.
                                    Vivamus ut pharetra arcu, in porta metus.Suspendisse blandit pulvinar ligula ut elementum.
                                    <br /><br />If you need this contact form to send email to your inbox, you may follow our <a
                                        rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact</a> page
                                    for more detail.</p>
                                <ul className="social">
                                    <li><a href="https://fb.com/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-rss"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i className="fa fa-dribbble"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="sub-footer">
                                <p>Copyright &copy; 2021 Multitasker.All Rights Reserved.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </footer >

        </>
    )

}