import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function TextFirstGridItem({
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
        className={`fadeIn lift-on-hover ${backgroundClass}`}
        spacing={3}
        sx={{
          padding: {
            xs: "1rem",
            sm: "1rem",
            md: "1rem",
            lg: "2rem 8rem",
          },
        }}
        order={{ xs: 1, md: 2 }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          className="first"
          style={{ padding: "0px" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Typography
            color="#008ACB"
            fontFamily="Montserrat"
            sx={{
              fontWeight: 550,
              fontSize: {
                sm: "1.75rem",
                md: "1.75rem",
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
            color="white"
            fontFamily="Montserrat"
            sx={{
              fontWeight: 400,
              mt: 5,
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
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          className="second"
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
      </Grid>
    </Box>
  );
}
