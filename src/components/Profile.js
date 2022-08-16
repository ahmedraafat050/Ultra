import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    return (
      <section className="profile py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h2 className="mb-5">
                <span className="fw-bold">My</span> Profile
              </h2>
              <ul className="list-unstyled ">
                <li className="pb-3">
                  <span className="fw-bold pe-4">Name: </span>
                  Hamza Nabil
                </li>
                <li className="pb-3">
                  <span className="fw-bold pe-4">Birthday: </span>
                  21/1/1996
                </li>
                <li className="pb-3">
                  <span className="fw-bold pe-4">Address: </span>
                  Ain shams
                </li>
                <li className="pb-3">
                  <span className="fw-bold pe-4">Phone: </span>
                  4444 5555 6666
                </li>
                <li className="pb-3">
                  <span className="fw-bold pe-4">Email: </span>
                  hamza@hamza.com
                </li>
                <li className="pb-3">
                  <span className="fw-bold pe-4">Website: </span>
                  <span className="web">www.google.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-6">
              <h2 className="mb-5">
                <span className="fw-bold">My</span> Skills
              </h2>
              <p className="text-black-50">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                praesentium blanditiis esse cupiditate, omnis similique.
              </p>
              <div className="bar">
                <span className="title">Bootstrap</span>
                <span className="perc">100%</span>
                <div className="parent">
                  <span className="sp1"></span>
                </div>
              </div>

              <div className="bar">
                <span className="title">CSS3</span>
                <span className="perc">90%</span>
                <div className="parent">
                  <span className="sp2"></span>
                </div>
              </div>

              <div className="bar">
                <span className="title">Photoshop</span>
                <span className="perc">80%</span>
                <div className="parent">
                  <span className="sp3"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
