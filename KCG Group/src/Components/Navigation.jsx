import React, { useState } from "react";
import styled from "styled-components";
import { BsThreeDots, BsSearch, BsBell, BsList, BsX } from "react-icons/bs";
import { Box } from "@mui/material";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [showThreeDotDropdown, setShowThreeDotDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
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

          <Link to="/signin">
            <Button textColor="#f60014" text="Sign In" style={{ textTransform: "capitalize" }} />
          </Link>

          <Link to="/signup">
            <Button
              textColor="#f60014"
              hoverTextColor="#fff"
              hoverBackgroundColor="#f60014"
              text="Sign Up"
              borderColor="#f60014"
              style={{ textTransform: "capitalize" }}
            />
          </Link>
        </Box>
      </Navbar>

      {/* Mobile Navbar - Top */}
      <MobileNavbar>
        <Logo src="/images/logo.png" alt="Logo" />
      </MobileNavbar>

      {/* Mobile Navbar - Bottom with Hamburger & Sign Up */}
      <MobileNavbarBottom>
        <BsList size={28} onClick={() => setMobileMenuOpen(true)} />
        <Link to="/signup">
          <Button
            textColor="#f60014"
            hoverTextColor="#fff"
            hoverBackgroundColor="#f60014"
            text="Sign Up Free"
            borderColor="#f60014"
            style={{ textTransform: "capitalize" }}
          />
        </Link>
      </MobileNavbarBottom>

      {/* Mobile Sidebar */}
      <MobileMenu open={mobileMenuOpen}>
        <CloseIcon onClick={() => setMobileMenuOpen(false)}>
          <BsX size={30} />
        </CloseIcon>

        <MobileNavItem href="#">Products</MobileNavItem>
        <MobileNavItem href="#">Enterprise</MobileNavItem>
        <MobileNavItem href="#">Customers</MobileNavItem>
        <MobileNavItem href="#">Company</MobileNavItem>

        <Link to="/signin">
          <Button textColor="#f60014" text="Sign In" style={{ textTransform: "capitalize", width: "100%" }} />
        </Link>

        <Link to="/signup">
          <Button
            textColor="#f60014"
            hoverTextColor="#fff"
            hoverBackgroundColor="#f60014"
            text="Sign Up"
            borderColor="#f60014"
            style={{ textTransform: "capitalize", width: "100%" }}
          />
        </Link>
      </MobileMenu>
    </>
  );
};

const NavbarItem = styled.a`
  color: #000;
  text-decoration: none;
  padding: 0 15px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    color: #056cb8;
  }
`;

const Navbar = styled.nav`
  width: 100%;
  background-color: #fff;
  color: #000;
  padding: 0 15px;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 999;
  height: 70px;

  @media (max-width: 992px) {
    display: none;
  }
`;

const MobileNavbar = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1000;
  }
`;

const MobileNavbarBottom = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 1000;
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

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${(props) => (props.open ? "0" : "-100%")};
  width: 250px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  transition: left 0.3s ease-in-out;
  z-index: 1100;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const MobileNavItem = styled.a`
  color: #000;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 0;
  display: block;
  cursor: pointer;

  &:hover {
    color: #056cb8;
  }
`;

export default Navigation;
