import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Routing from './Routing';
import themes from './lib/themes';
import Warning from './components/Warning';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    ::-webkit-scrollbar {
    width: 4px;
    background: grey;
    border-radius: 2.5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2.5px;
    background-color: black;
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);
  }
  }
  *:after, *:before {
    box-sizing: inherit;
  }
  p, ul, li, h1, h2, h3, h4 ,h5 ,h6, html, body{
    margin: 0;
    padding: 0;
  }
  li{
    list-style-type: none;
  }
  h1, h2, h3, h4,h5, h6{
    font-weight: normal;
  }
  
  input, textarea, button{
    outline: none;
    border:none;
    background:none;
  }
  html{
    font-size: 62.5%;
  }
  body{
    font-family: 'Helvetica', sans-serif;
    font-size:1.4rem;
    color: #000000;
    font-weight: 400;
    min-width: 320px;
    overflow-x: hidden;
    background: #ffffff;
    line-height: normal;
  }
  @media (min-width: 1921px) {
  body {
    font-size: 1.6rem;
  }
}
`;

const App = () => (
  <ThemeProvider theme={themes.base}>
    <GlobalStyle />
    <Routing />
    <Warning />
  </ThemeProvider>
);

export default App;
