import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    color:${(p) => p.theme.accentBG};
    font-size:${(p) => p.theme.titleFS};

`;

const StubText = ({ text = 'default text' }) => (
  <Wrapper>{text}</Wrapper>
);

export default StubText;
