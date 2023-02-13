import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function TextSecondGridItem({
  backgroundClass,
  headerText,
  explainationText,
  imageAlt,
  imageSrc,
}) {
  return (
    <Box
      sx={{
        mt: 6,
      }}
    >
      <Grid
        container
        className={`lift-on-hover ${backgroundClass}`}
        spacing={2}
        sx={{
          padding: {
            xs: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "2rem 8rem",
          },
          boxShadow: "0.1rem 0.1rem 1rem 0 rgba(0, 0, 0, 0.05)",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            paddingBottom: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 auto",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "90%",
                sm: "90%",
              },
              height: {
                lg: "100%",
              },
              margin: "1rem auto",
            }}
          >
            <img
              className="border-radius light-shadow"
              src={imageSrc}
              alt={imageAlt}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{
            padding: 0,
          }}
          sx={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: 550,
              padding: "1rem",
              color: "white",
              fontSize: {
                sm: "1.25rem",
                md: "1.25rem",
                lg: "2rem",
              },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
              },
            }}
          >
            {headerText}
          </Typography>
          <Typography
            sx={{
              fontWeight: 300,
              padding: "1rem",
              color: "white",
              fontSize: {
                sm: "1.25rem",
                md: "1.25rem",
                lg: "1.5rem",
              },
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
                lg: "left",
              },
            }}
          >
            {explainationText}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
