import React from "react";

import "./About.css";

import one from "./images/1.webp";
import adi from "./images/Adi.jpg";

export const About = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card text-bg-dark">
            <img src={one} className="card-img" alt="..." />
            <div className="card-img-overlay ">
            
         
                <p className="card-text mt-5  creative-team">

            
                  <strong className="text-success  display-1 font-monospace mt-5">
                  
                    we are
                  </strong>{" "}
                  a creative team that helps small and large business tell their
                  story to the world. We aim to create something that is
                  authentic and can be found nowhere else! We can help you: –
                  Design awesome website – Make your Business online and build
                  strong online presence
                </p>
                <h5 className="creative mt-5  animate__heartBeat animate__bounce animate__delay-2s">
                  We have a creative team built your Business Web Application...
                </h5>
              <button className="group accordion-button">
                <button className="btn btn-info">Lear More</button>
                <button className="btn btn-info">Get a free Quotes...</button>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about me  */}

      <div className="container  bg-dark text-dark mt-3">
        <div className="row">
          <div className="col-sm-5">
            <div className="card d-flex">
              <div className="card-header alert alert-info text-center bg-teal  fa-2x mb-5">
                About Me
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Hi, I'm Adi, a web developer from Hyderbad. I graduated from
                    the University of Vikrama ShimhaPuri University and studied
                    Andra Pradesh at the University of Vsu. I currently work at
                    &nbsp;
                    <strong className="bg-dark text-white">zetamine</strong> in
                    web devloper ,web application Build Support, troubleshooting
                    website issues for customers. My motto is "be helpful"
                    because being helpful and empowering gives me the greatest
                    sense of fulfillment.
                  </p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">web developer adi</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="col-sm-7">
            <p className="lead">
              <img src={adi} className="fa-image-portrait img-adi" alt="" />
            </p>
            <center>
              <button className="btn btn-primary btn-lg mt-5 shadow-5-strong fa-4x">
                <h3>Lear More About Me</h3>
              </button>
            </center>
          </div>
        </div>
      </div>

      {/* How can I help you? */}
      <br />
      <br />
      <div className="container">
        <div className="row bg-white text-dark">
          <div className="col-sm-4">
            <h3 className="text-truncate How-Can">How can I help you?</h3>
            <p className="lead">
              Do you need a new, or redesigned, business site, online shop or a
              custom web application? Or do you need improvements to your
              existing site?
            </p>

            <p className="lead">
              My office is in Begampet but I design and develop websites for
              companies, individuals and agencies across india, London
              and the UK remotely to build beautiful, fast, intuitive websites.
            </p>
          </div>

          <div className="col-sm-8" style={{height:"500px",fontSize:"3px",fontFamily:"cursive"}}>
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-title">Business Websites</h5>
                <p className="lead">
                  Websites to increase your new enquiries: marketing and
                  brochure websites.
                </p>
                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                <h5>Business Websites</h5>
              </button>
              </div>

              <div className="col-sm-6">
                <h5 className="text-title"> Web Apps</h5>
                <p className="lead">
                  Custom built web apps and portals that solve your business
                  problem, or make your new idea a reality.
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                <h5>Web Apps</h5>
              </button>


              </div>
            </div>



<br />
<br />
            <div className="row">
              <div className="col-sm-6">
                <h5 className="text-title">Online Shops & Ecommerce</h5>
                <p className="lead">
                Custom built e-commerce solutions that work quickly, securely and look amazing.
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                <h5>Online Shops & Ecommerce</h5>
              </button>
              </div>

              <div className="col-sm-6">
                <h5 className="text-title"> MERN Stack</h5>
                <p className="lead">
                I'm an MERN Stack developer and create bespoke web portals, dashboard and web apps using the TALL stack: Tailwind CSS, Bootstarp css,Meterial UI...
                </p>

                <button className="btn btn-primary btn-sm  shadow-5-strong fa-1x">
                <h5> MERN Stack</h5>
              </button>
              </div>
            </div>




          </div>
        </div>



        <h2 className="columBottom">        Why would you hire me?</h2>
        <p className="lead">

As well as having technical skills, I also have a number of professional and personal attributes which make me a delight to work with. Here are a few reasons why you should hire me as your web developer.
        </p>
      </div>





      <div className="container  why-shoud">
  <div className="row">
    <div className="col-sm-3 columdata">
      <h3 className="card-text columBottom">
      Search engine skills
      </h3>
      <p className="lead">
      I'll implement Google's best practices and provide you advice on your content strategy and creation.
      </p>
    </div>



    <div className="col-sm-3 columdata">
      <h3 className="card-text columBottom">
   
Developer&nbsp;&nbsp;designer
      </h3>
      <p className="lead">
      I design and develop websites so you don't have to explain your idea or requirements to more than one person.
      </p>
    </div>





    <div className="col-sm-3 columdata">
      <h3 className="card-text columBottom">
   
      Easy to contact
      </h3>
      <p className="lead">
      I don't dodge emails or phone calls. Try emailing me now with a brief to see how fast I respond.
      </p>
    </div>


    <div className="col-sm-3 columdata">
      <h3 className="card-text columBottom">
   
  Honest
      </h3>
      <p className="lead">
      Transparent about pricing, decision making and knowing the limit of my abilities. Strictly no sales spiel.
      </p>
    </div>




  </div>
</div>

   
    </>
  );
};
















