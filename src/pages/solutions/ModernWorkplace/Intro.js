import { Box, Typography } from "@mui/material";
import React from "react";

export default function Intro({ id }) {
  return (
    <Box
      id={id}
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
            Our <span className="color-blue fw-400">Modern Workplace</span>{" "}
            solutions allow your employees to access data when and where they
            need it.
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
            Employees can <span className="color-blue fw-400">collaborate</span>{" "}
            and <span className="color-blue fw-400">work</span> seamlessly and
            securely on any device, anywhere, thus allowing for the hybrid work
            environments that employees demand in current circumstances.
          </Typography>
        </Box>
      </Typography>
      {/* <Typography
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
        Our range of advanced network infrastructure solutions provides your
        business with a <span className="color-blue fw-400">high-speed</span>{" "}
        and <span className="color-blue fw-400">reliable</span> network that
        allows for smoother operations and better optimal uptime.
      </Typography> */}
    </Box>
  );
}
