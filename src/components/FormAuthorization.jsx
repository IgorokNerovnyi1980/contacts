import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ReactComponent as Visibility } from '../assets/svg/visibility.svg';
import { ReactComponent as Invisible } from '../assets/svg/invisible.svg';
import { rePassword, reEmail } from '../lib/constants';
import API from '../lib/api';
import Button from './Button';

const Wrapper = styled.form`
    position:relative;
    width:90%;
    max-width:40rem;
    height:25vh;
    padding:1rem;
    border:1px solid${(p) => p.theme.secondaryBG};
    border-radius:0.3rem;
    background-color:${(p) => p.theme.dumpBG};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;
const Input = styled.input`
    width:100%;
    margin-right:auto;
    padding:0.5rem;
    background-color:${(p) => p.theme.mainBG};
`;
const BtnWrap = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;
const ShowText = styled(Visibility)`
    position:absolute;
    right:1.5rem;
    width:2rem;
    cursor:pointer;
    fill:${(p) => p.theme.headerBG};
`;
const ShowPassword = styled(Invisible)`
    position:absolute;
    right:1.5rem;
    width:2rem;
    cursor:pointer;
    fill:${(p) => p.theme.headerBG};
`;

const FormAuthorization = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((store) => store.auth.isLogged);
  const history = useHistory();
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getUserProfile = async (id) => {
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
  const toHome = () => {
    history.push('/home');
  };
  const toggler = () => {
    setIsShow(!isShow);
  };
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default: break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validPass = rePassword.test(password);
    const validEmail = reEmail.test(email);
    if (!validEmail) {
      dispatch(
        { type: 'SHOW_WARNING', message: 'not correct email', typeWarning: 'error' },
      );
      setEmail('');
    }
    if (!validPass) {
      dispatch(
        { type: 'SHOW_WARNING', message: 'not correct password', typeWarning: 'error' },
      );
      setPassword('');
    }
    if (validPass && validEmail) {
      const randomNum = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      dispatch(
        { type: 'SHOW_WARNING', message: 'you is athorized', typeWarning: 'success' },
      );
      dispatch(
        {
          type: 'USER_AUTH', auth: true, quantity: randomNum, email,
        },
      );
      const oldObj = JSON.parse(localStorage.getItem('contacts'));

      if (oldObj) {
        localStorage.setItem('contacts', JSON.stringify({
          ...oldObj, auth: true, email, quantity: randomNum,
        }));
      } else {
        localStorage.setItem('contacts', JSON.stringify({ auth: true, email, quantity: randomNum }));
      }
      getUserProfile(email);
      history.push('/profile');
    }
  };
  useEffect(() => {
    if (!isLogged) {
      history.push('/authorization');
    }
  }, [history, isLogged]);
  return (

    <Wrapper submit={handleSubmit}>
      <Input
        type="email"
        name="email"
        required
        placeholder="email"
        value={email}
        onChange={handleChange}
      />
      <Input
        type={isShow ? 'text' : 'password'}
        name="password"
        required
        placeholder="8 simbols a-Z and 0-9 and ._-"
        value={password}
        onChange={handleChange}
      />
      {isShow
        ? <ShowPassword onClick={() => toggler()} />
        : <ShowText onClick={() => toggler()} /> }
      <BtnWrap>
        <Button label="save" type="submit" width="65%" fnClick={handleSubmit} />
        <Button label="cancel" type="button" width="30%" fnClick={() => toHome()} />
      </BtnWrap>
    </Wrapper>
  );
};

export default FormAuthorization;
