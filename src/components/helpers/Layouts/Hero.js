import { Box, Button } from "@mui/material";
import React from "react";

import { CSSTransition } from "react-transition-group";

import { Link } from "react-router-dom";

export default function Hero({
  pageTitle,
  bannerImage,
  pageSubtitle,
  highlight,
  pageTitleSuffix,
  pageTitleContinued,
  buttonText,
  // showButton,
  scrollToComponent,
  // showSecondButton,
}) {
  return (
    // <CSSTransition
    //   in
    //   appear
    //   timeout={1000}
    //   classNames={{
    //     enter: "animate-enter",
    //     enterActive: "animate-enter-active",
    //     exit: "opacity-1",
    //     exitActive: "opacity-1",
    //     appear: "animate-enter",
    //     appearActive: "animate-enter-active",
    //   }}
    // >
    <section
      className="page-banner bgs-cover overlay pt-50"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="banner-inner">
          <CSSTransition
            in
            appear
            timeout={1000}
            classNames={{
              enter: "hero-header-enter",
              enterActive: "hero-header-enter-active",
              exit: "y-one",
              exitActive: "y-one",
              appear: "hero-header-enter",
              appearActive: "hero-header-enter-active",
            }}
          >
            <h1 className="page-title text-center">
              {pageTitle} <span className="color-blue">{highlight}</span>{" "}
              {pageTitleSuffix}
              {pageTitleContinued}
            </h1>
          </CSSTransition>
          <CSSTransition
            in
            appear
            timeout={1000}
            classNames={{
              enter: "sub-header-enter",
              enterActive: "sub-header-enter-active",
              exit: "y-one",
              exitActive: "y-one",
              appear: "sub-header-enter",
              appearActive: "sub-header-enter-active",
            }}
          >
            <h4 className="page-sub-title text-center">{pageSubtitle}</h4>
          </CSSTransition>
          <Box
            className="text-center"
            sx={{
              margin: "2rem auto",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <CSSTransition
              in
              appear
              timeout={3500}
              classNames={{
                enter: "button-left-enter",
                enterActive: "button-left-enter-active",
                exit: "",
                exitActive: "",
                appear: "button-left-enter",
                appearActive: "button-left-enter-active",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                    xl: "1.3rem",
                  },
                  borderRadius: "10px",
                  textTransform: "none",
                  backgroundColor: "white",
                  color: "#3bb3eb",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#3bb3eb",
                    backgroundColor: "black",
                  },
                }}
                onClick={scrollToComponent}
              >
                {buttonText}
              </Button>
            </CSSTransition>

            <CSSTransition
              in
              appear
              timeout={3500}
              classNames={{
                enter: "button-right-enter",
                enterActive: "button-right-enter-active",
                exit: "",
                exitActive: "",
                appear: "button-right-enter",
                appearActive: "button-right-enter-active",
              }}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  ml: 4,
                  fontFamily: "Montserrat",
                  fontSize: {
                    xs: "1rem",
                    sm: "1rem",
                    md: "1.3rem",
                    lg: "1.3rem",
                    xl: "1.3rem",
                  },
                  borderRadius: "10px",
                  textTransform: "none",
                  backgroundColor: "#3bb3eb",
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    color: "#3bb3eb",
                    backgroundColor: "black",
                  },
                }}
              >
                <Link to="/about/contact-us" style={{ color: "white" }}>
                  Contact Us
                </Link>
              </Button>
            </CSSTransition>
          </Box>
        </div>
      </div>
    </section>
    // </CSSTransition>
  );
}
