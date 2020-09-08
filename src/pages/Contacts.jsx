import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BaseLayout from '../components/BaseLayout';
import StubText from '../components/StubText';
import API from '../lib/api';

const Contacts = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const dispatch = useDispatch();
  const getContacts = async () => {
    try {
      const {
        data, status,
      } = await API.get('?results=10');
      if (status === 200) {
        console.log('data', data.results);
      }
    } catch (err) {
      dispatch(
        { type: 'SHOW_WARNING', message: err.message, typeWarning: 'error' },
      );
    }
  };
  useEffect(() => {
    if (isLogged) {
      getContacts();
    }
  }, [isLogged]);// elsint-disable-line
  return (
    <BaseLayout>
      <StubText text="contacts page" />
    </BaseLayout>
  );
};
export default Contacts;
