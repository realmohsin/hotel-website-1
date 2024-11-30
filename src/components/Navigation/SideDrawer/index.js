// import { Link } from 'gatsby'
// import { makeStyles } from "@material-ui/core";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { StaticImage } from "gatsby-plugin-image";
import Image from "next/image";
import Link from "next/link";
import CSSTransition from "react-transition-group/CSSTransition";

const useStyles = makeStyles((theme) => ({
  sideDrawer: {
    position: "fixed",
    width: "280px",
    maxWidth: "74%",
    height: "100%",
    left: 0,
    top: 0,
    backgroundColor: theme.palette.secondary.main,
    boxShadow: "3px 0px 10px 2px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.4s ease-out",
    transform: "translateX(-104%)",
    zIndex: 102,
    overflowY: "scroll",
    scrollbarWidth: "none",
    "&.showing": {
      transform: "translateX(0)",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  backdrop: {
    width: "100%",
    height: "100%",
    position: "fixed",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    transition: "all 0.5s",
    zIndex: 101,
    "&.fade-enter": {
      opacity: 0,
    },
    "&.fade-enter-active": {
      opacity: 1,
    },
    "&.fade-exit": {
      opacity: 1,
    },
    "&.fade-exit-active": {
      opacity: 0,
    },
  },
  sideDrawerNav: {
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },

  link: {
    color: theme.palette.primary.dark,
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    wordSpacing: "1.2px",
    fontSize: "1.3rem",
    display: "flex",
    height: "5rem",
    borderBottom: `1px solid #D6EDFA`,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    fontWeight: "normal",
  },
  logoContainer: {
    padding: "4rem 2.5rem 4rem",
    display: "flex",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    margin: "0 auto",
  },
  subMenuUl: {
    boxShadow: "inset 0 0 5px 2px rgba(0,0,0,.2)",
  },
  subMenuSectionLink: {
    paddingLeft: "3.6rem",
  },
}));

const SideDrawer = ({ showing, closeSideDrawer }) => {
  const classes = useStyles();

  const sideDrawerClasses = [classes.sideDrawer];
  if (showing) {
    sideDrawerClasses.push("showing");
  }
  return (
    <>
      <CSSTransition in={showing} unmountOnExit classNames="fade" timeout={500}>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */}
        <Box
          className={classes.backdrop}
          onClick={closeSideDrawer}
          sx={{ display: { xs: "block", md: "none" } }}
        />
      </CSSTransition>

      <Box
        className={sideDrawerClasses.join(" ")}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <div className={classes.logoContainer}>
          <Image
            src="/logo.png"
            width={367}
            height={225}
            alt="Logo"
            className={classes.logo}
          />
        </div>

        <nav className={classes.sideDrawerNav}>
          <ul>
            <li>
              <Link href={`/`} className={classes.link}>
                Home
              </Link>
            </li>

            <li>
              <Link href={`/about`} className={classes.link}>
                About
              </Link>
            </li>

            <li>
              <Link href={`/services`} className={classes.link}>
                Services
              </Link>
            </li>

            <li>
              <Link href={`/gallery`} className={classes.link}>
                Gallery
              </Link>
            </li>
            {/* 
            <li>
              <Link href={`/careers`} className={classes.link}>
                Careers
              </Link>
            </li> */}

            <li>
              <Link href={`/contact`} className={classes.link}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Box>
    </>
  );
};

export default SideDrawer;
