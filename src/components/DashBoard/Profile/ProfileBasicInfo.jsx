import { Avatar, Box, Button, Typography } from "@mui/material";

const ProfileBasicInfo = ({ profileInfo }) => {
  const { username, email, createdAt, img, _id } = profileInfo;
  return (
    <Box display="flex" alignItems="center">
      <Avatar
        src={img || ""}
        alt="User Avatar"
        sx={{ width: 100, height: 100, mr: 3 }}
      />
      <Box>
        <Typography variant="h4">{username}</Typography>
        <Typography variant="body1" color="gray">
          {email}
        </Typography>
        <Typography variant="body2" color="gray">
          {`"Joined on ${new Date(createdAt).toLocaleDateString("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}"`}
        </Typography>
        <Button
          href={`/dashboard/profile/update/${_id}`}
          variant="contained"
          sx={{ mt: 2 }}
          color={"primary"}
        >
          Edit Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileBasicInfo;
