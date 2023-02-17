import React from 'react'

const Footer = () => {
  return (
   <div className="container bg-dark">
    <div className="row">
        <div className="col">

        <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="container my-5">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "darkblue" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "teal" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connecte with me Online Social Media ....Platform</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div>
          <a href="https://www.facebook.com/adinarayanareddy.kumatha.1"     target="_blank" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/home" target="_blank" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="www.google.com" target="_blank"   className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="https://www.instagram.com/invites/contact/?i=dxlg0xvm3wmh&utm_content=eybwlhw" target="_blank" className="text-white me-4">
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="text-white me-4">
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://adi19471.github.io/" target="_blank" className="text-white me-4">
            <i className="fab fa-github" />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                Here you can see my permisions & contact Update Informatin 
                Please this is copy right permisions web developer ADI NARAYANA REDDY 
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Products</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                 MERN
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
             PYTHON DJANGO
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
               BOOTSTRAP
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                 ML/AL/NLP/DATASCIENCE
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-white">
                 email
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
         whatsapp
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
   Instagram
                </a>
              </p>
              <p>
                <a href="#!" className="text-white">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> Hyderbad
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> reactjsadi@gmail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 91 9398895448
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 91 8341553216
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "teal" }}
      >
        © 2023  Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          todaywebdevelp.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

        </div>
    </div>
   </div>
  )
}

export default Footer