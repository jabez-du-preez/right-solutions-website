import { Box, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../assets/images/banners/cabling1.jpg";
import Layouts from "../helpers/Layouts";

export default function ServerInfrastructure() {
  return (
    <Layouts
      pageTitle="Server Infrastructure done"
      highlight="right"
      bannerImage={bannerImage}
    >
      <Box
        sx={{
          mt: 7,
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
            fontWeight: 300,
            fontFamily: "Montserrat",
          }}
        >
          In today’s digital environment, your IT infrastructure dictates how
          well your businesses performs.
        </Typography>
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
          <span className="color-blue fw-400">Right Solutions</span> helps
          businesses prepare for future innovations by providing and efficiently
          managing your business-critical IT infrastructure allowing you to
          focus on your core business.
        </Typography>
      </Box>
    </Layouts>
  );
}
