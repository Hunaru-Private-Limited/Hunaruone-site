import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import Counter from "../../Components/Counter";
import Button from "../../Components/Button";
import { RiArrowRightSLine } from "react-icons/ri";


const MadeIn = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0054A6",
        padding: "90px 0",
        color: "#fff",
        backgroundImage: {
          md: "url('https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/made-ind-bg.png')",
          xs: "none"
        },
        backgroundSize: "contain", // Adjust size
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom", // Position at the bottom
      }}
    >
      <Container>
        <Typography variant="h3" sx={{ textAlign: { md: "left", xs: "center" }, fontSize: { xs: "2.5rem" } }}>
          Made in India. <br />
          Made for the World.
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
              <Grid item xs={6} md={6}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, marginBottom: "2rem" }}>
                  <Typography variant="h4" sx={{ textAlign: { md: "left", xs: "center" } }}>
                    <Counter start={0} end={100000000} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: { md: "1px solid #3b8ecc", xs: "none" }, textAlign: { md: "left", xs: "center" }, marginTop: { xs: "1rem", md: 0 } }}
                  >
                    Users Globally
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: { md: "space-between", xs: "center" }, flexDirection: { xs: "column", md: "row" }, marginBottom: "2rem" }}>
                  <Typography variant="h4" sx={{ textAlign: { md: "left", xs: "center" } }}>
                    <Counter start={0} end={15000} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: { md: "1px solid #3b8ecc", xs: "none" }, textAlign: { md: "left", xs: "center" }, marginTop: { xs: "1rem", md: 0 } }}
                  >
                    Employees Worldwide
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, marginBottom: "2rem" }}>
                  <Typography variant="h4" sx={{ textAlign: { md: "left", xs: "center" } }}>
                    <Counter start={0} end={55} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: { md: "1px solid #3b8ecc", xs: "none" }, textAlign: { md: "left", xs: "center" }, marginTop: { xs: "1rem", md: 0 } }}
                  >
                    Products
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6} md={6}>
                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, marginBottom: "2rem" }}>
                  <Typography variant="h4" sx={{ textAlign: { md: "left", xs: "center" } }}>
                    <Counter start={0} end={150} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: { md: "1px solid #3b8ecc", xs: "none" }, textAlign: { md: "left", xs: "center" }, marginTop: { xs: "1rem", md: 0 } }}
                  >
                    Countries Served
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", md: "row" }, marginBottom: "2rem" }}>
                  <Typography variant="h4" sx={{ textAlign: { md: "left", xs: "center" } }}>
                    <Counter start={0} end={25} duration={2000} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ borderBottom: { md: "1px solid #3b8ecc", xs: "none" }, textAlign: { md: "left", xs: "center" }, marginTop: { xs: "1rem", md: 0 } }}
                  >
                    Years in Business
                  </Typography>
                </Box>

                <Box sx={{ textAlign: { md: "left", xs: "center" } }}>
                  <Button
                    backgroundColor="transparent"
                    text="MORE ABOUT KCG"
                    borderColor="#fff"
                    icon={<RiArrowRightSLine />}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MadeIn;
