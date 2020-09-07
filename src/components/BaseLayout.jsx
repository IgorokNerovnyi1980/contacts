import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import backDropImg from '../assets/img/backdrop.jpg';

const Wrapper = styled.header`
    width:100%;
    min-width:100vw;
    height:100%;
    min-height:100vh;
    background-image:url(${backDropImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${(p) => p.theme.dumpBG};
`;
const Content = styled.div`
    width:100%;
    height:100%;
    min-height:calc(100vh - 6rem);
    display:flex;
    justify-content:center;
    align-items:center;
    `;

const BaseLayout = ({ children }) => (
  <Wrapper>
    <Header />
    <Content>
      {children}
    </Content>
  </Wrapper>
);

export default BaseLayout;
