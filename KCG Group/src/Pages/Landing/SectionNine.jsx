import React from "react";
import { Typography, Container, Box, Grid } from "@mui/material";
import ImageComponent from "../../Components/ImageComponent";
import Button from "../../Components/Button";
import { RiArrowRightSLine } from "react-icons/ri";

const SectionNine = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fb" }}>
      <Container sx={{ padding: "100px 0" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" sx={{ paddingBottom: "1rem" }}>
              Forbes
            </Typography>
            <Typography variant="h3" sx={{ paddingBottom: "0.9rem" }}>
              Preparing Zoho <br />
              for the rise of India
            </Typography>
            <Typography
              sx={{ fontSize: "1.12rem", lineHeight: "1.7", width: "90%", paddingBottom: "2rem"  }}
            >
              "Zoho's CEO believes it is inevitable that the country will become
              the biggest market for the company. Zoho is working on software
              that can help developers generate correct code 'by design'. At
              some point, Zoho will begin to apply this technology to building
              its future products."
            </Typography>
            <Button
              textColor="#056cb8"
              backgroundColor="transparent"
              text="MORE ON FORBES"
              borderColor="#056cb8"
              icon={<RiArrowRightSLine />}
            />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: "center" }}>
            <ImageComponent
              src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-forbes-new-2024.webp"
              alt="image"
              width="340px"
              height="400px"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionNine;
