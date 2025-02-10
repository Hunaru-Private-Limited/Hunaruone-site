import React from 'react';
import { Box } from "@mui/material";
import Navigation from "../../Components/Navigation"; 
import Banner from "./Banner"; 
import Footer from "../../Components/Footer";
import AllInOne from "./AllInOne";
import BrandsBanner from "./BrandsBanner";
import Enterprise from "./Enterprise";
import MadeIn from "./MadeIn";
import Privacy from "./Privacy";
import CoreValues from "./CoreValues";

const Landing = () => {
  return (
    <>
      <Navigation/>
      <Box sx={{padding: "180px 0 0 0", backgroundColor: "#f8f9fb"}}>
        <Banner/>
      </Box> 
      <AllInOne/>
      <BrandsBanner/>
      <Enterprise/>
      <MadeIn/>
      <Privacy/>
      <CoreValues/>
      <Footer/>
    </>
  );
};

export default Landing;
