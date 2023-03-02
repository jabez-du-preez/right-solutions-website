import { Box, Typography } from "@mui/material";
import React from "react";
import CustomDivider from "../../helpers/CustomDivider";

export default function Conclusion() {
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
      <CustomDivider />
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontWeight: 300,
          fontSize: {
            xs: "1.50rem",
            sm: "1.50rem",
            md: "1.50rem",
            lg: "1.5rem",
          },

          mt: 5,
          fontFamily: "Montserrat",
        }}
      >
        <span className="color-blue fw-500">Right Solutions</span> offers the
        needed talent to <span className="color-blue fw-500">design</span>,{" "}
        <span className="color-blue fw-500">deploy</span> and{" "}
        <span className="color-blue fw-500">manage</span> infrastructure
        solutions that are <span className="color-blue fw-500">agile</span>,{" "}
        <span className="color-blue fw-500">efficient</span> and{" "}
        <span className="color-blue fw-500">secure</span>. There by helping you
        to mitigate risk, protecting data and allowing you to meet the
        opportunities of today and tomorrow.
      </Typography>
    </Box>
  );
}
