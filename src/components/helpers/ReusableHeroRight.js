import React from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

function ReusableHeroRight({
  headerText,
  listItems,
  buttonText,
  buttonHref,
  showButton,
  backgroundImage,
  secondaryText,
  tertiaryText,
}) {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section id="reusable-hero" className="hero-section-five rel">
      <div className="row align-items-center">
        <div className="col-sm-6"></div>
        <div className="col-sm-6 reusable-hero-text">
          <div
            ref={ref}
            className="hero-content-five mr-10 rmr-0 py-125 rpy-100"
          >
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "hero-header-enter",
                enterActive: "hero-header-enter-active",
                exit: "animate-right-exit",
                exitActive: "animate-right-exit-active",
              }}
            >
              <h2 className="text-capitalize wow fadeInUp delay-0-4s mt-20 fw-600 color-blue">
                {headerText}
              </h2>
            </CSSTransition>
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "sub-header-enter",
                enterActive: "sub-header-enter-active",
                exit: "animate-right-exit",
                exitActive: "animate-right-exit-active",
              }}
            >
              <h3
                style={{
                  lineHeight: "1.75",
                }}
                className="wow fadeInUp delay-0-4s mt-20 fw-400"
              >
                {secondaryText}
              </h3>
            </CSSTransition>
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "animate-right-enter",
                enterActive: "animate-right-enter-active",
                exit: "animate-right-exit",
                exitActive: "animate-right-exit-active",
              }}
            >
              <div>
                {listItems && (
                  <ul className="list-style-one py-10 wow fadeInUp delay-0-6s">
                    {listItems.map((item) => (
                      <li className="text-capitalize display-flex align-center">
                        <i
                          style={{
                            fontSize: "1.25rem",
                          }}
                          className="fa-solid fa-circle-check color-blue mr-10"
                        ></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </CSSTransition>
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "sub-header-enter",
                enterActive: "sub-header-enter-active",
                exit: "animate-right-exit",
                exitActive: "animate-right-exit-active",
              }}
            >
              <h3
                style={{
                  lineHeight: "1.75",
                }}
                className="wow fadeInUp delay-0-4s mt-20 fw-400"
              >
                {tertiaryText}
              </h3>
            </CSSTransition>
            {showButton && (
              <div className="hero-btns mt-35 wow fadeInUp delay-0-8s">
                <a href={buttonHref} className="theme-btn mr-15 mb-10">
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className="hero-five-image bgs-cover wow fadeInRight delay-0-8s"
        style={{
          backgroundImage: `${backgroundImage}`,
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100%",
        }}
      ></div>
    </section>
  );
}

export default ReusableHeroRight;
