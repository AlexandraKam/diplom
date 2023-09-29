import React from "react";
import Modal from 'react-modal';
import { useState } from "react";

function DeleteHall() {

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
              Удаление зала
            </h2>

          </div>
          <div className="popup__wrapper">
            <form action="delete_hall" method="post" acceptCharset="utf-8">
              <p className="conf-step__paragraph">Вы действительно хотите удалить зал <span></span>?</p>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent"/>
                  <button className="conf-step__button conf-step__button-regular" onClick={closeModal}>Отменить</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );


  return (  
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          {modalContent}
        </Modal>
      </div>

  )
}

export default DeleteHall;