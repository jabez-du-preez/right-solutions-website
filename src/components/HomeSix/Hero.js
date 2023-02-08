import React from "react";
import shape5 from "../../assets/images/shapes/circle.png";
import shape3 from "../../assets/images/shapes/close.png";
import shape1 from "../../assets/images/shapes/lines.png";
import shape4 from "../../assets/images/shapes/triangle.png";
import shape2 from "../../assets/images/shapes/w-shape.png";

export default function Hero() {
  return (
    <>
      <section className="hero-section-six z-1 rel pt-80 rpt-65">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <div className="hero-content-six mr-5 rmr-0 py-100 rpy-80">
                <span className="sub-title d-block wow fadeInUp delay-0-2s">
                  We’re The Right Solution for you
                </span>
                <h1 className="wow fadeInUp delay-0-4s mt-20">
                  Your one stop shop for modern and intelligent solutions
                </h1>
                <div className="hero-btns mt-35 wow fadeInUp delay-0-8s">
                  <a href="/about-one" className="theme-btn mr-25 mb-10">
                    Learn More About Us <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <img src={shape1} alt="Shape" />
          <img src={shape2} alt="Shape" />
          <img src={shape3} alt="Shape" />
          <img src={shape4} alt="Shape" />
          <img src={shape5} alt="Shape" />
        </div>
      </section>
    </>
  );
}
