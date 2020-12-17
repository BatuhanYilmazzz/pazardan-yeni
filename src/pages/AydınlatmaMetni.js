import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { aydınlatma_metni } from '../content';

const AydınlatmaMetni = () => {
  function createMarkup() {
    return {
      __html: aydınlatma_metni,
    };
  }

  return (
    <AydınlatmaMetniStyled>
      <div className='aydınlatma-header'>
        <Container>
          <h1>AYDINLATMA METNİ</h1>
        </Container>
      </div>
      <Container>
        <div dangerouslySetInnerHTML={createMarkup()} className='px-3 py-4' />
      </Container>
    </AydınlatmaMetniStyled>
  );
};

export default AydınlatmaMetni;

const AydınlatmaMetniStyled = styled.div`
  margin-top: 9rem;
  .aydınlatma-header {
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
