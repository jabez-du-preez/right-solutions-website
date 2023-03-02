import { Box, Typography } from "@mui/material";
import React from "react";

export default function Intro({ id, className }) {
  return (
    <Box
      id={id}
      className={className}
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
        Our Managed Backup solution is designed to provide organizations with a{" "}
        <span className="color-blue fw-500">reliable</span> and{" "}
        <span className="color-blue fw-500">secure</span> way to protect their
        data.
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
        With this service, you'll have access to a team of With this service,
        you'll have access to a team of{" "}
        <span className="color-blue fw-500">experienced</span> IT professionals
        who will help you to implement and manage a robust backup strategy that
        meets the specific needs of your organization.
      </Typography>
    </Box>
  );
}
