import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import SliderCom from "./SliderCom";

export default function ReusableService({
  items,
  id,
  heading,
  showReadMore,
  numberOfSlidesToShow,
  numberOfSlidesToScroll,
  heightClass,
  className,
}) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    speed: 1000,
    slidesToShow: numberOfSlidesToShow,
    slidesToScroll: numberOfSlidesToScroll,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { ref, inView } = useInView({ threshold: 0.3 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <>
      <section
        ref={ref}
        id={id}
        className={`services-eight ${className} rel z-1 pt-50 rpt-95 pb-50 rpb-50`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="section-title text-center mb-35">
                <h2 className="color-blue fw-500 text-capitalize">
                  {" "}
                  {heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="service-slider-wrap">
            <SliderCom settings={settings}>
              {items.map((cardItem) => (
                <CSSTransition
                  in={show}
                  appear
                  timeout={1500}
                  classNames={{
                    enter: "hero-header-enter",
                    enterActive: "hero-header-enter-active",
                    appear: "hero-header-enter",
                    appearActive: "hero-header-enter-active",
                  }}
                >
                  <div key={cardItem.id} className="center-div">
                    <div
                      key={cardItem.id}
                      className={` service-item-eight ${heightClass} `}
                    >
                      <div
                        className={`icon margin-x-auto ${cardItem.iconColor}`}
                      >
                        <i className={`fa-solid ${cardItem.icon}`}></i>
                      </div>
                      <h4 className="text-center service-header text-capitalize">
                        {cardItem.header}
                      </h4>
                      <p className="text-center">{cardItem.explaination}</p>
                      {showReadMore && (
                        <a href={cardItem.href} className="learn-more">
                          Read More{" "}
                          <i className="fas fa-angle-double-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </CSSTransition>
              ))}
            </SliderCom>
          </div>
        </div>
      </section>
    </>
  );
}
