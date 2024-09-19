"use client";

import { useForm } from "react-hook-form";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  Paper,
  Avatar,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";

const UpdateProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Form data: ", data);

    try {
      const response = await fetch("/api/user/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      const result = await response.json();
      console.log("Profile updated successfully", result);
      reset(); // Reset form after successful submission
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={8}
          sx={{
            p: 5,
            borderRadius: "20px",
            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 3,
            }}
          >
            Update Your Profile
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={4} justifyContent="center">
              {/* Profile Image Upload */}
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ textAlign: "center", position: "relative" }}
              >
                <Avatar
                  alt="Profile Picture"
                  src={profileImage}
                  sx={{
                    width: 120,
                    height: 120,
                    margin: "0 auto",
                    border: "4px solid #feb47b",
                  }}
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    mt: 2,
                    background: "#feb47b",
                  }}
                  color={"primary"}
                >
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageChange}
                  />
                </Button>
              </Grid>

              {/* Form Fields */}
              <Grid item xs={12} sm={8}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Bio"
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                  {...register("bio", {
                    required: "Bio is required",
                    maxLength: {
                      value: 200,
                      message: "Bio cannot exceed 200 characters",
                    },
                  })}
                  error={!!errors.bio}
                  helperText={errors.bio?.message}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    width: "200px",
                    color: "white",
                    borderRadius: "20px",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  {isSubmitting ? (
                    <CircularProgress size={24} sx={{ color: "white" }} />
                  ) : (
                    "Update Profile"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default UpdateProfile;
