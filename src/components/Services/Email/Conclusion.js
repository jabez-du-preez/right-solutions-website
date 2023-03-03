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
        With our Email Security service, you can have confidence that your
        organization's email systems are{" "}
        <span className="color-blue fw-500">secure</span> and your data is{" "}
        <span className="color-blue fw-500">protected</span> from email-based
        threats.
      </Typography>
    </Box>
  );
}
