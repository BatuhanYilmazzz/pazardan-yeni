import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

const KullancıSözlesmesi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(
        'https://mservice.pazardan.app/pazardanWebApp/AgreementSelect?type=KullaniciSozlesme'
      );

      setData(result.data.data[0].user_agreement_detail);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);
  function createMarkup() {
    return {
      __html: data && data,
    };
  }
  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Spinner animation='grow' variant='dark' />
      </div>
    );
  }
  return (
    <KullancıSözlesmesiStyled>
      <div className='kullanıcı-header'>
        <Container>
          <h1>KULLANICI SÖZLEŞMESİ</h1>
        </Container>
      </div>
      <Container>
        <div dangerouslySetInnerHTML={createMarkup()} className='px-3 py-4' />
      </Container>
    </KullancıSözlesmesiStyled>
  );
};

export default KullancıSözlesmesi;
const KullancıSözlesmesiStyled = styled.div`
  .kullanıcı-header {
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
