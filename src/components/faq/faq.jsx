import './faq.css'
import React from 'react'

export default function FAQ () {
    const icon = "https://cdn-icons-png.flaticon.com/512/137/137621.png"
    const options = [
        {
            question: "Why Multitasker?",
            answers: "Multitasker helps you get more time back in your day! You can book tasks from a variety of categories to best suit your needs.If you don’t see a category please post your task or errand so our independent taskers can help."
        },
        {

        },
        {

        },
    ]
    return (
        <>
            <section className="section" id="faq" style={ { marginTop: "50px" } }>
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>

                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="center-heading">
                                <h2><em>FAQs </em></h2>
                                <p>
                                    <div className="container demo faq-box">


                                        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                            <div className="panel panel-default">
                                                <div className="panel-heading shadow  mb-2 bg-white rounded " role="tab" id="headingOne">
                                                    <h4 className="panel-title ">
                                                        <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <img src="https://cdn-icons-png.flaticon.com/512/137/137621.png" width="30" class="faq-icon" />

                                                            <i className="more-less glyphicon glyphicon-plus"></i>
                                                            <h6>Why <em>Multitasker?</em>
                                                            </h6>
                                                        </a>
                                                    </h4>
                                                </div>
                                                <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                    <div className="panel-body">
                                                        Multitasker helps you get more time back in your day! You can book tasks from a
                                                        variety of categories to best suit your needs. If you don’t see a category, please
                                                        post your task or errand so our independent taskers can help.     </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading shadow  mb-2 bg-white rounded " role="tab" id="headingTwo">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/137/137621.png" width="30" class="faq-icon" />
                                                        <i className="more-less glyphicon glyphicon-plus"></i>
                                                        <h6>Why We Need Your <em>Credit Card</em></h6>

                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                <div className="panel-body">
                                                    Multitasker is a cashless platform, so hiring a Tasker requires a valid credit card. Do
                                                    not worry - once a task has been confirmed payment is securely held on the
                                                    multitasker platform and only released to the Tasker after your task is complete.</div>
                                            </div>
                                        </div>

                                        <div className="panel panel-default">
                                            <div className="panel-heading shadow  mb-2 bg-white rounded " role="tab" id="headingThree">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/137/137621.png" width="30" class="faq-icon" />
                                                        <i className="more-less glyphicon glyphicon-plus"></i>
                                                        <h6>What do you need to do after booking a <em>task?</em></h6>

                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                <div className="panel-body">
                                                    After booking your Tasker, be sure to send them a message through your task chat,
                                                    to discuss your task in detail, ask any questions you might have, and make sure
                                                    that you and your Tasker are on the same page. Confirm the date and time the task
                                                    will take place so your Tasker can schedule your task. Multitasker helps you get
                                                    more time back in your day! You can book tasks from a variety of categories to best
                                                    suit your needs. If you don’t see a category please post your task or errand so our
                                                    independent Taskers can help.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel panel-default">
                                            <div className="panel-heading shadow  mb-2 bg-white rounded " role="tab" id="headingFour">
                                                <h4 className="panel-title">
                                                    <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                        <img src="https://cdn-icons-png.flaticon.com/512/137/137621.png" width="30" class="faq-icon" />
                                                        <i className="more-less glyphicon glyphicon-plus"></i>
                                                        <h6>Do I have to be home when my task is <em>completed?</em></h6>

                                                    </a>
                                                </h4>
                                            </div>
                                            <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                <div className="panel-body">
                                                    You’re responsible for overseeing and directing the work of your Tasker. Multitasker does not monitor, direct, or oversee the work of Taskers, as they are independent contractors hired by Clients. If you won't be home, be sure to give your Tasker any instructions they may need to correctly complete your task. If your Tasker needs more information from you they will contact you through the chat.                                                </div>
                                            </div>
                                        </div>


                                    </div>




                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section >
        </>
    )

}