import React from 'react';
import styled from 'styled-components';

const FooterConatiner = styled.footer`
    display: flex;
    color: white;
    background: black;
    justify-content: space-around;
    padding: 20px;
`;

const FooterCol = styled.div`

`;

function Footer() {
  return <FooterConatiner>
            <FooterCol>
                <h3>About Us</h3>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
            </FooterCol>
            <FooterCol>
                <h3>Contact Us</h3>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
            </FooterCol>
            <FooterCol>
                <h3>Social Media</h3>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
                    <p>code</p>
            </FooterCol>
            <span>@copyright 2022 - Hazem Lenin</span>
        </FooterConatiner>;
}

export default Footer;
