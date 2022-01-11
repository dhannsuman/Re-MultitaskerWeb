import React from 'react'
import Animation from '../../assets/lf30_editor_l68xqued.json'
import Lottie from 'react-lottie-player'
import './about-us.css';
export default function About () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <>
            <section className="section" id="about">
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2>Who are<em> We</em></h2>
                                <p>Multitasker is an online marketplace that connects busy everyday people who need
                                    to outsource any task or run any errand with trusted local Taskers who are ready to
                                    work and lend a helping hand. From weird and quirky to boring and mundane,
                                    simple to complicated tasks, we can help you complete your residential,
                                    commercial or personal needs. Need a tradesman, cleaning service, handyman,
                                    marketing and design, admin services, furniture assembled, trucker, photographer,
                                    organiser, or someone to run an errand? Multitasker is here for you. Our
                                    commitment to our Customers/Clients is to make sure they are happy when the
                                    task is completed. Our commitment to our Taskers is to make sure they are paid in
                                    full for their skills, services and passions.
                                </p>
                                <div className="about-quality">
                                    <div className="quality-1">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" width="50" />
                                        &nbsp;Safe & secure payments
                                    </div>
                                    <div className="quality-1">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" width="50" />
                                        &nbsp;Best for all budgets
                                    </div><div className="quality-1">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" width="50" />
                                        &nbsp;Find the right tasker for the job
                                    </div>
                                    <div className="quality-1">
                                        <img src="https://cdn-icons-png.flaticon.com/512/3699/3699516.png" width="50" />
                                        &nbsp;Communicate easily with live chat
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                {/* <div className="lottie">
                    <Lottie
                        loop
                        animationData={ Animation }
                        play
                        style={ { width: 450, height: 450 } }
                    />
                </div> */}

            </section>
        </>
    )

}