import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Link,
  Typography,
} from "@mui/material";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <BottomNavigation
      sx={{ mt: 10, flexDirection: "column", alignItems: "center" }}
    >
      <Typography variant="h5" component={"h1"} fontWeight={700}>
        Bolly Critics
      </Typography>
      <Typography variant="body1" component={"p"}>
        Your guide to honest bollywood reviews
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          py: 3,
        }}
      >
        <Link variant="h5" href={"https://facebook.com"}>
          <MdFacebook />
        </Link>
        <Link variant="h5" href={"https://instagram.com"}>
          <FaInstagram />
        </Link>
        <Link variant="h5" href={"https://linkedin.com"}>
          <FaLinkedin />
        </Link>
      </Box>
    </BottomNavigation>
  );
};

export default Footer;
