import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from './Pagination';
import Row from './Row';
import Rectangle from './Rectangle';

const Wrapper = styled.div`
    width:95%;
    max-width:64rem;
    min-height:50vh;
    padding:1rem;
`;

const Controls = styled.div`
    width:100%;
    min-height:10vh;
    margin-bottom:2rem;
    padding:0.5rem 0;
    background-color:${(p) => p.theme.mainBG};
`;

const Content = styled.div`
    padding:1rem 0 ;
    background-color:${(p) => p.theme.mainBG};
    display:flex;
    ${(p) => (p.isRow
    ? 'flex-direction:column; justify-content:space-between;'
    : 'flex-wrap:wrap; justify-content:space-evenly;')};
    align-items:center;
    
`;

const ContactsTable = ({ dataArr = [] }) => {
  const isRow = useSelector((store) => store.contacts.isRow);
  const dispatch = useDispatch();
  const changeRow = () => {
    dispatch({ type: 'SET_ROW', bool: !isRow });
  };
  return (
    <Wrapper>
      <Controls>
        <button type="button" onClick={changeRow}>{isRow ? 'cube' : 'row'}</button>
      </Controls>
      <Content isRow={isRow}>
        {dataArr.length > 0 && dataArr.map((user) => {
          if (isRow) {
            return <Row key={user.email} user={user} />;
          }
          return <Rectangle key={user.email} user={user} />;
        })}
      </Content>
      <Pagination />
    </Wrapper>
  );
};
export default ContactsTable;
