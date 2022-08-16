import React, { Component } from "react";
import Footer  from './Footer'

export default class Contact extends Component {
  render() {
    return (
      <>
        <div className="contact d-flex justify-content-center align-items-center">
        <div className="container p-4">
          <h2 className="mb-5 text-center">
            Drop <span className="fw-bold">Me A line</span>
          </h2>
          <form action="">
            <div className="form-input row mb-1">
              <input
                type="text"
                placeholder="Your Name"
                className="col-md-12 col-lg-6 py-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="col-md-12 col-lg-6 py-2"
              />

              <input
                type="text "
                className="sub d-block col-12 py-2"
                placeholder="Your Subject"
              />
              <textarea
                cols="30"
                rows="10"
                placeholder="Your Message"
                className="sub d-block col-12 p-1"
              ></textarea>

              <input
                type="submit"
                value="Send Message"
                className="sub d-block col-md-12 col-lg-6 py-3 justify-content-center align-items-center"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}
