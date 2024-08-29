// src/app/not-found.js
"use client";

import { Box, Typography, Button, Paper } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/"); // Navigate back to the homepage
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      sx={{
        background: "radial-gradient(circle, #222222, #111111, #121212)",
        color: "#ffffff",
        textAlign: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 5,
          maxWidth: "600px",
          backgroundColor: "#333333",
          borderRadius: 4,
          color: "#ffffff",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ff6b6b, #d76d77)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
          Well, this is awkward...
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {`You’ve reached the edge of the internet, and it’s a bit lonely out
          here. Maybe try the homepage for some familiar territory.`}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
          sx={{
            background: "linear-gradient(45deg, #ff6b6b, #d76d77)",
            color: "#fff",
            fontWeight: "bold",
            "&:hover": {
              background: "linear-gradient(45deg, #d76d77, #ff6b6b)",
            },
          }}
        >
          Take Me Home, Country Roads
        </Button>
      </Paper>
    </Box>
  );
};

export default NotFoundPage;
