import React from 'react'

class Services extends React.Component{
    render(){
        return(
            <div>
                <section className="services-area section-gap">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                        <div className="menu-content  col-lg-7">
                            <div className="title text-center">
                            <h1 className="mb-10">My Services</h1>
                            <p>Here are my various services for you</p>
                            </div>
                        </div>
                        </div>						
                        <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-pie-chart" />
                            <a href="#"><h4>Web Design</h4></a>
                            <p>
                                I can make beautiful web desain for you. I use html and some framework like Bootstarp, Materiaize, Ant design.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-laptop-phone" />
                            <a href="#"><h4>Back End Web Development</h4></a>
                            <p>
                                I can make some function of fitur in your website work with PHP and some framework like laravel. Another i can make JSON with JWT token.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-camera" />
                            <a href="#"><h4>Photography</h4></a>
                            <p>
                                you need a pict look beautiful? i can do it.
                            </p>
                            </div>	
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-picture" />
                            <a href="#"><h4>Corel Draw</h4></a>
                            <p>
                                i can create logo design, editing foto etc.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-tablet" />
                            <a href="#"><h4>Apps Interface Mobile</h4></a>
                            <p>
                                i can make your app mobile more beautiful with sweet design use xml.
                            </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                            <span className="lnr lnr-rocket" />
                            <a href="#"><h4>UX and UI</h4></a>
                            <p>
                                You’ve need beautiful design for your application? i can do it. I used Figma, Corel and Photoshop.
                            </p>
                            </div>				
                        </div>														
                        </div>
                    </div>	
                </section>
                <section className="facts-area section-gap" id="facts-area">
                <div className="container">				
                    <div className="row">
                    <div className="col-lg-3 col-md-6 single-fact">
                        <h1 className="counter">2536</h1>
                        <p>Projects Completed</p>
                    </div>
                    <div className="col-lg-3 col-md-6 single-fact">
                        <h1 className="counter">6784</h1>
                        <p>Happy Clients</p>
                    </div>
                    <div className="col-lg-3 col-md-6 single-fact">
                        <h1 className="counter">2239</h1>
                        <p>Humble</p>
                    </div>	
                    <div className="col-lg-3 col-md-6 single-fact">
                        <h1 className="counter">434</h1>
                        <p>Real Professionals</p>
                    </div>												
                    </div>
                </div>	
                </section>
            </div>
        )
    }
}

export default Services;