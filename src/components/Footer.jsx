import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.header`
    width:100%;
    height:6rem;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 0 1rem;
    background-color:${(p) => p.theme.headerBG};
    box-shadow:${(p) => p.theme.boxShadow};
    p{
        color:${(p) => p.theme.mainBG};
        font-weight:500;
    }
`;
const Footer = () => (
  <Wrapper>
    <p>footer</p>
  </Wrapper>
);

export default Footer;
