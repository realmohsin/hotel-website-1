"use client";

import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const AboutMain = () => {
  const classes = useStyles();

  return (
    <Box sx={{ px: "1.8rem", py: "12rem", pb: "15rem", bgcolor: "#F8F4EB" }}>
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
              Stay luxuriously in Banani, Dhaka{" "}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "5rem" }}>
              The Park Hyatt, a recently opened 3-star hotel in Dhaka, is
              situated in Banani, at the center of the city's business and
              diplomatic districts, and conveniently close to the International
              Airport. Committed to offering outstanding hospitality, Park Hyatt
              is tailored to meet the needs of corporate and business guests.
              The hotel features stylishly furnished rooms and suites, and its
              all-day dining restaurants present a variety of exquisite
              international cuisine prepared by our expert chefs.
            </Typography>

            {/* <Typography variant="body1">
              Park Hyatt is committed to deliver utmost hospitality services and
              facilities to meet the needs of corporate and business travelers.
            </Typography> */}

            <Typography variant="body1">
              Each of our rooms is uniquely designed, showcasing
              contemporary-style bedrooms and luxurious bathrooms fitted with
              the latest amenities and facilities, all set within a stunning
              interior. Recognized as one of Banani’s finest hotels, it also
              stands out as one of Dhaka’s most accessible accommodations.
            </Typography>
          </Box>
          <Box sx={{ flex: "1", display: "flex", justifyContent: "center" }}>
            <Image
              alt="room"
              src={`/about-main.jpg`}
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
      </Container>
    </Box>
  );
};

export default AboutMain;
