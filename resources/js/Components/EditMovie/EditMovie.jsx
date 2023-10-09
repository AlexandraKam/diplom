import React, { useEffect } from "react";
import Modal from 'react-modal';
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import { useState } from "react";


function EditMovie({ movie, modalIsOpen, onCloseModal }) {
  const defaultMovie = {
    name: "",
    duration: "",
    synopsis: "",
    origin: "",
    genre: ""
  }

  const [movieEdit, setMovieEdit] = useState(defaultMovie)

  useEffect(() => {
    setMovieEdit({ ...defaultMovie, ...movie });
  }, [movie])

  const [modalIsOpenDelet, setModalIsOpenDelet] = useState(false);
  const [movieValues, setMovieValues] = useState({});

  // const deleteMovie = (event, name) => {
  //   onChange(event.target.value, name)
  // }

  const openModal = (event, id, name) => {
    const movieTMP = { id, name };
    setModalIsOpenDelet(true);
    setMovieValues(movieTMP);
  };

  const closeModal = () => {
    setModalIsOpenDelet(false);
    onCloseModal();
  };

  const handleChange = (event, value) => {
    const movieTMP = { ...movieEdit };
    value === "name" ? movieTMP.name = event.target.value : null;
    value === "synopsis" ? movieTMP.synopsis = event.target.value : null;
    value === "duration" ? movieTMP.duration = event.target.value : null;
    value === "origin" ? movieTMP.origin = event.target.value : null;
    value === "genre" ? movieTMP.genre = event.target.value : null;
    setMovieEdit(movieTMP);
    console.log(event)
  }

  const modalContent = (
    <div className="popup active">
      <div className="popup__container">
        <div className="popup__content">
          <div className="popup__header">
            <h2 className="popup__title">
              Редактирование фильма
            </h2>

          </div>
          <div className="popup__wrapper">
            <form action="add_movie" method="post" acceptCharset="utf-8">
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name"
                  value={movieEdit.name} onChange={(e) => handleChange(e, "name")} required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Постер
                <input className="conf-step__input" type="file" name="poster" required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Краткое описание
                <input className="conf-step__input" type="text" placeholder="Например, Клара у Карла украла кораллы" name="synopsis"
                  value={movieEdit.synopsis} onChange={(e) => handleChange(e, "synopsis")} required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Продолжительность
                <input className="conf-step__input" type="text" placeholder="Например, 100 минут" name="duration"
                  value={movieEdit.duration} onChange={(e) => handleChange(e, "duration")} required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Страна производства
                <input className="conf-step__input" type="text" placeholder="Например, Индия" name="origin"
                  value={movieEdit.origin} onChange={(e) => handleChange(e, "origin")} required />
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Жанр
                <input className="conf-step__input" type="text" placeholder="Например, триллер" name="genre"
                  value={movieEdit.genre} onChange={(e) => handleChange(e, "genre")} required />
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" onClick={handleChange} />
                <button className="conf-step__button conf-step__button-regular" onClick={onCloseModal}>Отменить</button>
                <input type="submit" value="Удалить" className="conf-step__button conf-step__button-accent" onClick={(e) => openModal(e, movie.id, movie.name)} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={onCloseModal} ariaHideApp={false}>
        {modalContent}
      </Modal>
      < DeleteMovie id={movieValues.id} name={movieValues.name} modalIsOpenDelet={modalIsOpenDelet} onCloseModal={closeModal} />
    </div>
  )
}

export default EditMovie;