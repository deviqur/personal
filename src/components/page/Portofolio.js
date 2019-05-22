import React from 'react';
import MyCard from '../MyCard';


class Portofolio extends React.Component{
    render(){
        return(
            <div>
                <section className="portfolio-area section-gap" id="portfolio">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="menu-content col-lg-8">
                        <div className="title text-center">
                          <h1 className="mb-10"> My Projects</h1>
                          <p>I doing my project with love</p>
                        </div>
                      </div>
                    </div>
                    <div className="filters-content">
                      <div className="row grid" style={{position: 'relative', height: '863.906px'}}>
                        <div className="single-portfolio col-sm-4 all vector" style={{position: 'absolute', left: '0%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/android.png" alt="android"/>
                            </div>
                            <a href="img/p1.jpg" className="img-pop-up" aria-label="2D Vinyl Design">	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                              </div>
                            </a>                              		
                          </div>
                          <div className="p-inner">
                            <h4>Dang Apps</h4>
                            <div className="cat">Mobile Apps</div>
                          </div>					                               
                        </div>
                        <div className="single-portfolio col-sm-4 all raster" style={{position: 'absolute', left: '33.2456%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/ux.png" alt="ux"/>
                            </div>
                            <a href="img/p2.jpg" className="img-pop-up" aria-label="Design">	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="" /></div>
                              </div>
                            </a>                              		
                          </div>
                          <div className="p-inner">
                            <h4>HR Accurate</h4>
                            <div className="cat">User experience and Inteface</div>
                          </div>					                               
                        </div>                            
                        <div className="single-portfolio col-sm-4 all ui" style={{position: 'absolute', left: '66.5789%', top: '0px'}}>
                          <div className="relative">
                            <div className="thumb">
                              <div className="overlay overlay-bg" />
                              <img className="image img-fluid" src="img/esabak.png" alt="esabak"/>
                            </div>
                            <a href="img/p3.jpg" className="img-pop-up" name="design" >	
                              <div className="middle">
                                <div className="text align-self-center d-flex"><img src="img/preview.png" alt="preview" /></div>
                              </div>
                            </a> 
                          </div>
                          <div className="p-inner">
                            <h4>Esabak</h4>
                            <div className="cat">Back End Developer Web</div>
                          </div>
                        </div>             
                         </div>
                    </div>
                  </div>
                </section>
            </div>
            
        )
    }
}

export default Portofolio;