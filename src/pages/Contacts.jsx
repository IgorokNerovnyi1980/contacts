import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseLayout from '../components/BaseLayout';
import StubText from '../components/StubText';
import API from '../lib/api';

const Contacts = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const contacts = useSelector((store) => store.contacts.all);
  const viewData = useSelector((store) => store.contacts.contactView);
  const allQuantity = useSelector((store) => store.contacts.quantityContacts);
  const id = useSelector((store) => store.user.email);
  const page = useSelector((store) => store.contacts.page);
  const perPage = useSelector((store) => store.contacts.perPage);
  const totalPages = useSelector((store) => store.contacts.totalPages);
  const dispatch = useDispatch();
  const getContacts = async (numPage, quatityOfPage, userId) => {
    try {
      const {
        data, status,
      } = await API.get(`?page=${numPage}&results=${quatityOfPage}&seed=${userId}`);
      if (status === 200) {
        dispatch(
          { type: 'GET_CONTACTS', payload: data.results },
        );
      }
    } catch (err) {
      dispatch(
        { type: 'SHOW_WARNING', message: err.message, typeWarning: 'error' },
      );
    }
  };

  useEffect(() => {
    if (isLogged && contacts.length === 0) {
      dispatch({ type: 'TOTAL_PAGE' });
      getContacts(page, allQuantity, id);
    }
  }, [isLogged]);// elsint-disable-line
  useEffect(() => {
    if (contacts.length > 0) {
      dispatch({ type: 'VIEW_PAGE' });
    }
  }, [contacts]);// elsint-disable-line

  console.log('viewData', viewData);

  return (
    <BaseLayout>
      <StubText text="contacts page" />
    </BaseLayout>
  );
};
export default Contacts;
