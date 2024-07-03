import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  background-color: #f1f1f1;
  display: flex; /* Make footer a flexbox container */
  justify-content: space-between; /* Align items horizontally */
`;

const StyledHeart = styled.span`
  color: red;
`;

const StyledLink = styled.a`
  font-size: 0.75rem;
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 18px;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <NavMenu>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/terms">Terms</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </NavMenu>
      <div>
        {" "}
        {/* Wrap copyright info in a div */}
        Made with <StyledHeart>♥</StyledHeart> for the Web <br />
        <StyledLink href="https://vasilkoff.com">
          ©2012-{currentYear} Vasilkoff Ltd - Web Development and Design
        </StyledLink>
      </div>
    </StyledFooter>
  );
};

export default Footer;
