import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import axios from 'axios';

const Kvkk = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://cors-anywhere.herokuapp.com/https://mservice.pazardan.app/pazardanWebApp/AgreementSelect?type=KVKK'
      );

      setData(result.data.data[0].user_agreement_detail);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  function createMarkup() {
    return {
      __html: data && data,
    };
  }
  return (
    <KvkkStyled>
      <div className='kvkk-header'>
        <Container>
          <h1>KVKK</h1>
        </Container>
      </div>
      <Container>
        <div dangerouslySetInnerHTML={createMarkup()} className='px-3 py-4' />
      </Container>
    </KvkkStyled>
  );
};

export default Kvkk;

const KvkkStyled = styled.div`
  .kvkk-header {
    background-color: #46742c;
    padding: 2rem 0;
    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #84b700;
      padding: 0 1rem;
    }
  }
  a {
    color: #000;
  }
`;
