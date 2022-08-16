import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <section id="home" className="home d-flex justify-content-center align-items-center flex-column text-center">
        <div className="container">
          <div>
            <h2 className='text-secondary mb-5 fw-bold'>Ahmed Raafat</h2>
            <h4 className="mb-3 fw-bold">Front End Developer</h4>
            <p className="w-75 mb-5 m-auto">
              Iam a professional <span className="text-secondary">UX Designer</span> and Front-End
              Developer creating modern and resposive designs to Web and Mobile.
              Let us work together. Thank you.
            </p>
            <button className="border-0 py-3 px-5 text-white rounded">Let's Begin</button>
          </div>
        </div>
      </section>
    );
  }
}
