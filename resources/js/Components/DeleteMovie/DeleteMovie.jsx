import React from "react";
import Modal from 'react-modal';

function DeleteMovie({ id, name, modalIsOpenDelet, onCloseModal }) {

  // const [state, setState] = useState("");

  const handleChange = (event, id) => {
    console.log(event, id)
    // setState("");
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
            <form action="delete_hall" method="post" acceptCharset="utf-8">
              <p className="conf-step__paragraph">Вы действительно хотите удалить фильм <span></span>{name}</p>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => handleChange(e, id)}/>
                <button className="conf-step__button conf-step__button-regular" onClick={onCloseModal}>Отменить</button>
              </div>
            </form>
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