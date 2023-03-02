import { Box, Typography } from "@mui/material";
import React from "react";
// import bannerImage from "../../../assets/images/banners/cabling1.jpg";
import BacktoTopCom from "../../helpers/BackToTopCom";
import Layouts from "../../helpers/Layouts";
import Conclusion from "./Conclusion";
import Importance from "./Importance";
import Methods from "./Methods";

export default function ServerInfrastructure() {
  return (
    <Layouts
      pageTitle="We Do"
      highlight="IT"
      bannerImage="https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
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
            fontWeight: 400,
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
      <Importance />
      <Methods />
      <Conclusion />
      <BacktoTopCom className=".main-header " />
    </Layouts>
  );
}
