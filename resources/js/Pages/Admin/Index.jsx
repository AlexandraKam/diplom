import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import CinemaHallName from '@/Components/CinemaHallName/CinemaHallName';
import NumberOfSeats from '@/Components/NumberOfSeats/NumberOfSeats';
import PricesHall from '@/Components/PricesHall/PricesHall';
import AddHall from '@/Components/AddHall/AddHall';
import AddMovie from '@/Components/AddMovie/AddMovie';
import Movies from '@/Components/Movies/Movies';
import { useState } from 'react';


export default function Index({ auth }) {

  const [valueChairs, setValueChairs] = useState('')

  const [valuePrices, setValuePrices] = useState('')

  const handleChange = (value, name) => {
    name === "chairs-hall" ? setValueChairs(value) : null;
    name === "prices-hall" ? setValuePrices(value) : null;
  }

  const cinemaHalls = [
    {
      name: "Зал 1",
      id: 111,
      rows: 10,
      seats: 8,
      price: 100,
      priceVIP: 200
    },
    {
      name: "Зал 2",
      id: 222,
      rows: 10,
      seats: 10,
      price: 150,
      priceVIP: 250
    }
  ]

  const movies = [
    {
      name: "Звёздные войны XXIII: Атака клонированных клонов",
      id: 1001,
      poster: "build/assets/i/poster.png",
      duration: "130 минут",
      synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
      origin: "США",
      genre: "Фантастика"
    },
    {
      name: "Альфа",
      id: 1002,
      poster: "build/assets/i/poster.png",
      duration: "96 минут",
      synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
      origin: "Франция",
      genre: "Фантастика"
    },
    {
      name: "Хищник",
      id: 1003,
      poster: "build/assets/i/poster.png",
      duration: "101 минута",
      synopsis: "Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.",
      origin: "Канада, США",
      genre: "Комедия"
    }
  ]

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Chirps" />

      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
        <span className="page-header__subtitle">Администраторррская</span>
      </header>
      <main className="conf-steps">
        <section className="conf-step">
          <header className="conf-step__header conf-step__header_opened">
            <h2 className="conf-step__title">Управление залами</h2>
          </header>
          <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Доступные залы:</p>
            <ul className="conf-step__list">
              <CinemaHallName addNameHall={cinemaHalls} position={"vertical"} onChange={handleChange} />
            </ul>
            <AddHall />
          </div>
        </section>
      </main>

      <section className="conf-step">
        <header className="conf-step__header conf-step__header_opened">
          <h2 className="conf-step__title">Конфигурация залов</h2>
        </header>
        <div className="conf-step__wrapper">
          <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
          <ul className="conf-step__selectors-box">
            <CinemaHallName addNameHall={cinemaHalls} position={"horizontal"} name={"chairs-hall"} onChange={handleChange} />
          </ul>
          {cinemaHalls.map((cinemaHall) =>
            cinemaHall.id == valueChairs ? <NumberOfSeats cinemaHall={cinemaHall} /> : null)}
        </div>
      </section>
      <section className="conf-step">
        <header className="conf-step__header conf-step__header_opened">
          <h2 className="conf-step__title">Конфигурация цен</h2>
        </header>
        <div className="conf-step__wrapper">
          <p className="conf-step__paragraph">Выберите зал для конфигурации:</p>
          <ul className="conf-step__selectors-box">
            <CinemaHallName addNameHall={cinemaHalls} position={"horizontal"} name={"prices-hall"} onChange={handleChange} />
          </ul>
          {cinemaHalls.map((cinemaHall) =>
            cinemaHall.id == valuePrices ? <PricesHall cinemaHall={cinemaHall} /> : null)}
        </div>
      </section>

      <section className="conf-step">
        <header className="conf-step__header conf-step__header_opened">
          <h2 className="conf-step__title">Сетка сеансов</h2>
        </header>
        <div className="conf-step__wrapper">
          <AddMovie />
          <div className="conf-step__movies">
            <Movies movies={movies}/>
          </div>

          {/* <div className="conf-step__seances">
            <div className="conf-step__seances-hall">
              <h3 className="conf-step__seances-title">Зал 1</h3>
              <div className="conf-step__seances-timeline">
                <div className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                  <p className="conf-step__seances-movie-start">00:00</p>
                </div>
                <div className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                  <p className="conf-step__seances-movie-start">12:00</p>
                </div>
                <div className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                  <p className="conf-step__seances-movie-start">14:00</p>
                </div>
              </div>
            </div>
            <div className="conf-step__seances-hall">
              <h3 className="conf-step__seances-title">Зал 2</h3>
              <div className="conf-step__seances-timeline">
                <div className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">Звёздные войны XXIII: Атака клонированных клонов</p>
                  <p className="conf-step__seances-movie-start">19:50</p>
                </div>
                <div className="conf-step__seances-movie" >
                  <p className="conf-step__seances-movie-title">Миссия выполнима</p>
                  <p className="conf-step__seances-movie-start">22:00</p>
                </div>
              </div>
            </div>
          </div>

          <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular">Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
          </fieldset> */}
        </div>
      </section>

      {/* <section className="conf-step">
        <header className="conf-step__header conf-step__header_opened">
          <h2 className="conf-step__title">Открыть продажи</h2>
        </header>
        <div className="conf-step__wrapper text-center">
          <p className="conf-step__paragraph">Всё готово, теперь можно:</p>
          <button className="conf-step__button conf-step__button-accent">Открыть продажу билетов</button>
        </div>
      </section> */}

    </AuthenticatedLayout>
  );
}