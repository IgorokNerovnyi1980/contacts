import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const Wrapper = styled.div`
    width:100%;
    padding:0.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:0.2s ease;
    cursor:pointer;
    :hover{
        background-color:${(p) => p.theme.dumpBG}
    }
`;
const AvtrWrap = styled.div`
    width:20%;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const Avatar = styled.div`
    width:5rem;
    height:5rem;
    background-image:${(p) => `url(${p.img})`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius:50%;
    background-color:${(p) => p.theme.dumpBG};
`;
const Name = styled(AvtrWrap)`
    width:35%;
    justify-content:flex-start;
`;
const Email = styled(AvtrWrap)`
    width:40%;
    justify-content:flex-start;
@media screen and (max-width: 800px){
    display:none;
  }
`;
const Nationality = styled(AvtrWrap)`
    width:5%;
    justify-content:flex-start;
`;

const Row = ({ user = null }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (id) => {
    dispatch({ type: 'SET_ITEM', id });
    history.push(`/contacts/${id}`);
  };
  return (
    <Wrapper onClick={() => handleClick(user.phone)}>
      <AvtrWrap>
        <Avatar img={user.picture.medium} />
      </AvtrWrap>
      <Name>
        <h3>
          {`${user.name.title} ${user.name.first} ${user.name.last} `}
        </h3>
      </Name>
      <Email>
        <p>{user.email}</p>
      </Email>
      <Nationality>
        <p>{user.nat}</p>
      </Nationality>
    </Wrapper>
  );
};

export default Row;
