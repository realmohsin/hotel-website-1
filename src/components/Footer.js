"use client";

import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  // mapSection: {
  //   "& iframe": {
  //     filter: "grayscale(50%)",
  //     maxHeight: "35rem",
  //     maxWidth: "100%",
  //   },
  // },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        // py: "14rem",
        color: "white",
        bgcolor: "#000",
        height: "70px",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>HOTEL PARK HYATT 2024 &copy; All Rights Reserved</Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
