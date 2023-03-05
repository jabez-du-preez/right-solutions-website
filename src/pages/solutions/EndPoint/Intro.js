import { Box, Typography } from "@mui/material";
import React from "react";

export default function Intro() {
  return (
    <Box
      sx={{
        mt: 7,
        mb: 7,
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
        It has become more important than ever to have a resilient security
        framework as cyber attacks have become more advanced and frequent in
        recent years.
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
        Traditional security architecture is not enough anymore. To{" "}
        <span className="color-blue fw-400">protect</span> your business you not
        only need to know and secure all your digital assets but it is critical
        to continuously monitor them for a breach and plan for business
        continuity in case of one.
      </Typography>
    </Box>
  );
}
