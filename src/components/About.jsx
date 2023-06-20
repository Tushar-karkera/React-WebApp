import React from "react";
import tushar from '../assets/img/tushar.jpg';
import ranjith from '../assets/img/ranjith.jpg';

function Services() {
  let message = ``;
  return (
    <section className="section-white">

      <div className="container">

        <div className="row">

          <div className="col-md-12 text-center">

            <h2 className="section-title">The Team Behind</h2>

            <p className="section-subtitle">{message}</p>

          </div>

          <div className="col-sm-6 col-md-4 col-lg-6">

            <div className="team-item">

              <img src={tushar} className="team-img" alt="pic" />
              <h3>TUSHAR V KARKERA</h3>
              <div className="team-info"><p>Developer and Tester</p></div>
              <p>
              The individual responsible for the development and ongoing maintenance of the website, 
              as well as the creation and management of its content, serves as the developer and active 
              maintainer of the aforementioned online platform.
              </p>

              <ul className="team-icon">

                <li><a className="twitter">
                  <i className="fa fa-twitter"></i>
                </a></li>

                <li><a className="pinterest">
                  <i className="fa fa-pinterest"></i>
                </a></li>

                <li><a className="facebook">
                  <i className="fa fa-facebook"></i>
                </a></li>

                <li><a className="dribble">
                  <i className="fa fa-dribbble"></i>
                </a></li>

              </ul>


            </div>
          </div>

          <div className="col-sm-6 col-md-4 col-lg-6">

            <div className="team-item">

              <img src={ranjith} className="team-img" alt="pic" />

              <h3>RANJITH BK</h3>

              <div className="team-info"><p>Maintainer and Organiser</p></div>

              <p>
                As the designated maintainer of the study material and all its associated contents,
                I am responsible for overseeing the ongoing management and organization of the educational resources.
              </p>

              <ul className="team-icon">

                <li><a className="twitter"><i className="fa fa-twitter"></i></a></li>

                <li><a className="pinterest"><i className="fa fa-pinterest"></i></a></li>

                <li><a className="facebook"><i className="fa fa-facebook"></i></a></li>

                <li><a className="dribble"><i className="fa fa-dribbble"></i></a></li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Services;