import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Counter from "../../Components/Counter";
import Button from "../../Components/Button";
import { RiArrowRightSLine } from "react-icons/ri";


const SectionSix = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0054A6",
        padding: "90px 0",
        color: "#fff",
        backgroundImage:
          "url('https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/made-ind-bg.png')",
        backgroundSize: "contain", // Adjust size
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom", // Position at the bottom
      }}
    >
      <Container>
        <Typography variant="h3">
          Made in India. <br />
          Made for the World.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={7}>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item xs={6} md={6}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">
                    <Counter start={0} end={100000000} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: "1px solid #3b8ecc" }}
                  >
                    Users Globally
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">
                    <Counter start={0} end={15000} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: "1px solid #3b8ecc" }}
                  >
                    Employees Worldwide
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">
                    <Counter start={0} end={55} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: "1px solid #3b8ecc" }}
                  >
                    Products
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6} md={6}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">
                    <Counter start={0} end={150} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: "1px solid #3b8ecc" }}
                  >
                    Countries Served
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h4">
                    <Counter start={0} end={25} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: "1px solid #3b8ecc" }}
                  >
                    Years in Business
                  </Typography>
                </Box>

                  <Button
                    backgroundColor="transparent"
                    text="MORE ABOUT KCG"
                    borderColor="#fff"
                    icon={<RiArrowRightSLine />}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionSix;
