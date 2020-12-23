import React, { useState } from 'react';
import { Modal, Col, Row, Container } from 'react-bootstrap';
import styled from 'styled-components';
import { scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Input from 'react-phone-number-input/input';
import Loading from './Loading';

const Menu = () => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, setState] = useState({
    name: '',
    surname: '',
    city: '',
  });
  const [phone, setPhone] = useState('');
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append(
      'Data',
      JSON.stringify({
        optarget: 'tbl_dialog_record',
        optype: 'insert',
        opvalue: '',
        formid: '',
        dialog_record_source_type: 'Webform',
        dialog_record_subject_type: 'Satıcı Basvuru',
        dialog_record_user_note: '[NOTLAR]',
        dialog_record_contact_information: `ad:${state.name}, soyad:${state.surname},sehir:${state.city},telefon:${phone}`,
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
      'https://cors-anywhere.herokuapp.com/https://mservice.pazardan.app/pazardanWebApp/DialogRecordInsert',
      requestOptions
    )
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSuccess(true);
          setModalShow(false);
        }
      })
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    /*  setTimeout(() => {
      setState({
        name: '',
        surname: '',
        city: '',
        phone: '',
      });
      setPhone('');
    }, 2000); */
  };
  function Success() {
    return (
      <Modal
        show={success}
        onHide={() => setSuccess(false)}
        contentClassName='form-content'
      >
        <img src='/images/done.png' alt='' onClick={() => setSuccess(false)} />
      </Modal>
    );
  }
  const handleClick = () => {
    scroller.scrollTo('myScrollToElement', {
      duration: 800,
      delay: 1,
      smooth: 'easeInOutQuart',
      offset: -150,
    });
  };
  return (
    <Container>
      <MenuStyled>
        <div className='modal-form'>{success && <Success />}</div>

        <div className='wrapper'>
          <div className='logo'>
            <NavLink to='/'>
              <img
                src='/images/logo.png'
                alt=''
                className='d-none d-sm-block'
              />
            </NavLink>
            <NavLink to='/'>
              <img
                src='/images/headingsmobile/pazardan.png'
                alt=''
                className='d-sm-none'
              />
            </NavLink>
          </div>
          <div className='button-wrapper'>
            <button onClick={() => setModalShow(true)}>
              Satıcı olmak istiyorum
            </button>
            <button className='contact' onClick={handleClick}>
              İletişim
            </button>
          </div>
        </div>
      </MenuStyled>
      <Modal
        show={modalShow}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        {loading && <Loading />}
        <div className='header-wrapper'>
          <img
            src='/images/close.png'
            alt=''
            className='close-button ml-auto'
            onClick={() => setModalShow(false)}
          />
          <img
            src='/images/anketformheading.png'
            alt='Satıcı Ön Değerlendirme Formu'
            className='form-heading'
          />
          <p>
            Pazardan’a satıcı olarak kaydolmak için <br /> lütfen formu
            doldurunuz.
          </p>
        </div>
        <form onSubmit={handleSubmit} className='form'>
          <Row>
            <Col xs={12}>
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
            <Col xs={12}>
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
            <Col xs={12}>
              <div className='input-wrapper'>
                <p className='input-title'>Telefon Numaranız</p>
                <Input
                  country='TR'
                  international
                  withCountryCallingCode
                  value={phone}
                  onChange={setPhone}
                />
              </div>
            </Col>
            <Col xs={12}>
              <div className='input-wrapper'>
                <p className='input-title'>Şehir</p>
                <input
                  type='text'
                  name='city'
                  value={state.city}
                  onChange={onChange}
                  required
                />
              </div>
            </Col>
          </Row>
          <button type='submit' className='submit-button'>
            Gönder
          </button>
        </form>
      </Modal>
      {/* <DoneModal show={modalShow2} onHide={() => setModalShow2(false)} /> */}
    </Container>
  );
};

export default Menu;

const MenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;
  z-index: 9;

  .wrapper {
    max-width: 1200px;
    padding: 1.5rem 1rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 576px) {
      display: block;
      text-align: center;
      padding: 0.5rem 1rem;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    img {
      max-width: 260px;
      @media (max-width: 576px) {
        max-width: 160px;
        margin-bottom: 2rem;
      }
    }
    h1 {
      color: #46742c;
      margin-bottom: 1rem;
      font-weight: bold;
    }
    @media (max-width: 576px) {
      justify-content: center;
    }
  }
  .button-wrapper {
    display: flex;
    align-items: center;
    @media (max-width: 576px) {
      justify-content: center;
    }
  }
  button {
    padding: 0.9rem 2.2rem;
    background-color: #90b437;
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
    transition: all 0.3s ease;
    @media (max-width: 576px) {
      margin: 0.5rem 0;
      font-size: 15px;
      padding: 0.9rem 1rem;
    }
    &:hover {
      background-color: #46742c;
    }
  }

  .contact {
    margin-left: 2rem;
    @media (max-width: 576px) {
      margin-left: 0.5rem;
    }
  }
`;
