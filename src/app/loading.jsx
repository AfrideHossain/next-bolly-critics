import { Box, CircularProgress, Container } from "@mui/material";

const loading = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress color="primary" />
      </Box>
    </Container>
  );
};

export default loading;
