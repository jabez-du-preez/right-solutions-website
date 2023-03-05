import React from "react";
import sponsorSeven from "../../assets/images/client-logo/Dell_Logo.svg.png";
import sponserFour from "../../assets/images/client-logo/Fortinet-Logo.wine.svg";
import sponserTwo from "../../assets/images/client-logo/Microsoft_logo.png";
import sponserOne from "../../assets/images/client-logo/seagate.png";
import sponserThree from "../../assets/images/client-logo/SentinelOne+logo.png";
import sponsorEight from "../../assets/images/client-logo/Sophos_logo.svg.png";
import SliderCom from "../../components/helpers/SliderCom";

export default function Sponsers() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="client-logo-area bg-light-blue p-20">
      <div className="container">
        <h2 className="page-sub-title fw-500 text-center mt-20 dark-grey">
          Our Partners
        </h2>
        <div className="logo-carousel-wrap pt-25 pb-25">
          <SliderCom settings={settings}>
            <div className="logo-item">
              <a href="#">
                <img src={sponserOne} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserTwo} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserThree} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponserFour} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img src={sponsorEight} alt="Client Logo" />
              </a>
            </div>
            <div className="logo-item">
              <a href="#">
                <img width="35%" src={sponsorSeven} alt="Client Logo" />
              </a>
            </div>
          </SliderCom>
        </div>
      </div>
    </div>
  );
}
