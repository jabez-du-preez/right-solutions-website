import { Box, Typography } from "@mui/material";
import React from "react";

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
        With our Managed Backup Solution, you can have peace of mind knowing
        that your organization's data is being{" "}
        <span className="color-blue fw-500">properly protected</span> and is{" "}
        <span className="color-blue fw-500">always available</span> when needed.
      </Typography>
    </Box>
  );
}
