"use client";

import "@/slick-arrows.css";
import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const useStyles = makeStyles((theme) => ({
  slider: {
    backgroundColor: "red",
    height: "100%",
    // // height: "80rem",
    // height: "100vh",
    // width: "100%",
    // // maxWidth: "158rem",
    // // margin: "0 auto",
    // cursor: "move" /* fallback if grab cursor is unsupported */,
    // cursor: "grab",
    // // overflow: 'visible',
    // "&:active": {
    //   cursor: "grabbing",
    // },
    "& div": {
      // width: "100%",
      height: "100%",
    },
  },
  button: {
    position: "absolute",
    left: "9%",
    bottom: "15%",
    "@media (max-width: 1525px)": {
      left: "6%",
      bottom: "20%",
    },
    [theme.breakpoints.down("md")]: {
      bottom: "25%",
      left: "7%",
      transform: "scale(0.9)",
    },
    "@media (max-width: 1245px)": {
      left: "5%",
    },
    "@media (max-width: 1125px)": {
      left: "2%",
      bottom: "35%",
      transform: "scale(0.75)",
    },
    [theme.breakpoints.down("sm")]: {
      position: "static",
      transform: "scale(1)",
      margin: "6rem auto",
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem auto",
      right: "15%",
    },
  },
}));

const Rooms = () => {
  const classes = useStyles();

  const settings = {
    fade: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: "true",
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  const list = [1, 2, 3, 4];

  return (
    <Box sx={{ py: "10rem", color: "#515151", pb: "1rem" }}>
      <Container maxWidth="lg" sx={{}}>
        <Box>
          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "5rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Standard Room
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular standard room for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 3500++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-1.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "5rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Standard Deluxe
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Standard Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 4000++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-2.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "5rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Executive Deluxe
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 4500++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-3.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "5rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Twin Deluxe
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Twin Deluxe for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 5000++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-4.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "5rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Executive Suite
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Executive Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 5500++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-5.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: "3rem 5rem 3rem 8rem",
              bgcolor: "#F8F4EB",
              marginBottom: "1rem",
              display: "flex",
              borderRadius: "4rem",
              height: "435px",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", marginTop: "7rem" }}
              >
                Park Suite
              </Typography>
              <Typography variant="paragraph" sx={{ textAlign: "center" }}>
                {/* Park Hyatt is committed to deliver utmost hospitality services
                and facilities to meet the needs of corporate and business
                travelers. */}
                Choose Park Hyatt's popular Park Suite for the utmost in
                hospitality service. We are committed to meeting all your needs
                during your stay!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  variant="body1"
                  sx={{
                    mt: "4rem",
                    fontSize: "2.2rem",
                    color: "green",
                    mb: "2rem",
                  }}
                >
                  Rate starting at 6000++ BDT
                </Typography>
                <Button variant="outlined">Call to Book Now!</Button>
              </Box>
            </Box>
            <Box sx={{ flex: 1, display: "flex", justifyContent: "right" }}>
              <Image
                alt="Room"
                src={`/room-6.jpg`}
                // placeholder="blur"
                quality={100}
                width={375}
                height={375}
                // fill
                // sizes="100vw"
                // style={{
                //   objectFit: "cover",
                // }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Rooms;
