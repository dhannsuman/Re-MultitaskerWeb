import React from 'react'
import "./badges.css";

export default function Badges () {
    const options = [

        {
            num: 1,
            title: 'Children',
            icon: 'icon iconCodepen',
            fontcolor: 'number fontColor1',
            description: 'Show you have worked with kids and you are SCARS and CPR trained'
        }, {
            num: 2,
            title: 'Reliable',
            fontcolor: 'number fontColor2',

            icon: 'icon iconSocial',
            description: 'Take pride in your work, be conﬁdent in your skills, price fairly and accurately'
        }, {
            num: 3,
            title: 'Professional',
            fontcolor: 'number fontColor3',

            icon: 'icon iconAirplane',
            description: 'Uphold a reputation of quality by delivering a professional service.'
        },
    ]
    return (
        <>
            <section className="section" id="badges">
                <div className="container" style={ { borderTop: 'solid 2px green', paddingTop: '50px' } }>
                    <div className="row">
                        <div className="center-heading">
                            <h2 style={ { marginTop: '70px' } }>Multitasker And Its <em>Badges</em></h2>
                            <p class="mx-5">By following these principles and providing a quality experience, you’ll keep Posters coming back to the platform and creating more earning opportunities while earning badges</p>                        </div>
                        <main>
                            <ul class="infoGraphic">
                                { options.map( ( option ) => (
                                    <li>
                                        <div class="numberWrap">
                                            <div class={ option.fontcolor }>{ option.num }</div>
                                            <div class="coverWrap">
                                                <div class="numberCover"></div>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <div class={ option.icon }></div>
                                            <h2>{ option.title }</h2>
                                            <p>{ option.description }</p>
                                        </div>
                                    </li>
                                ) ) }

                                {/* <li>
                <div class="numberWrap">
                    <div class="number  fontColor4">4</div>
                    <div class="coverWrap">
                    <div class="numberCover"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="icon iconMap"></div>
                    <h2>Professional</h2>
                    <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
                </div>
                </li>
                <li>
                <div class="numberWrap">
                    <div class="number  fontColor5">5</div>
                    <div class="coverWrap">
                    <div class="numberCover"></div>
                    </div>
                </div>
                <div class="content">
                    <div class="icon iconBulb"></div>
                    <h2>Educate</h2>
                    <p>Sagittis, audantium sem eveniet lacus pede porttitor aenean.</p>
                </div>
                </li> */}
                            </ul>

                        </main>
                    </div>
                </div>
            </section>

        </>
    )

}