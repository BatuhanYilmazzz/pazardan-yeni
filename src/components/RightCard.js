import styled from 'styled-components';
import { Col, Container, Row } from 'react-bootstrap';
const RigtCard = ({
  img2,
  title2,
  description,
  maxWidth,
  title2mobile,
  maxWidthMobile,
}) => {
  return (
    <Container>
      <RigtCardStyled>
        <Row className='align-items-center flex-md-row-reverse'>
          <Col md={4}>
            <img className='right-card-img' src={img2} alt='' />
          </Col>
          <Col md={8} className='text-md-right text-center'>
            <img
              className='title d-none d-sm-block'
              src={title2}
              alt=''
              style={{ maxWidth }}
            />
            <img
              className='title d-sm-none'
              src={title2mobile}
              alt=''
              style={{ maxWidth: maxWidthMobile }}
            />
            <p>{description}</p>
          </Col>
        </Row>
      </RigtCardStyled>
    </Container>
  );
};

export default RigtCard;

const RigtCardStyled = styled.div`
  @media (max-width: 576px) {
    text-align: center !important;
  }
  .row {
    padding: 7rem 0;
    @media (max-width: 576px) {
      padding: 5rem 1rem;
    }
  }
  .right-card-img {
    max-width: 420px;
    width: 100%;
    margin-top: -14rem;
    @media (max-width: 768px) {
      margin-top: -11rem;
    }
    @media (max-width: 576px) {
      max-width: 225px;
    }
  }
  p,
  h1 {
    text-align: right;
    @media (max-width: 576px) {
      text-align: center !important;
    }
  }

  .title {
    max-width: 50%;
    margin-top: -5rem;
    margin-left: auto;
    @media (max-width: 768px) {
      margin-top: -9rem;
    }
    @media (max-width: 576px) {
      margin-top: 1rem;
      max-width: 100%;
    }
  }
  p {
    max-width: 600px;
    font-size: 24px;
    color: #32741b;
    margin-left: auto;
    margin-top: 1.5rem;
    @media (max-width: 576px) {
      font-size: 14px;
      margin-bottom: 5rem;
    }
  }
`;
