"use client";

import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
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

const ContactHeader = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        // py: "14rem",
        color: "white",
        bgcolor: "#000",
        height: "380px",
        position: "relative",
      }}
    >
      <Box
        sx={{ position: "absolute", zIndex: 10, width: "100%", height: "100%" }}
      >
        <Image
          alt="Mountains"
          src={`/about-header.jpg`}
          // placeholder="blur"
          quality={100}
          // layout="fill"
          // objectFit="cover"
          fill
          // sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          zIndex: 20,
          width: "100%",
          height: "100%",
          bgcolor: "#0D0D0D",
          opacity: "0.5",
        }}
      ></Box>
      <Container
        maxWidth="lg"
        sx={{ height: "100%", zIndex: 50, position: "relative" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Typography variant="h4" sx={{ fontSize: "6.6rem", mt: "5rem" }}>
            Contact Us
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactHeader;
