import { Box, Typography } from "@mui/material";
import React from "react";

export default function ReusableConclusion({ conclusion }) {
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
            xs: "1.25rem",
            sm: "1.25rem",
            md: "1.25rem",
            lg: "1.5rem",
          },
          fontFamily: "Montserrat",
        }}
      >
        {conclusion}
      </Typography>
    </Box>
  );
}
