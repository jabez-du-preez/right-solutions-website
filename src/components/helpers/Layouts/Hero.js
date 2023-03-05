import { Box, Button } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

export default function Hero({
  pageTitle,
  bannerImage,
  pageSubtitle,
  highlight,
  pageTitleSuffix,
  pageTitleContinued,
  buttonText,
  showButton,
  scrollToComponent,
  showSecondButton,
}) {
  return (
    <section
      className="page-banner bgs-cover overlay pt-50"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="banner-inner">
          <h1 className="page-title text-center">
            {pageTitle} <span className="color-blue">{highlight}</span>{" "}
            {pageTitleSuffix}
            {pageTitleContinued}
          </h1>
          <h4 className="page-sub-title text-center">{pageSubtitle}</h4>
          {showButton && (
            <Box
              className="text-center"
              sx={{
                margin: "2rem auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "1.3rem",
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
              {showSecondButton && (
                <Button
                  variant="contained"
                  sx={{
                    ml: 4,
                    fontFamily: "Montserrat",
                    fontSize: "1.3rem",
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
              )}
            </Box>
          )}
        </div>
      </div>
    </section>
  );
}
