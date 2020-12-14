import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import { sss } from '../content';
const Sss = () => {
  return (
    <SssStyled>
      <div className='sss-header'>
        <Container>
          <h1>SIK SORULAN SORULAR</h1>
        </Container>
      </div>
      <Container>
        <div className='sss-part'>
          {sss.map((item, index) => (
            <div key={index} className='sss-part-item'>
              <h6>{item.soru}</h6>
              <p>{item.cevap}</p>
            </div>
          ))}
        </div>
      </Container>
    </SssStyled>
  );
};

export default Sss;

const SssStyled = styled.div`
  .sss-header {
    background-color: #46742c;
    padding: 2rem 0;
    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #84b700;
      padding: 0 1rem;
    }
  }
  .sss-part {
    padding: 3rem 1rem;
    .sss-part-item {
      margin-bottom: 3rem;
      h6 {
        font-size: 18px;
        font-weight: bold;
        color: #46742c;
        margin-bottom: 1.5rem;
      }
      p {
        font-size: 18px;
        color: #46742c;
      }
    }
  }
`;
