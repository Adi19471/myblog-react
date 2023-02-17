import React from "react";
import { useParams } from "react-router-dom";
import "./Home.css";

import One from "./images/Home.gif";
import Two from "./images/1.gif";

import ONE from "./images/ONE.gif";
import TWO from "./images/TWO.gif";
import THREE from "./images/THREE.gif";

import Monggodb from "./images/Mongodb.jpg";
import Express from "./images/Express.jpg";
import Reactjs from "./images/Reactjs.jpg";
import Nodejs from "./images/Nodejs.jpg";

import Backend from "./images/Back.gif";

const Home = () => {
  const params = useParams();
  const userID = params.userID;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <>
              {/* Carousel wrapper */}
              <div
                id="carouselBasicExample"
                className="carousel slide carousel-fade"
                data-mdb-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                {/* Inner */}
                <div className="carousel-inner">
                  {/* Single item */}
                  <div className="carousel-item active">
                    <img
                      src={ONE}
                      className="d-block w-100"
                      alt="Sunset Over the City"
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5 className="animate__animated animate__bounceIn">
                        MY FIRST PROJECT MERN
                      </h5>
                      <p>
                        First MERN stack project. I haven't been posting
                        anything for you.....
                      </p>
                    </div>
                  </div>
                  {/* Single item */}
                  <div className="carousel-item">
                    <img
                      src={TWO}
                      className="d-block w-100"
                      alt="Canyon at Nigh"
                    />
                    <div className="carousel-caption d-none d-md-block bg-white text-dark">
                      <h5 className="animate__animated animate__bounceOutDown">
                        Understanding Client Requirments
                      </h5>
                      <p>
                        Understanding the Basics of Full Stack JavaScript
                        Development - MERN Stacks...
                      </p>
                    </div>
                  </div>
                  {/* Single item */}
                  <div className="carousel-item">
                    <img
                      src={THREE}
                      className="d-block w-100"
                      alt="Cliff Above a Stormy Sea"
                    />
                    <div className="carousel-caption d-none d-md-block bg-white text-dark">
                      <h5 className="animate__animated animate__flip">
                        Understanding{" "}
                      </h5>
                      <p>Engineering Manager (MERN Stack)</p>
                    </div>
                  </div>
                </div>
                {/* Inner */}
                {/* Controls */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-mdb-target="#carouselBasicExample"
                  data-mdb-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-mdb-target="#carouselBasicExample"
                  data-mdb-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              {/* Carousel wrapper */}
            </>
          </div>
        </div>
      </div>

      <br />

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <a className="ripple" href="#!">
              <img alt="example" class="img-fluid rounded" src={Two} />
            </a>
          </div>

          <div className="col-sm-6 mt-5">
            <h4 className="text-center Home-View">Web Developer</h4>
            <p className="mute font-monospace  mt-5">
              As a Front End & Back End Dev I'm resposible to create creative
              layouts, That layouts should useful to other Developers can they
              use very easily in their Project and this help they work very
              easier
            </p>

            <div className="text-md-start">
              <h4 className="text-center Home-View">Web Designer</h4>
              <p className="mute font-monospace  mt-5">
                I'm Really enthusiastic to design a site before developing then
                the clients and users can get a overview what is the final
                product.
              </p>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="row">
          <div className="col-sm-6 mt-5">
            <p className="mute font-monospace  text-start py-2 mt-5">
              Back-end development means working on server-side software, which
              focuses on everything you can’t see on a website. Back-end
              developers ensure the website performs correctly, focusing on
              databases, back-end logic, application programming interface
              (APIs), architecture, and servers. They use code that helps
              browsers communicate with databases, store, understand, and delete
              data.
            </p>

            <div className="text-md-end">
              <h4 className="text-center">Full Stack Web Applicatin </h4>
              <p className="mute font-monospace  text-start py-2  mt-5">
                In the tech world, we call this the “front-end” and the
                “back-end” respectively. People who work on these components
                would be called “front-end developers” and “back-end
                developers.” Creating both the front and back-end of a website
                comes with its own challenges, but one can’t exist without the
                other.
              </p>
            </div>
          </div>

          <div className="col-sm-6">
            <a className="ripple" href="#!">
              <img alt="example" className="img-fluid rounded" src={Backend} />
            </a>
          </div>
        </div>
      </div>

      <dv className="container">
        <div className="row">
          <div className="col">
            <>
              {/* Jumbotron */}
              <div
                className="bg-image p-1 text-center shadow-1-strong rounded mb-5 text-white"
                style={{
                  backgroundImage:
                    'url("https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg")',
                }}
              >
                <h1 className="mb-3 h2">MERN STACK DEVELOPER </h1>
                <p>
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="card">
                        <img
                          src={Monggodb}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body bg-dark text-white">
                          <h5 className="card-title">MONGODB </h5>
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            MongoDB is a source-available cross-platform
                            document-oriented database program. Classified as a
                            NoSQL database program, MongoDB uses JSON-like
                            documents with optional schemas...
                          </p>
                          <a
                            href="https://www.mongodb.com/what-is-mongodb"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* secodn  */}

                    <div className="col-sm-3">
                      <div className="card bg-dark text-white">
                        <img
                          src={Express}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Express Js</h5>
                          <p
                            className="card-text text-sm-start font-monospace "
                            style={{ height: "200px" }}
                          >
                            Express is a minimal and flexible Node.js web
                            application framework that provides a robust set of
                            features for web and mobile applications...
                          </p>
                          <a
                            href="https://expressjs.com/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* third */}

                    <div className="col-sm-3 ">
                      <div className="card bg-dark text-white">
                        <img
                          src={Reactjs}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">React Js </h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "190px" }}
                          >
                            React is a free and open-source front-end JavaScript
                            library for building user interfaces based on
                            components. It is maintained by Meta and a community
                            ...
                          </p>
                          <a
                            href="https://reactjs.org/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* fourth */}

                    <div className="col-sm-3 h-90">
                      <div className="card bg-dark text-white ">
                        <img
                          src={Nodejs}
                          className="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body">
                          <h5 className="card-title">Node Js</h5>
                          <p
                            className="card-text text-sm-start font-monospace"
                            style={{ height: "200px" }}
                          >
                            Node.js is a cross-platform, open-source server
                            environment that can run on Windows, Linux, Unix,
                            macOS, and more. Node.js is a back-end JavaScript
                            runtime environment ...
                          </p>
                          <a
                            href="https://nodejs.org/en/"
                            target="_blank"
                            className="btn btn-primary"
                          >
                            More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              {/* Jumbotron */}
            </>
          </div>
        </div>
      </dv>
    </>
  );
};

export default Home;
