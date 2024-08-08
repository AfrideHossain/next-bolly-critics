import { Box, Typography } from "@mui/material";

const Heading = ({ title }) => {
  return (
    <Box
      sx={{
        py: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        paddingX={2}
        paddingBottom={1}
        variant="h4"
        fontWeight={700}
        borderBottom={2}
        borderColor={"primary.main"}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Heading;
