import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width:${(p) => p.width};
    padding:0.5rem 1rem;
    border:1px solid${(p) => p.theme.secondaryBG};
    border-radius:0.3rem;
    background-color:${(p) => (p.background ? p.theme.accentBG : 'none')};
`;

const Tab = ({
  label = 'default', background = false, fnClick = () => { },
}) => (
  <Wrapper type="button" background={background} onClick={fnClick}>{label}</Wrapper>
);

export default Tab;
