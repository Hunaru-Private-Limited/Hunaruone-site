import React from "react";
import { Box, Typography, ImageList, ImageListItem, Container, Link } from "@mui/material";
import { RiArrowRightSLine } from "react-icons/ri";

const imgData = [
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/iifl.svg", title: "IIFL FINANCE" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/spicejet.svg", title: "SPICEJET" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/loreal.svg", title: "LOREAL GROUP" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/amazon.svg", title: "AMAZON" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/tata-play.svg", title: "TATA PLAY" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/zomato.png", title: "ZOMATO" },
  { img: "https://www.zohowebstatic.com/sites/zweb/images/otherbrandlogos/max-life-insurance.svg", title: "MAX LIFE" }
];

const BrandsBanner = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fb", padding: "90px 0", textAlign: "center" }}>
      <Container>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          BRANDS THAT TRUST US
        </Typography>
        <hr style={{ backgroundColor: "#f60014", height: "1px", width: "40px", margin: "auto", marginBottom: "20px", border:"none" }} />

        <ImageList
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginBottom: "2rem"
          }}
        >
          {imgData.map((images) => (
            <ImageListItem key={images.img}>
              <img
                srcSet={`${images.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${images.img}?w=164&h=164&fit=crop&auto=format`}
                alt={images.title}
                loading="lazy"
                style={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain"
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Box sx={{display: "flex", alignItems: "center", justifyContent:"center", color:"#056cb8"}}>
            <Link href="#" underline="none" sx={{fontSize:"1.2rem"}}>Customer Stories</Link> <RiArrowRightSLine/>
        </Box>
      </Container>
    </Box>
  );
};

export default BrandsBanner;
