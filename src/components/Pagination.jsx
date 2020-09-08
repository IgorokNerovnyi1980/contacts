import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';

const Wrapper = styled.div`
    width:100%;
    max-width:64rem;
    margin:0 auto;
    padding-bottom:1rem;
    background-color:${(p) => p.theme.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
    p{
      padding:0 0.5rem;
    }
`;

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((store) => store.contacts.page);
  const totalPages = useSelector((store) => store.contacts.totalPages);
  const prevPage = () => {
    if (currentPage > 1) {
      dispatch({ type: 'CHAGE_PAGE', page: currentPage - 1 });
      dispatch({ type: 'VIEW_PAGE' });
    }
  };
  const nextPage = () => {
    if (currentPage !== totalPages && currentPage < totalPages) {
      dispatch({ type: 'CHAGE_PAGE', page: currentPage + 1 });
      dispatch({ type: 'VIEW_PAGE' });
    }
  };

  return (
    <Wrapper>
      <Button label="prev" disabled={currentPage === 1} fnClick={prevPage} />
      <p>{currentPage}</p>
      <Button label="next" disabled={currentPage === totalPages} fnClick={nextPage} />
    </Wrapper>
  );
};

export default Pagination;
