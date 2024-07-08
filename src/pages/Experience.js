import "./Experience.css";
import Navbar from "./Navbar";

import ojt from "../img/OJT.jpg";
import ojts from "../img/OJTS.jpg";
import blow from "../img/blow.jpg";
import qq from "../img/qq.jpg";
import klase from "../img/klase.jpg";
import kalbo from "../img/kalbo.jpg";
import regalo from "../img/regalo.jpg";




const Experience = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper bg-secondary bg-gradient">
        <div className="overlay">
          <div class="container3">

            <div id="exprience-info">
              <div className="container-fluid mt-5">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                      Experiences
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section id="info">
            
      <div class="text-center">
      <h1 className="text display-4 fw-bold"><center>My Experiences<p className="display-6"></p></center></h1>
        <div className="container">
          <div className="row">
            
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={ojt} alt="" />
                <h4 className="text-center"></h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={ojts} alt="" />
                <h4 className="text-center"></h4>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={kalbo} alt="" />
                <h4 className="text-center"></h4>
              </div>
            </div>
            
          </div>
        </div> </div>

        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={qq} alt="" />
                <h4 className="text-center"></h4>
                
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={klase} alt="" />
                <h4 className="text-center"></h4>
              </div>
            </div>
            
            <div className="col-lg mb-3">
              <div className="card1 p-5 shadow">
                <img src={regalo} alt="" />
                <h4 className="text-center"></h4>
              </div>
            </div>
          </div>
        </div>
      </section>
          <svg
            className="air-waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use href="#wave-path" x="50" y="3" fill="rgb(255,255,255)" />
            </g>
            <g className="wave2">
              <use
                href="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .5)"
              />
            </g>
            <g className="wave3">
              <use
                href="#wave-path"
                x="50"
                y="9"
                fill="rgba(255,255,255, .3)"
              />
            </g>
          </svg>
        </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
            <br />
            <hr />
          </div>
      
          <div class="isotope">
            <div class="row">
            <h1 className="text display-4 fw-bold"><center>During My On-the- Job Training<p className="display-6"></p></center></h1>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojt} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={ojts} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={klase} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={blow} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr /> 
          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={klase} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={ojt} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

          

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={blow} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default Experience;
