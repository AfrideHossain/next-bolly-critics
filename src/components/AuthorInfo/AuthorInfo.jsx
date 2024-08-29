import { Box, Stack, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getAuthorInfoById } from "@/lib/data";

const AuthorInfo = async ({ authorIdNDate }) => {
  const { authorId, posted } = authorIdNDate;
  const author = await getAuthorInfoById(authorId);
  return (
    <Stack
      spacing={2}
      sx={{ p: 2, bgcolor: "rgba(255,255,255,.2)", borderRadius: 2 }}
    >
      <Typography
        variant="body1"
        component={"p"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <PersonOutlineIcon />
        {author.username}
      </Typography>
      <Typography
        variant="body1"
        component={"p"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <EmailIcon />
        {author.email}
      </Typography>
      <Typography variant="body2" component={"p"}>
        Posted on,
      </Typography>
      <Typography
        variant="body1"
        component={"p"}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AccessTimeIcon />
        {new Date(posted).toGMTString()}
      </Typography>
    </Stack>
  );
};

export default AuthorInfo;
