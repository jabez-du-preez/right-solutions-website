import { Box, Typography } from "@mui/material";
import React from "react";
import bannerImage from "../../assets/images/banners/laptop1.jpg";
import BacktoTopCom from "../helpers/BackToTopCom";
import Layouts from "../helpers/Layouts";
import EndpointCards from "./Endpoint-Cards";

export default function EndPoint() {
  return (
    <Layouts
      pageTitle="Let us manage your"
      highlight="Endpoint Security"
      bannerImage={bannerImage}
    >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography
          variant="p"
          className="dark-grey"
          textAlign="center"
          sx={{
            mt: 5,
            fontWeight: 400,
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}
        >
          What is endpoint security?
        </Typography>
        <Typography
          variant="h4"
          className="color-blue"
          textAlign="center"
          sx={{
            mt: 2,
            fontWeight: 500,
            textTransform: "capitalize",
            fontFamily: "Montserrat",
          }}
        >
          Allow us to explain
        </Typography>
      </Box>
      <EndpointCards />
      <BacktoTopCom className=".main-header" />
    </Layouts>
  );
}
