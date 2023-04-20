import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

export default function ReusableConclusion({ conclusion }) {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return (
    <Box
      ref={ref}
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
      <CSSTransition
        in={show}
        appear
        timeout={1500}
        classNames={{
          enter: "hero-header-enter",
          enterActive: "hero-header-enter-active",
          appear: "hero-header-enter",
          appearActive: "hero-header-enter-active",
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
      </CSSTransition>
    </Box>
  );
}
