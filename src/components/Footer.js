// Footer.js
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.header`
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

const Footer = () => (
    <StyledFooter>Made with <StyledHeart>♥</StyledHeart> for the Web <br/><a href='https://vasilkoff.com'>©2024 Vasilkoff CY Ltd - Web Development and Design</a></StyledFooter>
);

export default Footer;
