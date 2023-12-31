import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
import { router, useForm } from "@inertiajs/react";

function AddHall() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [state, setState] = useState("");

  const { data, setData, post, errors } = useForm({
    number: '',
    opened: false
  })

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  function handleSubmit(e) {
    e.preventDefault()
    post('/cinema-halls', { onSuccess: () => closeModal() });
  }

  const modalContent = (
    <div className="popup">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              Добавление зала
            </h2>
          </div>
          <div className="popup__wrapper">
            <form onSubmit={handleSubmit}>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Номер зала
                <input className="conf-step__input" type="number" placeholder="Например, &laquo; 1&raquo;" required onChange={e => setData('number', e.target.value)} />
              </label>
              { errors.number && <span className="error">{ errors.number }</span> }
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить зал" className="conf-step__button conf-step__button-accent" />
                <button className="conf-step__button conf-step__button-regular" onClick={closeModal}>Отменить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <>
      <button className="conf-step__button conf-step__button-accent" onClick={openModal}>Создать зал</button>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          {modalContent}
        </Modal>
      </div>
    </>
  )
}

export default AddHall;