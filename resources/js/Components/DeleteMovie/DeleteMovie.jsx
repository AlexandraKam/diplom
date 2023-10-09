import { router } from "@inertiajs/react";
import React from "react";
import Modal from 'react-modal';

function DeleteMovie({ id, name, modalIsOpenDelet, onCloseModal }) {

  const deleteMovie = () => {
    router.delete(`movies/${id}`, {
      onSuccess: page => { onCloseModal() }
    })
  }

  const modalContent = (
    <div className="popup">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              Удаление фильма
            </h2>

          </div>
          <div className="popup__wrapper">
            <p className="conf-step__paragraph">Вы действительно хотите удалить фильм <span></span>{name}</p>
            <div className="conf-step__buttons text-center">
              <button className="conf-step__button conf-step__button-accent" onClick={deleteMovie}>Удалить</button>
              <button className="conf-step__button conf-step__button-regular" onClick={onCloseModal}>Отменить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div>
      <Modal isOpen={modalIsOpenDelet} onRequestClose={onCloseModal} ariaHideApp={false}>
        {modalContent}
      </Modal>
    </div>

  )
}

export default DeleteMovie;