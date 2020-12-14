import React from 'react';
import LeftCard from '../components/LeftCard';
import RigtCard from '../components/RightCard';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import { data } from '../content';
import { Fragment } from 'react';
const Home = () => {
  return (
    <HomeStyled>
      <Header />
      <div className='text-center'>
        <img
          src='/images/headings/nedenpazardan@2x.png'
          alt='nedenpazardan'
          className='why-pazardan-title'
        />
      </div>
      {data.map((item, index) => (
        <Fragment key={index}>
          <LeftCard
            textcolor={item.class}
            title1={item.title1}
            title1mobile={item.title1mobile}
            description={item.paragraph1}
            img1={item.img1}
            backgroundImage={item.backgroundImage}
          />
          <RigtCard
            title2={item.title2}
            title2mobile={item.title2mobile}
            description={item.paragraph2}
            img2={item.img2}
            maxWidth={item.maxWidth}
            maxWidthMobile={item.maxWidthMobile}
          />
        </Fragment>
      ))}
      <img className='map-pazardan' src='/images/map_pazardan@2x.png' alt='' />
      <ContactForm />
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.div`
  .why-pazardan-title {
    max-width: 450px;
    text-align: center;
    padding: 5rem 1rem;
    margin-bottom: 5rem;
    @media (max-width: 768px) {
      padding: 3rem 0;
    }
    @media (max-width: 768px) {
      max-width: 300px;
    }
  }
  .map-pazardan {
    width: 100%;
  }
`;
