import { Box, Button } from "@mui/material";
import React from "react";
import shape5 from "../../assets/images/shapes/circle.png";
import shape3 from "../../assets/images/shapes/close.png";
import shape1 from "../../assets/images/shapes/lines.png";
import shape4 from "../../assets/images/shapes/triangle.png";
import shape2 from "../../assets/images/shapes/w-shape.png";

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
}) {
  return (
    <section
      className="page-banner bgs-cover overlay pt-50"
      style={{ backgroundImage: `url(${bannerImage})` }}
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
                onClick={scrollToComponent}
              >
                {buttonText}
              </Button>
            </Box>
          )}
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
  );
}
