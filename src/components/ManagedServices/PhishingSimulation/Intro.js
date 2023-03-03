import { Box, Typography } from "@mui/material";
import React from "react";

export default function Intro({ id }) {
  return (
    <Box
      id={id}
      className="scroll-margin-150"
      sx={{
        mt: 7,
        mb: 9,
        padding: {
          xs: "0 2rem",
          sm: "0 2rem",
          md: "0 2rem",
          lg: "0 7.5rem",
        },
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        color="#6D6D6D"
        sx={{
          fontSize: {
            xs: "1.25rem",
            sm: "1.25rem",
            md: "1.25rem",
            lg: "1.5rem",
          },
          fontWeight: 400,
          fontFamily: "Montserrat",
        }}
      >
        Our Phishing Simulation service is designed to help organizations assess
        their employees'{" "}
        <span className="color-blue fw-500">susceptibility</span> to{" "}
        <span className="color-red fw-500">phishing attacks</span> and{" "}
        <span className="color-blue fw-500">train</span> them to recognize and
        prevent these types of attacks.
      </Typography>
      <div className="display-flex justify-content-center mt-50 mb-50">
        <div className="feature-line occilate">
          <span className="animate-bar "></span>
        </div>
      </div>
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: 400,
          fontSize: {
            xs: "1.50rem",
            sm: "1.50rem",
            md: "1.50rem",
            lg: "1.75rem",
          },
          color: "#6D6D6D",
          mt: 5,
          fontFamily: "Montserrat",
        }}
      >
        With this service, you'll have access to a team of experienced security
        professionals who will <span className="color-blue fw-500">design</span>{" "}
        and <span className="color-blue fw-500">execute</span> phishing
        simulations for your organization.
      </Typography>
    </Box>
  );
}
