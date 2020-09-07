import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { ReactComponent as Visibility } from '../assets/svg/visibility.svg';
import { ReactComponent as Invisible } from '../assets/svg/invisible.svg';
import { rePassword, reEmail } from '../lib/constants';

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
const Button = styled.button`
    width:${(p) => p.width};
    padding:0.5rem 1rem;
    border:1px solid${(p) => p.theme.secondaryBG};
    border-radius:0.3rem;
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
      dispatch(
        { type: 'SHOW_WARNING', message: 'you is athorized', typeWarning: 'success' },
      );
      dispatch(
        { type: 'USER_AUTH', auth: true },
      );
    }
  };
  return (
    isLogged
      ? (<Redirect to="/profile" />)
      : (
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
            <Button type="submit" width="65%" onClick={handleSubmit}>save</Button>
            <Button type="button" width="30%" onClick={() => toHome()}>cancel</Button>
          </BtnWrap>
        </Wrapper>
      )
  );
};

export default FormAuthorization;
