import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  width:95%;
  max-width:64rem;
  display: flex;
  justify-content:space-between;
  align-items:flex-start;
  @media screen and (max-width: 900px) {
    flex-direction:column;
    align-items:center;
}
`;
const Avatar = styled.img`
  width:70%;
  @media screen and (max-width: 900px){
    margin-bottom: 0.5rem;
  }
  
`;
const Content = styled.div`
  width:45%;
  padding-left:1rem;
  display: flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:flex-start;
  h2{
    margin-bottom: 0.5rem;
    span{
      font-size:${(p) => p.theme.accentFS};
      color:${(p) => p.theme.accentBG};
    }
  }
  p{
    margin-bottom: 0.5rem;
  }
  @media screen and (max-width: 900px){
    width:70%;
    padding-left:0;
  }
`;
const Nat = styled.p`
  margin-bottom: 0.5rem;
  padding:0.5rem 1rem;
  border: 0.1rem solid ${(p) => p.theme.accentBG};
  border-radius:0.3rem;
  color: ${(p) => p.theme.accentBG};

`;
const BtnWrap = styled.div`
    margin:0 auto;
`;
const UserProfile = ({ user = {}, isContact = false, fnClick = () => {} }) => (
  isContact
    ? (<p>contact</p>)
    : (
      <Wrapper>
        <Avatar src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
        <Content>
          <h2>
            {`${user.name.title} ${user.name.first} ${user.name.last} `}
            <span>{`${user.dob.age} years`}</span>
          </h2>
          <p>{user.email}</p>
          <p>{`${user.location.street.name} ${user.location.street.number}`}</p>
          <p>{`${user.location.city} ${user.location.country}`}</p>
          <Nat>{user.nat}</Nat>
          {!isContact && (
          <BtnWrap>
            <Button label="logout" fnClick={fnClick} />
          </BtnWrap>
          )}
        </Content>
      </Wrapper>
    )
);

export default UserProfile;
