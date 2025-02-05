import React from "react";
import {
  Box,
  Typography,
  Container,
  ListItem,
  List,
  ListItemText,
  Grid,
  Link,
  Breadcrumbs,
} from "@mui/material";
import styled from "styled-components";
import Button from "./Button";
import { RiArrowRightSLine } from "react-icons/ri";
import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f5f9",
      }}
    >
      <Container sx={{ padding: "100px 0" }}>
        <Box sx={{ textAlign: "center" }}> 
          <Typography variant="h5" sx={{marginBottom: "1rem"}}>Ready to do your best work?</Typography>
          <Typography variant="h6" sx={{marginBottom: "1rem"}}>Let's get you started.</Typography>
          <Button
            textColor="#fff"
            backgroundColor="#f60014"
            text="Sign Up Now"
            icon={<RiArrowRightSLine />}
          />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Apps and Extensions
              </Typography>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Mobile Apps" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Learn
              </Typography>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Training & Certification" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Community
              </Typography>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="User Community" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Company
              </Typography>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="About Us" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Contact Sales
              </Typography>
              <List>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
                <ListItem sx={{ padding: "0" }}>
                  <ListItemText primary="Phone" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ textAlign: "center", padding: "100px 0 0 0" }}>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} style={{ marginRight: "10px" }} />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={30}
              style={{ marginRight: "10px", color: "#1877F2" }}
            />
          </Link>
          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube
              size={30}
              style={{ marginRight: "10px", color: "#FF0000" }}
            />
          </Link>
          <Link
            href="https://linkedn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              style={{ marginRight: "10px", color: " #0077B5 " }}
            />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={30}
              style={{
                background: "linear-gradient(45deg, #9B4DE0, #F58529, #FFDC80)",
                color: "#fff",
                fontWeight: "bold",
              }}
            />
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            maxWidth: "100%",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb" separator="|">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Contact Us
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Security
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Compliance
            </Link>
            <Link underline="hover" color="inherit" href="/">
              IPR Complaints
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Anti-spam Policy
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Terms of Service
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Privacy Policy
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Cookie Policy
            </Link>
            <Link underline="hover" color="inherit" href="/">
              GDPR Compliance
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Abuse Policy
            </Link>
          </Breadcrumbs>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: "#0b0d1f",
          color: "#fff",
          textAlign: "center",
          padding: "40px 0 40px",
        }}
      >
        <Logo src="../images/logo.png" alt="Logo" />
        <Box sx={{ marginTop: "1rem" }}>
          <Typography variant="p">
            © 2025, KCG Groups Pvt. Ltd. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Logo = styled.img`
  height: 3rem;
`;

export default Footer;
