import React from "react";
import ImageComponent from "../../Components/ImageComponent";
import { Box, Typography, Container } from "@mui/material";
import { MdEmojiPeople } from "react-icons/md";
import { FaCrosshairs, FaHandshake } from "react-icons/fa";
import Button from "../../Components/Button";
import { RiArrowRightSLine } from "react-icons/ri";

const SectionEight = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fb" }}>
      <ImageComponent
        src="https://www.zoho.com/sites/zweb/images/zoho_general_pages/core-value-banner-img-in.jpg"
        alt="image"
        width="100%"
      />

      <Container
        sx={{
          backgroundColor: "#fff",
          padding: "100px 100px !important",
          position: "relative",
          top: "-15rem",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            padding: "0 250px",
            marginBottom: "3.5rem",
            fontSize: "2.7rem",
          }}
        >
          The core values and principles that drive us
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "2.5rem" }}>
          <Box sx={{ textAlign: "left", width: "60%" }}>
            <FaHandshake size={50} />
            <Typography variant="h5">Long-term commitment</Typography>
            <Typography>
              25+ years of running a profitable organization gives us a good
              sense of challenges that a growing business faces. We take pride
              in running a sustainable business that’s powered by you, our
              customer.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "left", width: "60%" }}>
            <FaCrosshairs size={50} />
            <Typography variant="h5">
              Focus on research and development
            </Typography>
            <Typography>
              Software is our craft and we back it up with our relentless
              investments in R&D. So much so that we prefer to own the entire
              technology stack, including running our data centers globally.
            </Typography>
          </Box>
          <Box sx={{ textAlign: "left", width: "60%" }}>
            <MdEmojiPeople size={50} />
            <Typography variant="h5">Customer-first philosophy</Typography>
            <Typography>
              In all these years, it's our customers' trust and goodwill that
              has helped us establish a strong position in the market. No matter
              the size of your business, we're here to help you grow.
            </Typography>
          </Box>
        </Box>
        <Button
          backgroundColor="#056CB8"
          text="READ OUR STORY"
          icon={<RiArrowRightSLine />}
        />
      </Container>
    </Box>
  );
};

export default SectionEight;
