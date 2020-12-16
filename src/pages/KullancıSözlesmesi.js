import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { kullanıcı_sözlesmesi } from '../content';

const KullancıSözlesmesi = () => {
  function createMarkup() {
    return {
      __html: kullanıcı_sözlesmesi,
    };
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
