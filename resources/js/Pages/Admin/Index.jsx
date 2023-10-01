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
import Seances from '@/Components/Seances/Seances';
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
      number: 1,
      id: 111,
      rows: 10,
      seats: 8,
      price: 100,
      priceVIP: 200
    },
    {
      number: 2,
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

  const seances = [
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
      },
      start: "00:00",
      opened: true
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001
      },
      start: "12:00",
      opened: true
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Альфа",
        id: 1002
      },
      start: "14:00",
      opened: true
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Альфа",
        id: 1002
      },
      start: "19:50",
      opened: true
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Хищник",
        id: 1003
      },
      start: "22:00",
      opened: true
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
              <CinemaHallName cinemaHalls={cinemaHalls} position={"vertical"} onChange={handleChange} />
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
            <CinemaHallName cinemaHalls={cinemaHalls} position={"horizontal"} name={"chairs-hall"} onChange={handleChange} />
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
            <CinemaHallName cinemaHalls={cinemaHalls} position={"horizontal"} name={"prices-hall"} onChange={handleChange} />
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
            <Movies movies={movies} />
          </div>

          <Seances seances={seances} />

          <fieldset className="conf-step__buttons text-center">
            <button className="conf-step__button conf-step__button-regular">Отмена</button>
            <input type="submit" value="Сохранить" className="conf-step__button conf-step__button-accent" />
          </fieldset>
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