import React from 'react'
import {NavLink} from 'react-router-dom';


class Home extends React.Component{
    render(){
        return(
            <div>
                <section className="intro-section">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-1 col-lg-2" />
                      <div className="col-md-10 col-lg-8">
                        <div className="intro">
                          <div className="profile-img"><img src="img/iamm.JPG" alt="profil"/></div>
                          <h2><b>Devi Qurnia Sari</b></h2>
                          <h4 className="font-yellow">Back End Developer</h4>
                          <ul className="information margin-tb-30">
                            <li><b>BORN : </b>December 10, 1998</li>
                            <li><b>EMAIL : </b>deviqurnia98@mail.ugm.ac.id</li>
                            <li><b>MARITAL STATUS : </b>Single</li>
                          </ul>
                          <ul className="social-icons">
                            <li><a href="#" aria-label="wa"><i className="fa fa-whatsapp" /></a></li>
                            <li><a href="#" aria-label="facebook"><i className="fa fa-facebook" /></a></li>
                            <li><a href="#" aria-label="ig"><i className="fa fa-instagram" /></a></li>
                            <li><a href="#" aria-label="twitter"><i className="fa fa-twitter" /></a></li>
                          </ul>
                        </div>{/* intro */}
                      </div>{/* col-sm-8 */}
                      
                    </div>{/* row */}
                    
                  </div>{/* container */}
                </section>
                     <section class="price-area section-gap">
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="menu-content pb-70 col-lg-8">
                                <div class="title text-center">
                                </div>
                            </div>
                        </div>					
                        
                    </div>	
                </section>


            </div>
        )
    }
}

export default Home;