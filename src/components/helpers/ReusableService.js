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

  return (
    <>
      <section
        id={id}
        className={`services-eight ${className} rel z-1 pt-50 rpt-95 pb-50 rpb-50`}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="section-title text-center mb-35">
                {/* <span className="sub-title">Our Services</span> */}
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
                <div className="center-div">
                  <div
                    key={cardItem.id}
                    className={` service-item-eight ${heightClass} `}
                  >
                    <div className={`icon margin-x-auto ${cardItem.iconColor}`}>
                      <i className={`fa-solid ${cardItem.icon}`}></i>
                    </div>
                    <h4 className="text-center service-header text-capitalize">
                      {cardItem.header}
                    </h4>
                    <p className="text-center">{cardItem.explaination}</p>
                    {showReadMore && (
                      <a href={cardItem.href} className="learn-more">
                        Read More <i className="fas fa-angle-double-right"></i>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </SliderCom>
          </div>
        </div>
      </section>
    </>
  );
}
