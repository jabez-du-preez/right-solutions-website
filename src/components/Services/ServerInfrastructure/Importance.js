import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";
import Card from "../../helpers/Card";
import CustomDivider from "../../helpers/CustomDivider";

export default function Importance({ id }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  return (
    <>
      <CustomDivider />
      <Container
        maxWidth="lg"
        sx={{
          mt: 3,
        }}
      >
        <Typography
          id={id}
          className="sub-title color-blue"
          variant="h5"
          textAlign="center"
          sx={{
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            fontWeight: 500,
            fontFamily: "Montserrat",
          }}
        >
          Importance of Server Infrastructure
        </Typography>

        <Grid container spacing={1} sx={{ mt: 3 }}>
          <CSSTransition
            in={inView}
            timeout={1000}
            classNames={{
              enter: "animate-left-enter",
              enterActive: "animate-left-enter-active",
              exit: "animate-right-exit",
              exitActive: "animate-right-exit-active",
            }}
          >
            <Grid ref={ref} item xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{ opacity: 0 }}
                colorClass="bg-white-custom"
                textColorClass="color-black"
                iconBackgroundColor="bg-blue"
                flaticon="fa-solid fa-arrows-rotate"
                headerText="High Availability"
                explainationText="High availability is the ability of a system to continue operating without interruption when one or more of its components fail."
              />
            </Grid>
          </CSSTransition>
          <Grid ref={ref} item xs={12} sm={6} md={4} lg={4}>
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "animate-up-enter",
                enterActive: "animate-up-enter-active",
                exit: "",
                exitActive: "",
              }}
            >
              <Card
                colorClass="bg-white-custom"
                textColorClass="color-black"
                iconBackgroundColor="bg-green"
                flaticon="fa-solid fa-scale-unbalanced"
                headerText="Scalability"
                explainationText="An intelligently designed server infrastructure can be scaled up or down to meet the changing needs of your business."
              />
            </CSSTransition>
          </Grid>
          <Grid ref={ref} item xs={12} sm={6} md={4} lg={4}>
            <CSSTransition
              in={inView}
              timeout={1000}
              classNames={{
                enter: "animate-right-enter",
                enterActive: "animate-right-enter-active",
                exit: "animate-right-exit",
                exitActive: "animate-right-exit-active",
              }}
            >
              <Card
                colorClass="bg-white-custom"
                textColorClass="color-black"
                iconBackgroundColor="bg-purple"
                flaticon="fa-solid fa-building-lock"
                headerText="Security"
                explainationText="Your server infrastructure is the backbone of your business. It needs to be secure and protected from outside threats."
              />
            </CSSTransition>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
