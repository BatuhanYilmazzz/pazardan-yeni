import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import { kvkk } from '../content';

const Kvkk = () => {
  function createMarkup() {
    return {
      __html: kvkk,
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
  margin-top: 9rem;
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
