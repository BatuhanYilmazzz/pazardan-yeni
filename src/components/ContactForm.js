import React, { useState } from 'react';
import styled from 'styled-components';
import * as Scroll from 'react-scroll';
import { Container, Row, Col, Spinner, Modal } from 'react-bootstrap';

const ContactForm = () => {
  let Element = Scroll.Element;
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({
    name: '',
    surname: '',
    message: '',
    email: '',
    phone: '',
    ileti: false,
    topic: '',
  });

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      'Data',
      JSON.stringify({
        optarget: 'tbl_dialog_record',
        optype: 'insert',
        opvalue: '',
        formid: '',
        dialog_record_source_type: 'Webform',
        dialog_record_subject_type: state.topic,
        dialog_record_user_note: '[NOTLAR]',
        dialog_record_contact_information: `ad:${state.name}, soyad:${state.surname},telefon:${state.phone},mesaj:${state.message},iletileri almak istiyorum:${state.ileti} `,
        dialog_record_is_active: '1',
        dialog_record_is_deleted: '0',
      })
    );

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://cors-anywhere.herokuapp.com/https://pazardan.int.bz/pazardanWebApp/DialogRecordInsert',
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccess(true);
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
    /*  setTimeout(() => {
      setState({
        name: '',
        surname: '',
        message: '',
        email: '',
        phone: '',
        topic: '',
      });
    }, 2000); */
  };

  function Success() {
    return (
      <Modal
        show={success}
        onHide={() => setSuccess(false)}
        contentClassName='form-content'
      >
        <img src='/images/done.png' alt='' />
      </Modal>
    );
  }

  function Loading() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'absolute',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
        }}
      >
        <Spinner animation='border' variant='success' />
      </div>
    );
  }
  return (
    <ContactFormStyled>
      <Container>
        <div className='modal-form'>{success && <Success />}</div>
        {loading && <Loading />}
        <Element name='myScrollToElement' id='contact'>
          <img
            className='contact-us'
            src='/images/headings/bizeulasın@2x.png'
            alt=''
          />
        </Element>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <div className='input-wrapper'>
                <p className='input-title'>Adınız</p>
                <input
                  type='text'
                  name='name'
                  value={state.name}
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className='input-wrapper'>
                <p className='input-title'>Soyadınız</p>
                <input
                  type='text'
                  name='surname'
                  value={state.surname}
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className='input-wrapper'>
                <p className='input-title'>Telefon Numaranız</p>
                <input
                  type='number'
                  name='phone'
                  value={state.phone}
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
            <Col md={6}>
              <div className='input-wrapper'>
                <p className='input-title'>E-mail Adresiniz</p>
                <input
                  type='email'
                  name='email'
                  value={state.email}
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className='input-wrapper'>
                <p className='input-title'>Konu Seçiniz</p>
                <select
                  name='topic'
                  id='topic'
                  value={state.topic}
                  onChange={onChange}
                >
                  <option value='öneri'>Öneri</option>
                  <option value='sikayet'>Şikayet</option>
                  <option value='iade'>İade</option>
                  <option value='diger'>Diğer</option>
                </select>
              </div>
            </Col>
            <Col xs={12}>
              <div className='input-wrapper'>
                <p className='input-title'>Mesajınız</p>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={state.message}
                  onChange={onChange}
                  required
                ></textarea>
              </div>
            </Col>
          </Row>
          <div className='checkbox-wrapper'>
            <input
              className='check-box'
              type='checkbox'
              name='ileti'
              value={state.ileti}
              onChange={(e) => {
                setState({ ...state, [e.target.name]: e.target.checked });
              }}
            />
            <p className='text-left'>
              Kişisel Verilerin İşlenmesi Aydınlatma Metni'nde belirtildiği
              üzere kişisel verilerimin müşteri kaydı oluşturulması ve bu
              kapsamda; ürün ve hizmetlerin beğeni, kullanım alışkanlıkları ve
              ihtiyaçlarıma göre özelleştirilerek önerilmesi ile satış ve
              pazarlama faaliyetleri amacıyla işlenmesini ve bu kapsamda hizmet
              alınan üçüncü kişilerle paylaşılmasını kabul ediyorum.
            </p>
          </div>
          <button type='submit' className='submit-button'>
            Gönder
          </button>
        </form>
      </Container>
    </ContactFormStyled>
  );
};

export default ContactForm;

const ContactFormStyled = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  max-width: 750px;
  margin: auto;
  position: relative;
  .contact-us {
    max-width: 250px;
    margin-bottom: 3rem;
    @media (max-width: 576px) {
      max-width: 200px;
    }
  }
  input,
  select,
  textarea {
    width: 100%;
    border: 1px solid #90b52a;
    margin-bottom: 2rem;
    padding: 0.75rem 1.2rem;
    border-radius: 12px;
    font-size: 14px;
    color: #46742c;
  }
  .input-wrapper {
    position: relative;
  }
  .input-title {
    font-size: 12px;
    position: absolute;
    left: 25px;
    top: -8px;
    color: #46742c;
    background-color: #fff;
    padding: 0 0.4rem;
    margin-bottom: 0;
  }
  .checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    p {
      color: #46742c;
      font-size: 12px;
      margin-bottom: 0;
      margin-left: 1rem;
    }
    input {
      padding: 0;
      width: unset;
      margin-bottom: 0;
    }
  }

  input[type='checkbox'] {
    /* remove browser chrome */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    /*add styling */
    position: relative;
    width: 2.1rem;
    height: 1rem;
    overflow: hidden;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='checkbox']::before {
    content: '';
    color: #fff;
    position: absolute;
    width: 0.7rem;
    height: 0.7rem;
    top: 2px;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: transparent;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 2px;
    -webkit-transform: scale(0);
    transform: scale(0);
    -webkit-transition: -webkit-transform 0.25s ease-in-out;
    transition: -webkit-transform 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out;
    transition: transform 0.25s ease-in-out, -webkit-transform 0.25s ease-in-out;
    /* base64 encoded to make things easier to show 
  	normally you would use an image or a font
  */
    background-image: url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjQ0OCIgaGVpZ2h0PSI0NDgiIHZpZXdCb3g9IjAgMCA0NDggNDQ4Ij4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTQxNy43NSAxNDEuNWMwIDYuMjUtMi41IDEyLjUtNyAxN2wtMjE1IDIxNWMtNC41IDQuNS0xMC43NSA3LTE3IDdzLTEyLjUtMi41LTE3LTdsLTEyNC41LTEyNC41Yy00LjUtNC41LTctMTAuNzUtNy0xN3MyLjUtMTIuNSA3LTE3bDM0LTM0YzQuNS00LjUgMTAuNzUtNyAxNy03czEyLjUgMi41IDE3IDdsNzMuNSA3My43NSAxNjQtMTY0LjI1YzQuNS00LjUgMTAuNzUtNyAxNy03czEyLjUgMi41IDE3IDdsMzQgMzRjNC41IDQuNSA3IDEwLjc1IDcgMTd6Ij48L3BhdGg+Cjwvc3ZnPgo=');
  }

  input[type='checkbox']:checked::before {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  .submit-button {
    border: none;
    background-color: #90b52a;
    padding: 0.75rem 0;
    max-width: 320px;
    width: 100%;
    border-radius: 12px;
    font-size: 14px;
    color: #fff;
    font-weight: bold;
  }
`;
