import React from 'react';
import {NavLink} from 'react-router-dom';

class MyAppBar extends React.Component{
  render(){
      return(
          <div>
          <footer className="footer-area section-gap">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                          <h4>About Me</h4>
                          <p>
                            I am Devi Qurnia Sari
                          </p>
                          <p className="footer-text">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright © All rights reserved is made with <i className="fa fa-heart-o" aria-hidden="true" /> by Devi
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                          <h4>Newsletter</h4>
                          <p>Stay updated with our latest trends</p>
                          <div className id="mc_embed_signup">
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                        <div className="single-footer-widget">
                          <h4>Follow Me</h4>
                          <p>Let us be social</p>
                          <div className="footer-social d-flex align-items-center">
                            <a href="#" aria-label="facebook"><i className="fa fa-facebook" /></a>
                            <a href="#" aria-label="twitter"><i className="fa fa-twitter" /></a>
                            <a href="#" aria-label="dribble"><i className="fa fa-dribbble" /></a>
                            <a href="#" aria-label="behance"><i className="fa fa-behance" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>

          </div>
      )
  }
}

export default MyAppBar;