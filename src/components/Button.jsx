import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    width:${(p) => p.width};
    padding:0.5rem 1rem;
    border:1px solid${(p) => p.theme.secondaryBG};
    border-radius:0.3rem;
`;

const Button = ({
  label = 'default', width = '6rem', type = 'button', fnClick = () => { },
  disabled = false,
}) => (
  <Wrapper type={type} width={width} onClick={fnClick} disabled={disabled}>{label}</Wrapper>
);

export default Button;
