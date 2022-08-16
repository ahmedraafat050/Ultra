import React, { Component } from "react";
export default class Work extends Component {
  render() {
    return (
      <section className="work py-5" id="work">
        <div className="container">
          <h2 className="mb-5 text-center">
            <span className="fw-bold">My</span> Work
          </h2>
          <div className="row">
            <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column">
              <div className="card p-2 mb-2">
                <i className="icon fa fa-chain fa-3x my-3"></i>
                <div className="card-body">
                  <h4 className="card-title">Mobile Ux</h4>
                  <hr className="line" />
                  <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column">
              <div className="card p-2 mb-2">
                <i className="icon fa fa-bolt fa-3x my-3"></i>
                <div className="card-body">
                  <h4 className="card-title">Mobile Ux</h4>
                  <hr className="line" />
                  <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 d-flex justify-content-center align-items-center flex-column">
              <div className="card p-2 mb-2">
                <i className="icon fa fa-tachometer fa-3x my-3"></i>
                <div className="card-body">
                  <h4 className="card-title">Mobile Ux</h4>
                  <hr className="line" />
                  <p className="part-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloribus quos omnis voluptas ea ipsam! Voluptas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
