import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function AddSeance({ cinemaHalls, movies }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [state, setState] = useState("");

  const { data, setData, post, errors } = useForm({
    start: '00:00'
  })

  function handleSubmit(e) {
    e.preventDefault()
    post('/seances', { onSuccess: () => closeModal() });
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
            </h2>

          </div>
          <div className="popup__wrapper">
            <form onSubmit={handleSubmit}>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="hall">
                Номер зала
                <select className="conf-step__input" name="hall" required onChange={e => setData('cinema_hall_id', e.target.value)}>
                  <option>Выберите зал</option>
                  {cinemaHalls.map((cinemaHall, index) =>
                    <option key={index} value={cinemaHall.id}>{cinemaHall.number}</option>)}
                </select>
                {errors.cinema_hall_id && <span>{errors.cinema_hall_id}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Время начала
                <input className="conf-step__input" type="time" name="start_time" required onChange={e => setData('start', e.target.value)} />
                {errors.start && <span>{errors.start}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <select className="conf-step__input" name="movie" required onChange={e => setData('movie_id', e.target.value)}>
                  <option>Выберите фильм</option>
                  {movies.map((movie, index) =>
                    <option key={index} value={movie.id} >{movie.name}</option>)}
                </select>
                {errors.movie_id && <span>{errors.movie_id}</span>}
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