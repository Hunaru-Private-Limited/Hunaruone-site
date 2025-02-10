import React from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaApple,
  FaGithub,
} from "react-icons/fa";
import { TextField, Grid, Typography, Box, useMediaQuery } from "@mui/material";
import ImageComponent from "../../Components/ImageComponent";
import Button from "../../Components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const SignIn = () => {

  return (
    <Grid
      container
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      sx={{ backgroundColor: "#f7fafc", padding: 2 }}
    >
      <Grid
        container
        item
        xs={12}
        sm={10}
        md={9}
        lg={7}
        component="main"
        sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 3 }}
      >
        {/* Left Section - Sign In Form */}
        <Grid
          item
          xs={12}
          md={7}
          p={4}
          sx={{ borderRight: { md: "2px solid #f1f1f1", sm: "none" }, }}
        >
          <ImageComponent
            src="/images/logo.png"
            alt="Logo"
            width="auto"
            height="40px"
          />
          <Typography variant="h5" fontWeight="bold" sx={{ marginTop: "1rem" }}>
            Sign in
          </Typography>
          <Typography variant="body1" color="textSecondary" gutterBottom>
            to access Zoho Home
          </Typography>

          <TextField
            fullWidth
            label="Email address or mobile number"
            variant="outlined"
            margin="normal"
            required
            sx={{ marginBottom: "1rem" }}
          />

          <Button
            text="Next"
            backgroundColor="#159AFF"
            width="100%"
            padding="8px 16px"
            borderRadius="4px"
          />

          <Typography
            variant="body2"
            sx={{ marginTop: "2rem", marginBottom: "1rem" }}
            fontWeight="bold"
          >
            Sign in using
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Button
                backgroundColor="#F2F2F2"
                padding="10px"
                icon={<FaGoogle size={20} style={{ color: "#1E88E5" }} />}
              />
            </Grid>
            <Grid item>
              <Button
                backgroundColor="#1877F2"
                padding="10px"
                icon={<FaFacebookF size={20} style={{ color: "#fff" }} />}
              />
            </Grid>
            <Grid item>
              <Button
                backgroundColor="#0867c2"
                padding="10px"
                icon={<FaLinkedinIn size={20} style={{ color: "#fff" }} />}
              />
            </Grid>
            <Grid item>
              <Button
                backgroundColor="#439EF0"
                padding="10px"
                icon={<FaTwitter size={20} style={{ color: "#fff" }} />}
              />
            </Grid>

            <Grid item>
              <Button
                backgroundColor="#000"
                padding="10px"
                icon={<FaApple size={20} style={{ color: "#fff" }} />}
              />
            </Grid>
            <Grid item>
              <Button
                backgroundColor="#2F2F2F"
                padding="10px"
                icon={<FaGithub size={20} style={{ color: "#fff" }} />}
              />
            </Grid>
          </Grid>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don’t have a Zoho account?{" "}
            <a
              href="#"
              style={{ color: "#1976d2", textDecoration: "underline" }}
            >
              Sign up now
            </a>
          </Typography>
        </Grid>

        {/* Right Section - Illustration */}
          <Grid
            item
            md={5}
            sx={{
              backgroundColor: "#fff",
              display: {md:"flex", xs:"none"},
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 4,
            }}
          >
            {/* Swiper Carousel */}
            <Swiper
              modules={[Pagination, Autoplay]}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              style={{ width: "100%", height: "100%" }}
            >
              {/* Slide 1 */}
              <SwiperSlide>
                <Box textAlign="center">
                  <ImageComponent
                    src="/images/social-thinking.png"
                    alt="Security Illustration"
                    width="200px"
                    height="140px"
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    MFA for all accounts
                  </Typography>
                  <Typography sx={{ mt: 1, marginBottom: "2rem" }}>
                    Secure online accounts with OneAuth 2FA. Back up OTP secrets
                    and never lose access to your accounts.
                  </Typography>
                  <Button
                    textColor="#0091FF"
                    text="Learn More"
                    backgroundColor="#ECF7FE"
                    border="none"
                    borderRadius="18px"
                  />
                </Box>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <Box textAlign="center">
                  <ImageComponent
                    src="/images/fingerprint.png"
                    alt="Security"
                    width="200px"
                    height="140px"
                  />
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    Passwordless sign-in
                  </Typography>
                  <Typography sx={{ mt: 1, marginBottom: "2rem" }}>
                    Move away from risky passwords and experience one-tap access
                    to Zoho. Download and install OneAuth.
                  </Typography>
                  <Button
                    textColor="#0091FF"
                    text="Learn More"
                    backgroundColor="#ECF7FE"
                    border="none"
                    borderRadius="18px"
                    style={{ marginTop: "2rem" }}
                  />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Grid>
      </Grid>
    </Grid>
  );
};

export default SignIn;
