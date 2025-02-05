import React from 'react';
import { Box } from "@mui/material";
import Navigation from "../../Components/Navigation"; 
import Banner from "./Banner"; 
import Footer from "../../Components/Footer";
import SectionOne from "./SectionOne";
import BrandsBanner from "./BrandsBanner";
import Enterprise from "./Enterprise";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionNine from "./SectionNine";
import SectionEight from "./SectionEight";

const Landing = () => {
  return (
    <>
      <Navigation/>
      <Box sx={{padding: "180px 0 0 0", backgroundColor: "#f8f9fb"}}>
        <Banner/>
      </Box> 
      <SectionOne/>
      <BrandsBanner/>
      <Enterprise/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <Footer/>
    </>
  );
};

export default Landing;
