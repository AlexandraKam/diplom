import React, { useEffect } from "react";
import Modal from 'react-modal';
import DeleteMovie from "../DeleteMovie/DeleteMovie";
import { useState } from "react";
import { useForm } from "@inertiajs/react";


function EditMovie({ movie, modalIsOpen, onCloseModal }) {
  const defaultMovie = {
    name: "",
    duration: "",
    synopsis: "",
    origin: "",
    genre: ""
  }

  const { data, setData, post, errors } = useForm(defaultMovie)

  useEffect(() => {
    setData({ ...defaultMovie, ...movie, poster: null });
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

  function handleSubmit(e) {
    e.preventDefault()
    post(`/movies/${movie.id}`, {
      onSuccess: () => closeModal()
    });
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
            <form onSubmit={handleSubmit}>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Название фильма
                <input className="conf-step__input" type="text" placeholder="Например, &laquo;Гражданин Кейн&raquo;" name="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                {errors['name'] && <span>{errors['name']}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Постер
                <input className="conf-step__input" type="file" name="poster" onChange={e => setData('poster', e.target.files[0])} />
                {errors['poster'] && <span>{errors['poster']}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Краткое описание
                <input className="conf-step__input" type="text" placeholder="Например, Клара у Карла украла кораллы" name="synopsis"
                  value={data.synopsis} onChange={e => setData('synopsis', e.target.value)} required />
                  {errors['synopsis'] && <span>{errors['synopsis']}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Продолжительность
                <input className="conf-step__input" type="text" placeholder="Например, 100 минут" name="duration"
                  value={data.duration} onChange={(e) => setData('duration', e.target.value)} required />
                  {errors['duration'] && <span>{errors['duration']}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Страна производства
                <input className="conf-step__input" type="text" placeholder="Например, Индия" name="origin"
                  value={data.origin} onChange={(e) => setData('origin', e.target.value)} required />
                  {errors['origin'] && <span>{errors['origin']}</span>}
              </label>
              <label className="conf-step__label conf-step__label-fullsize" htmlFor="name">
                Жанр
                <input className="conf-step__input" type="text" placeholder="Например, триллер" name="genre"
                  value={data.genre} onChange={(e) => setData('genre', e.target.value)} required />
                  {errors['genre'] && <span>{errors['genre']}</span>}
              </label>
              <div className="conf-step__buttons text-center">
                <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
                <button className="conf-step__button conf-step__button-regular" onClick={onCloseModal}>Отменить</button>
                <button className="conf-step__button conf-step__button-accent" onClick={(e) => openModal(e, movie.id, movie.name)} >Удалить</button>
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