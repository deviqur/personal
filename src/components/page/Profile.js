import React, {Component} from 'react';

class Profile extends React.Component{
    render(){
        return(
            <div> 
               <section className="home-about-area section-gap">
                <div className="container">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6 col-md-6 home-about-left">
                      <img className="img-fluid" src="img/me.png" alt="drawing" />
                    </div>
                    <div className="col-lg-5 col-md-6 home-about-right">
                      <h6>About Me</h6>
                      <h1 className="text-uppercase">Personal Details</h1>
                      <p>
                      I am Devi Qurnia Sari, i was born in Lampung, 10 December 1998. Now i am student of Computer Science and Information System in Universitas Gadjah Mada science 2017 . I come from Tangerang. I studied at SDN Poris Plawad 3, SMPN 7 Tangerang, and SMKN 3 Tangerang.
                      </p>
                      <a href="#" className="primary-btn text-uppercase" name="view of detail">View Full Details</a>
                    </div>
                    <div className="col-lg-12 pt-60"> 
                      <p>
                      I am an only child from a simple family. I undertook a study in the field of technology starting from my fondness for technology during my vocational school. I liked the world back end being supervised during college, the language I used at that time was PHP native.
                      </p>
                      <h4 className="pt-30">Tools Expertness</h4>	
                    </div>
                  </div>
                  <div className="row skillbar-wraps">					
                    <div className="col-lg-6 skill-left">
                      <div className="single-skill">
                        <p>
                          After Effects 85%
                        </p>
                        <div className="skill sb_progress" data-width={85} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '85%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                      <div className="single-skill">
                        <p>
                          Photoshop 90%
                        </p>
                        <div className="skill sb_progress" data-width={90} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '90%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                      <div className="single-skill">
                        <p>
                          Illustrator 70%
                        </p>
                        <div className="skill sb_progress" data-width={70} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '70%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>																				
                    </div>
                    <div className="col-lg-6 skill-right">
                      <div className="single-skill">
                        <p>
                          Sublime 95%
                        </p>
                        <div className="skill sb_progress" data-width={95} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '95%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>								
                      <div className="single-skill">
                        <p>
                          Sketch 85%
                        </p>
                        <div className="skill sb_progress" data-width={85} style={{position: 'relative', width: '100%', backgroundColor: 'rgb(221, 221, 221)', height: '30px'}}><div className="sb_bar" style={{position: 'absolute', width: '85%', height: '100%', backgroundColor: 'rgb(51, 122, 183)'}}><div className="sb_label" style={{paddingLeft: '5px', lineHeight: '30px', color: 'rgb(255, 255, 255)'}} /></div></div>
                      </div>
                    </div>
                  </div>
                </div>	
              </section>
              <section className="education-section section">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-4">
                      <div className="heading">
                        <h3><b>Education</b></h3>
                        <h6 className="font-lite-black"><b>ACADEMIC CAREER</b></h6>
                      </div>
                    </div>{/* col-sm-4 */}
                    <div className="col-sm-8">
                      <div className="education-wrapper">
                        <div className="education margin-b-50">
                          <h4><b> DIPLOMA 3</b></h4>
                          <h5 className="font-yellow"><b>UNIVERSITAS GADJAH MADA - COMPUTER SCIENCE AND INFORMATION SYSTEM</b></h5>
                          <h6 className="font-lite-black margin-t-10">2017 - PRESENT</h6>
                          <p className="margin-tb-30">I was studying in Universitas Gadjah Mada in Faculty of Vocation,Computer Science and Information systems and Information System, department d3. On the process of this study i have a lot of learning about technology the speciality of information technology </p>
                        </div>{/* education */}
                        <div className="education margin-b-50">
                          <h4><b>VOCATIONAL HIGH SCHOOL</b></h4>
                          <h5 className="font-yellow"><b>SMKN 3 TANGERANG</b></h5>
                          <h6 className="font-lite-black margin-t-10">2014 - 2017</h6>
                          <p className="margin-tb-30">
                            I was study in SMKN 2 Tangerang years ago, I majored in computer and network engineering.
                            </p>
                        </div>{/* education */}
                        <div className="education margin-b-50">
                          <h4><b>JUNIOR HIGH SCHOOL</b></h4>
                          <h5 className="font-yellow"><b>SMPN 7 TANGERANG</b></h5>
                          <h6 className="font-lite-black margin-t-10">2011 - 2014</h6>
                          <p className="margin-tb-30"> I was study in SMPN 7 Tangerang 5 years ago, at that time I didn't know much about technology </p>
                        </div>{/* education */}
                        <div className="education margin-b-50">
                          <h4><b>ELEMENTARY SCHOOL</b></h4>
                          <h5 className="font-yellow"><b>SDN PORIS PLAWAD 3 </b></h5>
                          <h6 className="font-lite-black margin-t-10">2005 - 2011 
                          </h6>
                          <p className="margin-tb-30">About 8 years ago, i have taken elementary school education in SDN PORIS PLAWAD 3</p>
                        </div>{/* education */}
                      </div>{/* education-wrapper */}
                    </div>{/* col-sm-8 */}
                  </div>{/* row */}
                </div>{/* container */}
              </section>
            </div>
        )
    }
}

export default Profile;