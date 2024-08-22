import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Links from "../Links/Links";
import MenuComponent from "../MenuComponent/MenuComponent";
import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";

const Navbar = async () => {
  const session = await auth();
  // const user = session?.user;
  // console.log("Session from navbar: ", session);
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
          <MenuComponent session={session} />
          <Typography variant="h6" sx={{ fontWeight: 700 }} color={"inherit"}>
            Bolly Critics
          </Typography>
          <Box
            sx={{
              display: { md: "flex", xs: "none" },
              gap: 2,
            }}
          >
            <Links session={session} />
          </Box>
          <Box>
            {!session ? (
              <Button variant="contained" color="secondary" href="/login">
                Login
              </Button>
            ) : (
              <form action={handleLogout}>
                <Button type="submit" variant="contained" color="error">
                  Logout
                </Button>
              </form>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navbar;
