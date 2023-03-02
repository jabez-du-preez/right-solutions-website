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
        mt: 10,
      }}
    >
      <Grid
        container
        className={`fadeIn ${backgroundClass}`}
        spacing={3}
        sx={{
          padding: {
            xs: "1rem 3rem",
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
            color="white"
            sx={{
              fontFamily: "Montserrat",
              fontWeight: 550,
              fontSize: "2rem",
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
              padding: {
                sm: "0 2rem",
                md: "0 1rem",
                lg: "0 0",
              },
              fontWeight: 400,
              mt: 5,
              fontSize: "1.25rem",
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
