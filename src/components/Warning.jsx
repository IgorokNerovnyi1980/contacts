import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
    position: fixed;
    top:1rem;
    right:2rem;
    z-index:3;
    min-width:10rem;
    padding:1rem;
    background-color:${(p) => p.theme.dumpBG};
    box-shadow:${(p) => p.theme.boxShadow};
    color:${(p) => p.color};
    display:none;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition:0.5s;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    `;

const Warning = () => {
  const text = useSelector((state) => state.warning.message);
  const typeWarning = useSelector((state) => state.warning.type);
  const dispatch = useDispatch();

  const colors = {
    success: 'green',
    warning: 'yellow',
    error: 'red',
  };

  const handleClose = () => {
    dispatch({
      type: 'REMOVE_WARNING',
    });
  };

  const onListOpen = (node) => {
    const {
      style,
    } = node;
    style.display = 'flex';
  };

  const onListClose = (node) => {
    const {
      style,
    } = node;
    style.display = 'none';
  };

  useEffect(() => {
    const Timer = setTimeout(() => {
      dispatch({
        type: 'REMOVE_WARNING',
      });
    }, 5000);
    return () => clearTimeout(Timer);
  }, [text, dispatch]);

  return (
    <Transition
      in={Boolean(text)}
      timeout={400}
      onEnter={onListOpen}
      onExit={onListClose}
    >
      <Wrapper
        color={colors[typeWarning]}
        onClick={handleClose}
      >
        <p>{text}</p>
      </Wrapper>
    </Transition>
  );
};

export default Warning;
