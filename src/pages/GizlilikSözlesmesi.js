import styled from 'styled-components';

import { Container } from 'react-bootstrap';
import { gizlilik_sözlesmesi } from '../content';

const GizlilikSözlesmesi = () => {
  /*  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
        mode: 'no-cors',
      };
      const result = await axios(
        'https://mservice.pazardan.app/pazardanWebApp/AgreementSelect?type=Gizlilik',
        config
      );

      setData(result.data.data[0].user_agreement_detail);
      setLoading(false);
    };
    fetchData();
    // eslint-disable-next-line
  }, []); */
  function createMarkup() {
    return {
      __html: gizlilik_sözlesmesi,
    };
  }
  /*  if (loading) {
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
  } */
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
  margin-top: 9rem;
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
