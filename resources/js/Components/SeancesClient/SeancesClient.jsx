import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";

function SeancesClient({ seances }) {

  let seancesMovies = [];
  seances.forEach((element) => {
    element.cinemaHall.opened === true ?
    seancesMovies[element.movie.id] = element.movie : null;
  });

  const cinemaHallsMovie = (movie) => {
    let seancesHalls = [];
    seances.forEach((seance) => {
      seance.movie.id === movie.id && seance.cinemaHall.opened === true ?
        seancesHalls[seance.cinemaHall.id] = seance.cinemaHall : null;
    });
    seancesHalls = seancesHalls.sort((a, b) => {
      if (a.number > b.number) {
        return 1;
      }
      if (a.number < b.number) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    })
    return seancesHalls
  }

  return (
    <main>
      {seancesMovies.map((seancesMovie, index) =>
        <section key={index} className="movie">
          <div className="movie__info">
            <div className="movie__poster">
              <img className="movie__poster-image" alt={seancesMovie.name + " постер"} src={seancesMovie.poster} />
            </div>
            <div className="movie__description">
              <h2 className="movie__title">{seancesMovie.name}</h2>
              <p className="movie__synopsis">{seancesMovie.synopsis}</p>
              <p className="movie__data">
                <span className="movie__data-duration">{seancesMovie.duration} минут</span>
                <span className="movie__data-genre"> {seancesMovie.genre} </span>
                <span className="movie__data-origin">{seancesMovie.origin}</span>
              </p>
            </div>
          </div>
          {cinemaHallsMovie(seancesMovie).map((seancesHall, indexH) =>
            <div key={indexH} className="movie-seances__hall">
              <h3 className="movie-seances__hall-title">Зал {seancesHall.number}</h3>
              <ul className="movie-seances__list">
                {seances.map((seance, indexS) =>
                  seancesHall.id === seance.cinemaHall.id && seancesMovie.id === seance.movie.id &&
                  <li key={indexS} className="movie-seances__time-block">
                    <Link className="movie-seances__time" href={`/hall/${seance.id}`}>{seance.start}</Link>
                    {/* <a className="movie-seances__time" href="hall.html">{seance.start}</a> */}
                  </li>
                )}
              </ul>
            </div>
          )}
        </section>
      )}
    </main>
  )
}

export default SeancesClient;