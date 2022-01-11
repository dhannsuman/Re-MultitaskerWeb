import Animation from '../../assets/flower.json'
import Lottie from 'react-lottie-player'
export default function Howitworks () {
    const mystyle = {
        width: "60px",
        height: "60px",
        top: "-30px",
        borderWidth: "4px !important",
        background: "linear-gradient(145deg, rgb(142, 198, 62) 0%, rgb(58,127,18) 100%)"
    }

    return (
        <>
            <div class="container my-5">
                <div className="lottie">
                    <Lottie
                        loop
                        animationData={ Animation }
                        play
                        style={ { width: 450, height: 450 } }
                    />
                </div>
                <section id="steps" style={ { backgroundColor: 'rgba( 250, 250, 250, 0.1 )', borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div class="text-center mb-5">
                        <div className="center-heading">
                            <h2>How It <em>Works?</em></h2>
                            <p>Multitasker helps you get more time back in your day!</p>
                        </div>        </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="bg-light position-relative px-3 my-5">
                                <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white" style={ mystyle }>
                                    1
                                </div>
                                <div class="px-3 text-center pb-3">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1999/1999310.png" height="100" />
                                    <h4>Post your Task for free</h4>
                                    <p class="font-weight-light my-3">Post your Task for free on our website and connect with people.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="bg-light position-relative px-3 my-5">
                                <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                                    style={ mystyle } >
                                    2
                                </div>
                                <div class="px-3 text-center pb-3">
                                    <img src="https://i.pinimg.com/736x/58/68/e8/5868e8bd79ace22ad87cae935d18330a.jpg" height="130" />

                                    <h4>Review offers</h4>
                                    <p class="font-weight-light my-3">Review offers and choose the best available offer that suit your needs.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="bg-light position-relative px-3 my-5">
                                <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                                    style={ mystyle }> 3
                                </div>
                                <div class="px-3 text-center pb-3">
                                    <img src="https://www.pngall.com/wp-content/uploads/8/Task-List-PNG-Free-Image.png" height="100" />
                                    <h4>Get task done by experts</h4>
                                    <p class="font-weight-light my-3">Get task done by experts. Making everyday life made Easier</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )

}
