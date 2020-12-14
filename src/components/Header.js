import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Row className='align-items-center mx-0 flex-md-row-reverse'>
          <Col md={6}>
            <img
              className='showcase-img'
              src='/images/showcase_area_phone@2x.png'
              alt=''
            />
          </Col>
          <Col md={6}>
            <img
              src='/images/headings/cebindekisemtpazarı@2x.png'
              alt=''
              className='title d-none d-sm-block'
            />
            <img
              src='/images/headingsmobile/cebindekisemtpazarı.png'
              alt=''
              className='title d-sm-none'
            />
            <p>
              Pazardan; adresinize yakın semt pazarlarında yer alan tezgahlardan
              taze sebze ve meyve siparişi vermenizi sağlayan bir pazar yeri
              uygulamasıdır.
            </p>
            <img className='app-store' src='/images/tr-appstore.png' alt='' />
            <img
              className='app-store ml-4'
              src='/images/tr-playstore.png'
              alt=''
            />
          </Col>
        </Row>
      </Container>
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.div`
  background-color: #46742c;
  padding: 3rem 0;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    text-align: center;
  }
  @media (max-width: 576px) {
    padding: 1.5rem 0;
  }
  .app-store {
    max-width: 180px;
    @media (max-width: 768px) {
      max-width: 130px;
    }
  }
  .showcase-img {
    max-width: 100%;
    margin-bottom: -10rem;
    @media (max-width: 768px) {
      margin-bottom: 1rem;
    }
  }
  .title {
    max-width: 350px;
    margin-bottom: 1rem;
    @media (max-width: 576px) {
      max-width: 250px;
    }
  }
  p {
    color: #fff;
    font-size: 18px;
    font-family: 'Open Sans';
    margin-top: 0.5rem;
    margin-bottom: 4rem;
    max-width: 500px;
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
`;
