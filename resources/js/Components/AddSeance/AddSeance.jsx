import React from "react";
import Modal from 'react-modal';
import { useState } from "react";

function AddSeance({ cinemaHalls, movies }) {
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
              Добавление сеанса
              <a className="popup__dismiss" href="#"><img src="i/close.png" alt="Закрыть" /></a>
            </h2>

          </div>
          <div className="popup__wrapper">
            <form action="add_movie" method="post" acceptCharset="utf-8">
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
                Номер зала
                <select className="conf-step__input" name="hall" required>
                  {cinemaHalls.map((cinemaHall, index) =>
                    <option key={index} >{cinemaHall.number}</option>)}
                </select>
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Время начала
                <input className="conf-step__input" type="time" name="start_time" required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <select className="conf-step__input" name="movie" required>
                  {movies.map((movie, index) =>
                    <option key={index} >{movie.name}</option>)}
                </select>
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить" className="conf-step__button conf-step__button-accent" />
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
      <p className="conf-step__paragraph">
        <button className="conf-step__button conf-step__button-accent" onClick={openModal}>Добавить сеанс</button>
      </p>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          {modalContent}
        </Modal>
      </div>
    </>
  )

}

export default AddSeance;