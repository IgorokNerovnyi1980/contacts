import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BaseLayout from '../components/BaseLayout';
import StubText from '../components/StubText';

const Profile = () => {
  const isLogged = useSelector((store) => store.auth.isLogged);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLogged) {
      dispatch(
        { type: 'SHOW_WARNING', message: 'this page only for autorized users. please connect', typeWarning: 'error' },
      );
    }
  }, [isLogged, dispatch]);
  return (
    isLogged
      ? (
        <BaseLayout>
          <StubText text="pofile page" />
        </BaseLayout>
      )
      : (<Redirect to="/authorization" />)
  );
};
export default Profile;
