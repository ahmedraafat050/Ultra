import React, { Component } from "react";

export default class Media extends Component {
  render() {
    return (
      <section className="media">
          <div className="row w-100 p-0 m-0 text-white">
            
          <div className="col-md-4 bg-primary p-5 d-flex justify-content-center align-items-center">
          <i className="fa-brands fa-facebook-f fa-3x pe-2"></i>
            <p className="d-inline">
              <span className="d-block">Follow Me on</span>
              <span className="d-block">Social Facebook</span>
            </p>
          </div>

          <div className="col-md-4 bg-success p-5 d-flex justify-content-center align-items-center">
          <i className="fa-brands fa-twitter fa-3x pe-2"></i>
            <p className="d-inline">
              <span className="d-block">Tweet Me on</span>
              <span className="d-block">Social twitter</span>
            </p>
          </div>

          <div className="col-md-4 bg-danger p-5 d-flex justify-content-center align-items-center">
          <i className="fa-brands fa-pinterest fa-3x  pe-2 "></i>
            <p className="d-inline">
              <span className="d-block">Pin Me on</span>
              <span className="d-block">Social Pinterest</span>
            </p>
          </div>
          </div>
      </section>
    );
  }
}
