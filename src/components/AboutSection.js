"use client";

import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import WifiIcon from "@mui/icons-material/Wifi";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({  }));

const AboutSection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ px: "1.8rem", py: "12rem", pb: "32rem", bgcolor: "#F8F4EB" }}>
      <Container maxWidth="lg" sx={{ position: "relative", width: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: "2.5rem", flex: "1" }}>
            <Typography
              sx={{ textAlign: "center", color: "#D37806" }}
              variant="h6"
            >
              PARK HYATT
            </Typography>

            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#D37806",
                marginBottom: "3rem",
              }}
            >
              The Most Relaxing Hotel at Banani in Dhaka{" "}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "5rem" }}>
              The Park Hyatt, a newly established 3-star hotel in Dhaka, is
              located in Banani, right in the heart of the city’s business
              district and diplomatic area, and is just a short distance from
              the International Airport. Dedicated to providing exceptional
              hospitality, Park Hyatt is designed to cater to the needs of
              corporate and business travelers. The hotel boasts elegantly
              furnished rooms and suites, while its all-day dining restaurants
              serve an array of delectable international dishes crafted by our
              skilled culinary team.
            </Typography>

            {/* <Typography variant="body1">
              Park Hyatt is committed to deliver utmost hospitality services and
              facilities to meet the needs of corporate and business travelers.
            </Typography> */}

            <Typography variant="body1">
              Each of our rooms offers a unique experience, featuring
              contemporary-style bedrooms and luxurious bathrooms equipped with
              the latest amenities, all set against a stunning interior design.
              Known as one of the top hotels in Banani, it is also highly
              accessible within Dhaka.
            </Typography>
          </Box>
          <Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <Image
              alt="room"
              src={`/about.jpg`}
              // placeholder="blur"
              quality={100}
              width={472.5}
              height={630}
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
            display: "flex",
            justifyContent: "space-between",
            mt: "10rem",
            // transform: "translateY(50%)",
            position: "absolute",
            width: "90%",
            // bottom: "-50%",
            // width: "100%",
          }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              height: "400px",
              width: "320px",
              border: "7px solid #736758",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "4rem",
              }}
            >
              <RestaurantIcon sx={{ width: "70px", height: "70px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Free Breakfast
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#736758",
                // marginBottom: "3rem",
              }}
            >
              Enjoy free breakfast from 6:30 AM - 10:30 AM
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              height: "400px",
              width: "320px",
              border: "7px solid #736758",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "4rem",
              }}
            >
              <WifiIcon sx={{ width: "70px", height: "70px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Free WiFi
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                color: "#736758",
                // marginBottom: "3rem",
              }}
            >
              Enjoy free high speed WiFi in all of our rooms
            </Typography>
          </Box>

          <Box
            sx={{
              bgcolor: "#fff",
              height: "400px",
              width: "320px",
              border: "7px solid #736758",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                color: "#736758",
                display: "flex",
                justifyContent: "center",
                marginBottom: "4rem",
              }}
            >
              <AirportShuttleIcon sx={{ width: "70px", height: "70px" }} />
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
              sx={{
                textAlign: "center",
                color: "#736758",
                // marginBottom: "3rem",
              }}
            >
              Free airport pick up if you book for 4+ days
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
