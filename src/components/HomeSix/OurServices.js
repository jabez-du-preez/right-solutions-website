import React from "react";

export default function OurServices() {
  return (
    <section className="what-we-do-two text-center pt-75 rpt-95 pb-90 rpb-70">
      <div className="container">
        <div className="section-title mb-55">
          <span className="sub-title">What We Do</span>
          <h2 className="text-capitalize">
            We are active in <span className="color-blue">many fields</span> of
            the industry
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two  lift-on-hover  border-radius padding-auto wow fadeInUp delay-0-2s">
              <div className="icon">
                <i className="flaticon flaticon-3d"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar"></span>
              </div>
              <h4>
                <a href="/service-details">Managed Services</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two lift-on-hover  border-radius padding-auto color-two wow fadeInUp delay-0-4s">
              <div className="icon">
                <i className="flaticon flaticon-coding"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar delay-1-0s"></span>
              </div>
              <h4>
                <a href="/service-details">Cloud Services</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="feature-item-two lift-on-hover  border-radius padding-auto color-three wow fadeInUp delay-0-6s">
              <div className="icon">
                <i className="flaticon flaticon-art"></i>
              </div>
              <div className="feature-line">
                <span className="animate-bar delay-2-0s"></span>
              </div>
              <h4>
                <a href="/service-details">IT Solutions</a>
              </h4>
              <p>Integer molestie magna in augue euismod,</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
