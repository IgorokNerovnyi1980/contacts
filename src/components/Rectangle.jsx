import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
    width:30%;
    padding:0.5rem;
    border:0.1rem solid ${(p) => p.theme.secondaryBG};
    border-radius:0.3rem;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:0.2s ease;
    cursor:pointer;
    :hover{
        background-color:${(p) => p.theme.dumpBG}
    }
`;
const Avatar = styled.div`
    width:8rem;
    height:8rem;
    background-image:${(p) => `url(${p.img})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius:50%;
    background-color:${(p) => p.theme.dumpBG};
`;

const Rectangle = ({ user = null }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch({ type: 'SET_ITEM', id });
    history.push(`/contacts/${id}`);
  };
  return (
    <Wrapper onClick={() => handleClick(user.phone)}>
      <Avatar img={user.picture.medium} />
    </Wrapper>
  );
};

export default Rectangle;
