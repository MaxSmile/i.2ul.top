// Header.js
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f1f1f1;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header = () => (
  <StyledHeader>
    <Logo src="/2ul-top-logo.webp" alt="2ul.top Logo" />
    <div>2ul.top - URL Shortener</div>
  </StyledHeader>
);

export default Header;
