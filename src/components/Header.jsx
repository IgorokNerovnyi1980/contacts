import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

const Wrapper = styled.header`
    width:100%;
    height:6rem;
    display: flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 1rem;
    background-color:${(p) => p.theme.headerBG};
    box-shadow:${(p) => p.theme.boxShadow};
`;
const Logo = styled.h3`
    font-size:${(p) => p.theme.titleFS};
    font-weight:600;
`;

const Navigation = styled.nav`
    min-width:5rem;
    display: flex;
    justify-content:flex-end;
    align-items:center;
`;

const LinkWrap = styled(Link)`
    margin-left:0.5rem;
    text-decoration:none;
    outline:none;
`;

const Header = () => {
  const { pathname } = useLocation();
  const isLogged = useSelector((store) => store.auth.isLogged);

  return (
    <Wrapper>
      <Logo>logo</Logo>
      <Navigation>
        {
        pathname !== '/' && pathname !== '/home'
        && <LinkWrap to="/home">home</LinkWrap>
        }
        {
        isLogged
        && <LinkWrap to="/contacts">contacts</LinkWrap>
        }
        <LinkWrap to={isLogged ? '/profile' : '/authorization'}>{isLogged ? 'profile' : ' sign In'}</LinkWrap>
      </Navigation>
    </Wrapper>
  );
};

export default Header;
