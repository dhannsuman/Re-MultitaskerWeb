import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import './services.css'
import man1 from "../../assets/man1.json"
import man3 from "../../assets/person.json"

export default function Services () {
    const [ selected, setSelected ] = useState( 0 )
    return (
        <>
            <section className="section" id="services">
                <div className="container" style={ { backgroundColor: 'rgba( 250, 250, 250, 0.1 )', borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="center-heading">
                        <h2>How Can We <em>Help?</em></h2>
                    </div>
                    <div class="center-heading" id="toggle">

                        <a class="main-button-slider" onClick={ () => setSelected( 0 ) }>
                            Hire a Tasker
                        </a>
                        <a class="main-button-slider" onClick={ () => setSelected( 1 ) }>
                            Become a Tasker
                        </a>
                    </div>
                    <div className="row ">

                        { ( selected === 0 ) && <div id="left">
                            <div className="hemlo">
                                <div className="services-left-art">
                                    <Lottie play loop animationData={ man1 } />
                                </div>
                                <div className="services-left-text">
                                    {/* <h2><em>Hire a Tasker</em></h2> */ }
                                    <ul>
                                        <li>
                                            Post your Task for free

                                        </li>
                                        <li>
                                            Hire experts from anywhere
                                        </li> <li>
                                            Pay as per your budget
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div> }
                        { ( selected === 1 ) && <div id="right">
                            <div className="hemlo">

                                <div className="services-right-text">
                                    {/* <h2><em>Become a Tasker</em></h2> */ }
                                    <ul>
                                        <li>

                                            Find the task that you are happy to work

                                        </li>
                                        <li>
                                            Get paid for the task you love doing
                                        </li> <li>
                                            Have full control of your own schedule

                                        </li>
                                    </ul>

                                </div> <div className="services-left-art player">
                                    <Lottie play loop animationData={ man3 } width="300" height="400" />
                                </div>

                            </div>
                        </div> }
                    </div>
                </div>
            </section>

        </>
    )

}