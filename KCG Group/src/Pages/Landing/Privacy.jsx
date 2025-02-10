import React from "react";
import { Typography, Link, Box, Container } from "@mui/material";
import { FaYoutube, FaShieldAlt } from "react-icons/fa";

const Privacy = () => {
  return (
    <Container sx={{ textAlign: "center" }}>
      <Box sx={{ padding: { lg: "100px", xs: "100px 0" }}}>
        <FaShieldAlt
          style={{ width: "4rem", height: "5rem", color: " #056cb8" }}
        />
        <Box>
          <Typography variant="h4">Your privacy is our responsibility</Typography>
          <Typography sx={{ fontSize: "1.1rem", lineHeight: "1.7", marginTop: "1rem" }}>
            We believe that trust is paramount in a relationship. We do not own or
            sell your data, and we most certainly do not bank on advertising-based
            business models. The only way we make money is from the software
            license fees you pay us.
          </Typography>
        </Box>

        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{
            border: "1px solid #056cb8",
            color: "#056cb8",
            padding: "10px 16px",
            display: "inline-flex",
            alignItems: "center",
            marginTop: "2rem",
          }}
        >
          <FaYoutube
            size={25}
            style={{ marginRight: "10px", color: "#f60014" }}
          />
          WATCH VIDEO
        </Link>
      </Box>
    </Container>
  );
};

export default Privacy;
