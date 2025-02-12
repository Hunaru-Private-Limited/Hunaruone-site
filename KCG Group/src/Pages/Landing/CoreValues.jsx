import React from "react";
import ImageComponent from "../../Components/ImageComponent";
import { Box, Typography, Container, Grid } from "@mui/material";
import { MdEmojiPeople } from "react-icons/md";
import { FaCrosshairs, FaHandshake } from "react-icons/fa";
import Button from "../../Components/Button";
import { RiArrowRightSLine } from "react-icons/ri";

const CoreValues = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fb" }}>
      {/* Banner Image */}
      <ImageComponent
        src="https://www.zoho.com/sites/zweb/images/zoho_general_pages/core-value-banner-img-in.jpg"
        alt="image"
        width="100%"
      />

      {/* Main Content Container */}
      <Container
        sx={{
          backgroundColor: "#fff",
          padding: { xs: "50px 20px", sm: "60px 40px", md: "100px 100px" },
          position: "relative",
          top: { xs: "0rem", lg: "-15rem" },
          textAlign: "center",
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            padding: { xs: "0 10px", sm: "0 50px", md: "0 200px" },
            marginBottom: "3rem",
            fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.7rem" },
          }}
        >
          The core values and principles that drive us
        </Typography>

        {/* Core Values Section */}
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "left" }}>
              <FaHandshake size={40} />
              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Long-term commitment
              </Typography>
              <Typography fontSize={{ xs: "14px", md: "16px" }}>
                25+ years of running a profitable organization gives us a good
                sense of challenges that a growing business faces. We take pride
                in running a sustainable business that’s powered by you, our
                customer.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "left" }}>
              <FaCrosshairs size={40} />
              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Focus on research and development
              </Typography>
              <Typography fontSize={{ xs: "14px", md: "16px" }}>
                Software is our craft and we back it up with our relentless
                investments in R&D. So much so that we prefer to own the entire
                technology stack, including running our data centers globally.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: "left" }}>
              <MdEmojiPeople size={40} />
              <Typography variant="h6" sx={{ marginTop: "10px" }}>
                Customer-first philosophy
              </Typography>
              <Typography fontSize={{ xs: "14px", md: "16px" }}>
                In all these years, it's our customers' trust and goodwill that
                has helped us establish a strong position in the market. No
                matter the size of your business, we're here to help you grow.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Button */}
        <Box sx={{ marginTop: "3rem" }}>
          <Button
            backgroundColor="#056CB8"
            text="READ OUR STORY"
            icon={<RiArrowRightSLine />}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CoreValues;
