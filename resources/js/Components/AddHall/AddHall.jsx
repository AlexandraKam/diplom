import React from "react";
import Modal from 'react-modal';
import { useState } from "react";

function AddHall() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [state, setState] = useState("");

  const handleChange = (event) => {
    console.log(event)
    // setState("");
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
            <form action="add_hall" method="post" acceptCharset="utf-8">
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название зала
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Зал 1&raquo;" name="name" />
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить зал" className="conf-step__button conf-step__button-accent" onClick={handleChange} />
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