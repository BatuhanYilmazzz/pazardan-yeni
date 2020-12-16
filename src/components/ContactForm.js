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
