import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import ImageComponent from "../../Components/ImageComponent";
import Button from "../../Components/Button";
import { FaQuoteLeft } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";

const Enterprise = () => {
  return (
    <Box>
      <Container sx={{ padding: "0 100px" }}>
        <Grid container spacing={2} sx={{alignItems: "center"}}>
          <Grid xs={12} md={6} sx={{order: {md:1, xs:2}, marginTop: {md:"0", xs:"4rem"}, textAlign: {md:"left", xs:"center"}}}>
            <ImageComponent
              src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-enterprise-illus.svg"
              alt="Enterprise image"
              width="525px"
              height="305"
            />
            <Box
              sx={{
                position: "relative",
                top: -20,
                right: -50,
                width: 45,
                height: 45,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "#000",
                color: "#fff",
                fontSize: "18px",
              }}
            >
              <FaQuoteLeft />
            </Box>

            <Box sx={{ display: "flex", flexDirection: {xs:"column", md: "row"}}}>
              <Box>
                <Typography
                  variant="p"
                  sx={{ fontSize: "1.3rem", lineHeight: "1.5" }}
                >
                  "With our complete business under control, our productivity is
                  up by 80% in the last year that we have been using Zoho."
                </Typography>

                <Box sx={{marginTop: "2rem"}}>
                  <Typography sx={{ fontSize: "1.25rem", fontWeight: "600" }}>
                    Thomas John
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.12rem",
                      lineHeight: "1.7",
                    }}
                  >
                    Managing Director, Agappe Diagnostics
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ width: "100%", marginTop: {xs:"2rem", md: 0} }}>
                <ImageComponent
                  src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zh-video-poster-prakash.png"
                  alt="Banner image"
                  radius="50%"
                  width="7rem"
                  height="8rem"
                />
                <Box>
                  <Link
                    href="#"
                    underline="none"
                    sx={{ fontSize: "0.8rem", fontWeight: "600" }}
                  >
                    READ THE STORY <RiArrowRightSLine />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6} sx={{paddingLeft: "60px", width: {md:"50%", xs:"100%"}, order: {md:2, xs:1}, textAlign: {md:"left", xs:"center"}}}>
            <Box>
              <ImageComponent
                src="https://www.zohowebstatic.com/sites/zweb/images/producticon/enterprise-en-in.svg"
                alt="Enterprise image"
                width="200px"
                height="5%"
              />
              <Typography
                sx={{
                  paddingTop: "1rem",
                  paddingBottom: "1.5rem",
                  fontSize: "1.2rem",
                  fontWeight: "100",
                  lineHeight: "1.7",
                }}
              >
                Experience the breadth and depth of the Zoho ecosystem, with the
                professional services, infrastructure, support, and security
                that a large business needs. Streamline complex business
                processes, build strong relationships with your customers, and
                drive growth at scale.
              </Typography>
              <Button
                backgroundColor="#056cb8"
                text="LEARN MORE"
                icon={<RiArrowRightSLine />}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Enterprise;
