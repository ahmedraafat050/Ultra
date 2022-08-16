import React, { Component } from "react";

export default class Protfolio extends Component {
  render() {
    return (
      <section className="protofolio pt-5" id="protofolio">
        <h2 className="mb-5 text-center">
          <span className="fw-bold">My</span> Protfolio
        </h2>
        <ul className="nav nav-pills d-flex justify-content-center mb-5">
          <li className="nav-item">
            <a className="nav-link active text-dark" aria-current="page" href="#">
              All
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#">
              HTML
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#">
              Photoshop
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#">Wordpress</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark fw-bold" href="#">Mobile</a>
          </li>
        </ul>

        <div className="row w-100 p-0 m-0">
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img1.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img2.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img3.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img4.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img5.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img6.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img7.jpg' alt=""/>
          <img className="col-lg-3 col-md-4 m-0 p-0 img-fluid" src='images/Portfolio/portfolio-img8.jpg' alt=""/>

        </div>
      </section>
    );
  }
}
