// Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f1f1f1;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px;
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

const Header = () => (
  <StyledHeader>
    <Logo src="/2ul-top-logo.webp" alt="2ul.top Logo" />
    <div>2ul.top - URL Shortener</div>
    <NavMenu>
      <NavLink to="/pricing">Pricing</NavLink>
      <NavLink to="/terms">Terms</NavLink>
      <NavLink to="/privacy">Privacy Policy</NavLink>
    </NavMenu>
  </StyledHeader>
);

export default Header;
