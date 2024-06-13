// Footer.js
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 20px;
  background-color: #f1f1f1;
`;

const StyledHeart = styled.span`
  color: red;
`;

const StyledLink = styled.a`
  font-size: 0.75rem;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      Made with <StyledHeart>♥</StyledHeart> for the Web <br />
      <StyledLink href='https://vasilkoff.com'>
        ©2012-{currentYear} Vasilkoff Ltd - Web Development and Design
      </StyledLink>
    </StyledFooter>
  );
};

export default Footer;
