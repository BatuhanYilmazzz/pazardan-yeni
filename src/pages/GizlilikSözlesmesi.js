import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Container } from 'react-bootstrap';

const GizlilikSözlesmesi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
        mode: 'no-cors',
      };
      const result = await axios(
        'https://cors-anywhere.herokuapp.com/https://mservice.pazardan.app/pazardanWebApp/AgreementSelect?type=Gizlilik',
        config
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
    <GizlilikSözlesmesiStyled>
      <div className='gizlilik-header'>
        <Container>
          <h1>GİZLİLİK SÖZLEŞMESİ</h1>
        </Container>
      </div>
      <Container>
        <div dangerouslySetInnerHTML={createMarkup()} className='px-3 py-4' />
      </Container>
    </GizlilikSözlesmesiStyled>
  );
};

export default GizlilikSözlesmesi;

const GizlilikSözlesmesiStyled = styled.div`
  .gizlilik-header {
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
