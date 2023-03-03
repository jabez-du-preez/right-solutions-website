import { Box, Typography } from "@mui/material";
import React from "react";
// import bannerImage from "../../../assets/images/banners/cabling1.jpg";
import Layouts from "../../helpers/Layouts";
import ReusableConclusion from "../../helpers/ReusableConclusion";
import Importance from "./Importance";
import Methods from "./Methods";

export default function ServerInfrastructure() {
  const conclusion = (
    <span>
      <span className="color-blue fw-500">Right Solutions</span> offers the
      needed talent to <span className="color-blue fw-500">design</span>,{" "}
      <span className="color-blue fw-500">deploy</span> and{" "}
      <span className="color-blue fw-500">manage</span> infrastructure solutions
      that are <span className="color-blue fw-500">agile</span>,{" "}
      <span className="color-blue fw-500">efficient</span> and{" "}
      <span className="color-blue fw-500">secure</span>. There by helping you to
      mitigate risk, protecting data and allowing you to meet the opportunities
      of today and tomorrow.
    </span>
  );
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
      <ReusableConclusion conclusion={conclusion} />
    </Layouts>
  );
}
