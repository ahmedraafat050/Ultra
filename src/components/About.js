import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section className="about py-5">
        <div className="container d-flex align-items-md-end justify-content-center flex-column">
          <div className="w-50">
            <h2 className="mb-3">
              <span className="fw-bold">This is</span> MY
            </h2>
            <h4 className="fw-bold fs-1 pb-3">Creative Director</h4>
            <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est{" "}
              <a href="https://google.com">explicabo</a> maxime quibusdam quaerat nihil aliquid
              aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad
              veritatis?
            </p>
            <p className="info-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est
              explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti,
              repellendus dolorum. Possimus nisi cupiditate ad veritatis?
            </p>
          </div>
        </div>
      </section>
    );
  }
}
