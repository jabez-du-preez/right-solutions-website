import React from "react";
import aboutThumb from "../../assets/images/about/about-seven.png";

export default function ReusableAbout({
  headline,
  subHeadline,
  explaination,
  list,
  showList,
}) {
  return (
    <section className="about-seven rel z-1 pt-150 rpt-30">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="about-seven-image rmb-60">
              <img src={aboutThumb} alt="About" />
            </div>
          </div>
          <div className="col-lg-5">
            <div className="about-seven-content">
              <div className="section-title mb-30">
                <span className="sub-title">{subHeadline}</span>
                <h2>{headline}</h2>
              </div>
              <p>{explaination}</p>
              {showList && (
                <ul className="list-style-three mt-35 mb-50">
                  {list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {/* <a href="/about-one" className="theme-btn">
                Start Free Tral <i className="fas fa-long-arrow-alt-right"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="circle-drop"></div> */}
    </section>
  );
}
