import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import Button from '../components/Button';

const Profile = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(
      { type: 'SHOW_WARNING', message: 'you is logout', typeWarning: 'success' },
    );
    dispatch(
      { type: 'USER_AUTH', auth: false },
    );
    const oldObj = JSON.parse(localStorage.getItem('contacts'));
    if (oldObj) {
      localStorage.setItem('contacts', JSON.stringify({ ...oldObj, auth: false }));
    } else {
      localStorage.setItem('contacts', JSON.stringify({ auth: true }));
    }
    history.push('/authorization');
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLogged) {
        history.push('/authorization');
      }
    }, 10);
    return () => clearTimeout(timer);
  }, []);
  return (
    <BaseLayout>
      <Button label="logout" fnClick={handleLogout} />
    </BaseLayout>
  );
};
export default Profile;
