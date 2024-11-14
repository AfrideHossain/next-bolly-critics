"use client";
import ProfileBasicInfo from "@/components/DashBoard/Profile/ProfileBasicInfo";
import {
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const ProfilePage = ({ params }) => {
  const [tabValue, setTabValue] = useState(0);
  const [userInfo, setUserInfo] = useState({});

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  useEffect(() => {
    fetch(`http://localhost:3000/api/profile/user/${params.uid}`, {
      next: { tags: "update-user" },
    })
      .then((res) => res.json())
      .then((result) => setUserInfo(result.userInfo || {}));
  }, [params.uid]);
  // console.log(userInfo);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Card sx={{ p: 3, backgroundColor: "#1e1e1e", color: "#fff" }}>
        {/* Profile basic info */}
        <ProfileBasicInfo profileInfo={userInfo} />

        <Box mt={4}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <Tab label="Profile" />
            <Tab label="Settings" />
            {/* <Tab label="Activity" /> */}
          </Tabs>
          <Box mt={2}>
            {tabValue === 0 && <ProfileTab userInfo={userInfo} />}
            {tabValue === 1 && <SettingsTab />}
            {/* {tabValue === 2 && <ActivityTab />} */}
          </Box>
        </Box>
      </Card>
    </Container>
  );
};

// Profile Tab
const ProfileTab = ({ userInfo }) => (
  <Box>
    <Typography variant="h5">About Me</Typography>
    <Typography variant="body1" color="gray" mt={2}>
      {userInfo?.bio || ""}
    </Typography>
  </Box>
);

// Settings Tab
const SettingsTab = () => (
  <Box>
    <Typography variant="h5">Settings</Typography>
    <Typography variant="body1" color="gray" mt={2}>
      Account settings can be updated here. You can change your email, password,
      and notification preferences.
    </Typography>
    {/* Add your settings form or UI components here */}
  </Box>
);

// Activity Tab
// const ActivityTab = () => (
//   <Box>
//     <Typography variant="h5">Recent Activity</Typography>
//     <Typography variant="body1" color="gray" mt={2}>
//       - Joined 3 new projects this week <br />
//       - Submitted 4 new reviews <br />- Updated your profile photo
//     </Typography>
//   </Box>
// );

export default ProfilePage;
