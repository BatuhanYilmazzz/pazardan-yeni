import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';
function Spinnerr() {
  return (
    <SpinnerStyled>
      <Spinner animation='grow' />
    </SpinnerStyled>
  );
}

export default Spinnerr;

const SpinnerStyled = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
