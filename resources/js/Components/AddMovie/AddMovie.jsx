import React from "react";
import Modal from 'react-modal';
import { useState } from "react";
import { useForm } from "@inertiajs/react";

function AddMovie() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [state, setState] = useState("");
  const { data, setData, post, errors } = useForm({
    name: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    post('/movies', { onSuccess: () => closeModal() });
  }

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div className="popup active">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              Добавление фильма
            </h2>

          </div>
          <div className="popup__wrapper">
            <form onSubmit={handleSubmit}>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name" required onChange={e => setData('name', e.target.value)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Постер
                <input className="conf-step__input" type="file" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="poster" onChange={e => setData('poster', e.target.files[0])} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Краткое описание
                <input className="conf-step__input" type="text" placeholder="Например, Клара у Карла украла кораллы" name="synopsis" required onChange={e => setData('synopsis', e.target.value)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Продолжительность в минутах
                <input className="conf-step__input" type="number" placeholder="Например, 100" name="duration" required onChange={e => setData('duration', e.target.value)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Страна производства
                <input className="conf-step__input" type="text" placeholder="Например, Индия" name="origin" required onChange={e => setData('origin', e.target.value)} />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Жанр
                <input className="conf-step__input" type="text" placeholder="Например, триллер" name="genre" required onChange={e => setData('genre', e.target.value)} />
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Добавить фильм" className="conf-step__button conf-step__button-accent" />
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
        <button className="conf-step__button conf-step__button-accent" onClick={openModal}>Добавить фильм</button>
      </p>
      <div>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
          {modalContent}
        </Modal>
      </div>
    </>
  )

}

export default AddMovie;