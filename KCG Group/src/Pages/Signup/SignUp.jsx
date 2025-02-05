import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Container,
} from "@mui/material";
import { Google, LinkedIn } from "@mui/icons-material";
import ImageComponent from "../../Components/ImageComponent";
import Button from "../../Components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <ImageComponent
          src="/images/logo.png"
          alt="Logo"
          width="100"
          height="50px"
        />
      </Box>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="h5" fontWeight="bold">
          Start with your free account today.
        </Typography>
      </Box>

      <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email *"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          type="password"
          label="Password *"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Phone Number *"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          margin="normal"
          InputProps={{
            startAdornment: <Typography sx={{ mr: 1 }}>+91</Typography>,
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={formData.termsAccepted}
              onChange={handleChange}
              name="termsAccepted"
            />
          }
          label={
            <Typography sx={{fontSize: "0.9rem"}}>
              I agree to the{" "}
              <span style={{ color: "blue" }}>Terms of Service</span> and{" "}
              <span style={{ color: "blue" }}>Privacy Policy</span>.
            </Typography>
          }
        />

        <Button
          type="submit"
          backgroundColor="#d32f2f"
          color="#fff"
          text="SIGN UP FOR FREE"
          hoverBackgroundColor="#b71c1c"
          width="100%"
          padding="8px 16px"
          style={{ marginTop: "2rem" }}
        />
      </Box>

      <Typography align="center" sx={{ mt: 2 }}>
        or sign in using
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
        <Google sx={{ fontSize: 40, cursor: "pointer", color: "#DB4437" }} />
        <LinkedIn sx={{ fontSize: 40, cursor: "pointer", color: "#0A66C2" }} />
      </Box>

      <Typography align="right" sx={{ mt: 2, color: "red", fontSize: 14 }}>
        Have a Zoho Account? SIGN IN
      </Typography>
    </Container>
  );
};

export default SignUp;
