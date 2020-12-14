import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
const LeftCard = ({
  img1,
  title1,
  description,
  backgroundImage,
  textcolor,
  title1mobile,
}) => {
  return (
    <LeftCardStyled style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container>
        <Row className='align-items-center'>
          <Col md={4}>
            <img className='left-card-img' src={img1} alt='' />
          </Col>
          <Col md={8}>
            <img className='title d-none d-sm-block' src={title1} alt='' />
            <img className='title  d-sm-none' src={title1mobile} alt='' />
            <p className={textcolor}>{description}</p>
          </Col>
        </Row>
      </Container>
    </LeftCardStyled>
  );
};

export default LeftCard;

const LeftCardStyled = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 576px) {
    text-align: center !important;
  }
  .row {
    padding: 5rem 0;
    @media (max-width: 576px) {
      padding: 5rem 1rem;
    }
  }
  .left-card-img {
    max-width: 420px;
    width: 100%;
    margin-top: -12rem;
    @media (max-width: 768px) {
      margin-top: -9rem;
    }
    @media (max-width: 576px) {
      max-width: 225px;
      margin-top: -10rem;
    }
  }
  .title {
    margin-top: -6rem;
    max-width: 50%;

    @media (max-width: 768px) {
      margin-top: -9rem;
    }
    @media (max-width: 576px) {
      margin-top: 1rem;
      max-width: 90%;
    }
  }
  p {
    max-width: 600px;
    font-size: 24px;
    color: #32741b;
    margin-top: 1.5rem;
    @media (max-width: 576px) {
      font-size: 14px;
      margin-bottom: 5rem;
    }
  }
`;
