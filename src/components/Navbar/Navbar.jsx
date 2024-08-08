import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import Links from "../Links/Links";
import MenuComponent from "../MenuComponent/MenuComponent";

const Navbar = () => {
  return (
    <Container maxWidth="xl">
      <AppBar
        position="static"
        variant={"elevation"}
        color="primary"
        enableColorOnDark
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <MenuComponent />
          <Typography variant="h6" sx={{ fontWeight: 700 }} color={"inherit"}>
            NextMat
          </Typography>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              gap: 2,
            }}
          >
            <Links />
          </Box>
          <Box>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
