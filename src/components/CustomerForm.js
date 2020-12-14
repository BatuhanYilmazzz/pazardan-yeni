import React, { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

function DoneModal(props) {
  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='little-modal'
    >
      <img src='/images/done.png' alt='' onClick={props.onHide} />
    </Modal>
  );
}

function CustomerForm(props) {
  const [modalShow2, setModalShow2] = useState(false);
  const [state, setState] = useState({
    name: '',
    surname: '',
    city: '',
    phone: '',
  });
  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
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
        dialog_record_subject_type: 'Satıcı',
        dialog_record_user_note: '[NOTLAR]',
        dialog_record_contact_information: `ad:${state.name}, soyad:${state.surname},telefon:${state.phone},şehir:${state.city} `,
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
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));

    /*  setTimeout(() => {
      setModalShow2(true);
    }, 2000); */

    /*  setTimeout(() => {
      setState({
        name: '',
        surname: '',
        city: '',
        phone: '',
      });
    }, 2000); */
  };
  return (
    <>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <div className='header-wrapper'>
          <img
            src='/images/close.png'
            alt=''
            className='close-button ml-auto'
            onClick={props.onHide}
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
                <input
                  type='number'
                  name='phone'
                  value={state.phone}
                  onChange={onChange}
                  required
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
      <DoneModal show={modalShow2} onHide={() => setModalShow2(false)} />
    </>
  );
}

export default CustomerForm;
