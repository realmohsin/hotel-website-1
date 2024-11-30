"use client";

import "@/slick-arrows.css";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import PoolIcon from "@mui/icons-material/Pool";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import { Box, Button, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
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

const FacilitiesSection = () => {
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
    <Box sx={{ py: "14rem", bgcolor: "#F8F4EB" }}>
      <Container maxWidth="lg" sx={{}}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: "10rem" }}
        >
          Our Facilities
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            // "& > div": { padding: "1rem" },
          }}
        >
          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <AirportShuttleIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Airport Pickup
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Free airport pick up if you book for 4+ days
            </Typography>
          </Box>

          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <LocalCafeIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Welcome Drinks
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Delicious welcome tea on arrival
            </Typography>
          </Box>

          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <RestaurantIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Breakfast Buffet
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Enjoy free breakfast from 6:30 AM - 10:30 AM
            </Typography>
          </Box>

          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <WifiIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              High Speed WiFi
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Enjoy high speed WiFi in every room
            </Typography>
          </Box>

          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <PoolIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Swimming Pool
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Visit our swimming pool at any time of day!
            </Typography>
          </Box>

          <Box
            sx={{
              width: "33.33%",
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              mb: "13rem",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "1rem",
              }}
            >
              <FitnessCenterIcon sx={{ width: "60px", height: "60px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Spa & Gym
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Our gym and spa are available for you anytime
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <Button variant="contained" sx={{ mt: "3rem" }}>
          Call for more details
        </Button>
      </Box>
    </Box>
  );
};

export default FacilitiesSection;
