import React from 'react';

class Contact extends React.Component{
    render(){
        return(
            <div>
             <section className="contact-page-area section-gap">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="menu-content pb-70 col-lg-8">
                    <div className="title text-center">
                      <h1 className="mb-10">Contact Us</h1>
                    </div>
                  </div>
                </div>
                  <div className="row">
                    <div className="col-lg-4 d-flex flex-column address-wrap">
                      <div className="single-contact-address d-flex flex-row">
                        <div className="icon">
                          <span className="lnr lnr-home" />
                        </div>
                        <div className="contact-details">
                          <h5>Karang Malang, Yogyakarta</h5>
                          <p>
                            131138 Daerah Isimewa Yogyakarta
                          </p>
                        </div>
                      </div>
                      <div className="single-contact-address d-flex flex-row">
                        <div className="icon">
                          <span className="lnr lnr-phone-handset" />
                        </div>
                        <div className="contact-details">
                          <h5>089516822164</h5>
                          <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                      </div>
                      <div className="single-contact-address d-flex flex-row">
                        <div className="icon">
                          <span className="lnr lnr-envelope" />
                        </div>
                        <div className="contact-details">
                          <h5>Contact to deviqurnia10@gmail.com</h5>
                          <p>Send us your query anytime!</p>
                        </div>
                      </div>														
                    </div>
                    <div className="col-lg-8">
                      <form className="form-area contact-form text-right" id="myForm" action="mail.php" method="post">
                        <div className="row">	
                          <div className="col-lg-6 form-group">
                            <input label="name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" className="common-input mb-20 form-control" required="required" type="text" />
                            <input label="email" name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" className="common-input mb-20 form-control" required="required" type="email" />
                            <input label="subject" name="subject" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" className="common-input mb-20 form-control" required="required" type="text" />
                          </div>
                          <div className="col-lg-6 form-group">
                            <textarea className="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required="required" defaultValue={""} />				
                          </div>
                          <div className="col-lg-12">
                            <div className="alert-msg" style={{textAlign: 'left'}} />
                            <button className="genric-btn primary" style={{float: 'right'}} aria-label="submit">Send Message</button>											
                          </div>
                        </div>
                      </form>	
                    </div>
                  </div>
                </div>	
              </section>
            </div>
        )
    }
}

export default Contact;