import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Footer = () => {
  return (
    <FooterStyled>
      <Container>
        <Row>
          <Col>
            <div className='pin'>
              <p>
                <img className='mr-1' src='/images/pin.png' alt='' />
                Maslak, Büyükdere Cad. Nurol Plaza No:255 D:21/A, 34450 İstanbul
              </p>
            </div>
            <div className='mail'>
              <p>
                <img className='mr-1' src='/images/mail.png' alt='' />
                info@pazardan.app
              </p>
            </div>
            <div className='socials'>
              <img src='/images/Facebook.png' alt='' />
              <img src='/images/instagram.png' alt='' />
            </div>
            <div className='links'>
              <NavLink to='/gizlilik-sozlesmesi'>
                Gizlilik Sözleşmesi ve Çerez Politikası
              </NavLink>
              <NavLink to='/aydınlatma-metni'>Aydınlatma Metni</NavLink>
              <NavLink to='/kvkk'>KVKK</NavLink>
              <NavLink to='/kullanıcı-sozlesmesi'>Kullanıcı Sözleşmesi</NavLink>
              <NavLink to='/sık-sorulan-sorular' className='border-0'>
                SSS
              </NavLink>
            </div>
            <p className='copyright'>
              2020 © Pazardan Elektronik Ticaret ve Bilişim Hizmetleri Limited
              Şirketi. Tüm Hakları Saklıdır
            </p>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  background-color: #84b700;
  padding: 3rem 1rem 0.1rem 1rem;
  text-align: center;
  margin-top: 5rem;
  .pin {
    img {
      width: 10px;
    }
    p {
      color: #fff;
      font-size: 12px;
      @media (max-width: 576px) {
        max-width: 250px;
        margin: auto;
      }
    }
    margin-bottom: 0.5rem;
  }
  .mail {
    img {
      width: 21px;
    }
    p {
      color: #fff;
      font-size: 16px;
    }
  }
  .socials {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3rem auto;
    max-width: 100px;
    img:first-child {
      width: 10px;
    }
    img:nth-child(2) {
      width: 23px;
    }
  }
  .copyright {
    font-size: 10px;
    color: #fff;
    margin-top: 1rem;
  }
  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 576px) {
      display: block;
    }

    a {
      font-size: 12px;
      padding: 0 0.8rem;
      border-right: 1px solid #fff;
      @media (max-width: 576px) {
        display: block;
        border: none;
        margin-bottom: 1rem;
      }
    }
  }
`;
