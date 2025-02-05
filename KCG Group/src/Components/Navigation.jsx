import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots, BsSearch, BsBell } from "react-icons/bs";
import { Box } from "@mui/material";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showThreeDotDropdown, setShowThreeDotDropdown] = useState(false);

  return (
    <Navbar>
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Logo src="/images/logo.png" alt="Logo" />

        <Dropdown
          onMouseEnter={() => setShowProductDropdown(true)}
          onMouseLeave={() => setShowProductDropdown(false)}
        >
          <NavbarItem>Products</NavbarItem>
          <DropdownMenu show={showProductDropdown}>
            <DropdownItem href="#">Product 1</DropdownItem>
            <DropdownItem href="#">Product 2</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem href="#">Enterprise</NavbarItem>
        <NavbarItem href="#">Customers</NavbarItem>

        <Dropdown
          onMouseEnter={() => setShowCompanyDropdown(true)}
          onMouseLeave={() => setShowCompanyDropdown(false)}
        >
          <NavbarItem>Company</NavbarItem>
          <DropdownMenu show={showCompanyDropdown}>
            <DropdownItem href="#">About Us</DropdownItem>
            <DropdownItem href="#">Careers</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <ThreeDotMenu
          onClick={() => setShowThreeDotDropdown(!showThreeDotDropdown)}
        >
          <BsThreeDots size={20} />
        </ThreeDotMenu>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Box sx={{ fontSize: "1.3rem" }}>
          <BsSearch />
        </Box>

        <Box sx={{ fontSize: "1.3rem" }}>
          <BsBell />
        </Box>

        {/* Link to SignIn page */}
        <Link to="/signin">
          <Button textColor="#f60014" text="Sign In" style={{textTransform: "capitalize"}}/>
        </Link>

        <Link to="/signup">
          <Button
            textColor="#f60014"
            hoverTextColor="#fff"
            hoverBackgroundColor="#f60014"
            text="Sign Up"
            borderColor="#f60014"
            style={{textTransform: "capitalize"}}
          />
        </Link>
      </Box>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 0 15px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  height: 70px;

  /* For mobile view */
  @media (max-width: 767px) {
    display: none;
  }
`;

const NavbarItem = styled.a`
  color: #000;
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #056cb8;
  }

  /* For mobile view */
  @media (max-width: 1299px) {
    font-size: 14px;
  }

  @media (max-width: 991px) {
    font-size: 13px;
  }
`;

const Logo = styled.img`
  height: 3.5rem;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownMenu = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const ThreeDotMenu = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

export default Navigation;
