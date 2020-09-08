import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import UserProfile from '../components/UserProfile';
import API from '../lib/api';

const Profile = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const profile = useSelector((store) => store.user.profile);
  const seed = useSelector((store) => store.user.email);
  const dispatch = useDispatch();
  const history = useHistory();
  const getUserProfile = async ({ id }) => {
    try {
      const {
        data, status,
      } = await API.get(`?seed=${id}`);
      if (status === 200) {
        dispatch(
          { type: 'USER_PROFILE', payload: data.results[0] },
        );
      }
    } catch (err) {
      dispatch(
        { type: 'SHOW_WARNING', message: err.message, typeWarning: 'error' },
      );
    }
  };
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
    history.push('/home');
  };
  useEffect(() => {
    if (!isLogged) history.push('/authorization');
    if (isLogged && !profile) getUserProfile(seed);
  }, [isLogged]);
  return (
    <BaseLayout>
      {profile && <UserProfile user={profile} fnClick={handleLogout} />}
    </BaseLayout>
  );
};
export default Profile;
