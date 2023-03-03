import { Box, Typography } from "@mui/material";
import React from "react";
// import bannerImage from "../../../assets/images/banners/manage.jpg";
import Layouts from "../../helpers/Layouts";
import Intro from "./Intro";
import OurVOIP from "./OurVOIP";
import Solutions from "./Solutions";

export default function Voice() {
  const scroll = () => {
    const hero = document.querySelector("#voice-intro");
    hero.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Layouts
      bannerImage="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80"
      pageTitle="Imagine being able to take your business phone system on the go!"
      showButton
      buttonText="Learn More"
      scrollToComponent={scroll}
    >
      <Intro id="voice-intro" />
      <OurVOIP />
      <Solutions />
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
          variant="h4"
          textAlign="center"
          sx={{
            fontWeight: 400,
            fontSize: {
              xs: "1.50rem",
              sm: "1.50rem",
              md: "1.50rem",
              lg: "2rem",
            },

            mt: 5,
            fontFamily: "Montserrat",
          }}
        >
          With our VOIP Solution, you can have{" "}
          <span className="color-blue fw-400">confidence</span> that your
          organization's business communications are{" "}
          <span className="color-blue fw-400">reliable</span>,{" "}
          <span className="color-blue fw-400">flexible</span>, and{" "}
          <span className="color-blue fw-400">cost-effective</span>.
        </Typography>
      </Box>
    </Layouts>
  );
}
