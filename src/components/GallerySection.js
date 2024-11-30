"use client";

import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
// import Image from "next/image";

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    isSelected: true,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];

const useStyles = makeStyles((theme) => ({}));

const GallerySection = () => {
  const classes = useStyles();

  return (
    <Box sx={{ position: "relative", height: "824px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          // padding: "2rem",
        }}
      >
        <Link href="/gallery">
          <Button variant="contained" sx={{}} size="large">
            Visit Gallery
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="room"
            src={`/gallery-section-1.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="Mountains"
            src={`/gallery-section-2.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="Mountains"
            src={`/gallery-section-3.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="Mountains"
            src={`/gallery-section-4.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="Mountains"
            src={`/gallery-section-5.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>

        <Box
          sx={{
            width: "33.33%",
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            alt="Mountains"
            src={`/gallery-section-6.jpg`}
            // placeholder="blur"
            quality={100}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
      {/* <Typography variant="h2">Gallery</Typography>
      <Gallery images={images} /> */}
    </Box>
  );
};

export default GallerySection;
