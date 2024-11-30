"use client";

import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import Image from "next/image";

const useStyles = makeStyles((theme) => ({}));

const ContactMain = () => {
  const classes = useStyles();

  return (
    <Box sx={{}}>
      <Container maxWidth="lg" sx={{}}>
        <Box
          sx={{
            borderRadius: "200px",
            bgcolor: "#F8F4EB",
            width: "100%",
            height: "360px",
            display: "flex",
            mt: "7rem",
          }}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
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
              <CallIcon sx={{ width: "45px", height: "45px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Call Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              +880 1720-045840
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
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
              <LocationOnIcon sx={{ width: "45px", height: "45px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Address
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              Plot # 35, Road#1/A, Block # I, <br />
              Banani, Dhaka - Bangladesh
            </Typography>
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
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
              <EmailIcon sx={{ width: "45px", height: "45px" }} />
            </Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#736758",
                marginBottom: "2rem",
              }}
            >
              Email Us
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", color: "#736758" }}
            >
              raafsar@gmail.com <br />
              rashid.afsar42@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactMain;
