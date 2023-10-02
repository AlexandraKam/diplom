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
import AddSeance from '@/Components/AddSeance/AddSeance';
import OpenSale from '@/Components/OpenSale/OpenSale';
import { useState } from 'react';


export default function Index({ auth }) {

  const [valueChairs, setValueChairs] = useState('')

  const [valuePrices, setValuePrices] = useState('')

  const [valueSale, setValueSale] = useState('')

  const handleChange = (value, name, cinemaHall) => {
    name === "chairs-hall" ? setValueChairs(value) : null;
    name === "prices-hall" ? setValuePrices(value) : null;
    name === "open-sale" ? setValueSale(cinemaHall) : null;
  }

  const openSale = (event, id) => {
    console.log(event, id)
  }

  const cinemaHalls = [
    {
      number: 1,
      id: 111,
      rows: 10,
      seats: 8,
      price: 100,
      priceVIP: 200,
      opened: true
    },
    {
      number: 2,
      id: 222,
      rows: 10,
      seats: 10,
      price: 150,
      priceVIP: 250,
      opened: true
    }
  ]

  const movies = [
    {
      name: "Звёздные войны XXIII: Атака клонированных клонов",
      id: 1001,
      poster: "build/assets/i/poster.png",
      duration: 120,
      synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
      origin: "США",
      genre: "Фантастика",
      backgroundColor: "#85ffd3"
    },
    {
      name: "Альфа",
      id: 1002,
      poster: "build/assets/i/poster.png",
      duration: 96,
      synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
      origin: "Франция",
      genre: "Фантастика",
      backgroundColor: "#ff85fb"
    },
    {
      name: "Хищник",
      id: 1003,
      poster: "build/assets/i/poster.png",
      duration: 105,
      synopsis: "Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.",
      origin: "Канада, США",
      genre: "Комедия",
      backgroundColor: "#ba85ff"
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
        duration: 120,
        backgroundColor: "#85ffd3"
      },
      start: "00:00",
      id: 2001
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
        duration: 120,
        backgroundColor: "#85ffd3"
      },
      start: "12:00",
      id: 2002
    },
    {
      cinemaHall: {
        number: 1,
        id: 111
      },
      movie: {
        name: "Альфа",
        id: 1002,
        duration: 96,
        backgroundColor: "#ff85fb"
      },
      start: "14:00",
      id: 2003
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Альфа",
        id: 1002,
        duration: 96,
        backgroundColor: "#ff85fb"
      },
      start: "19:50",
      id: 2004
    },
    {
      cinemaHall: {
        number: 2,
        id: 222
      },
      movie: {
        name: "Хищник",
        id: 1003,
        duration: 105,
        backgroundColor: "#ba85ff"
      },
      start: "22:00",
      id: 2005
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
            <h2 className="conf-step__title">Управление фильмами</h2>
          </header>
          <div className="conf-step__wrapper">
            <AddMovie />
            <div className="conf-step__movies">
              <Movies movies={movies} />
            </div>
          </div>
        </section>

        <section className="conf-step">
          <header className="conf-step__header conf-step__header_opened">
            <h2 className="conf-step__title">Сетка сеансов</h2>
          </header>
          <div className="conf-step__wrapper">
            <AddSeance cinemaHalls={cinemaHalls} movies={movies} />
            <Seances seances={seances} cinemaHalls={cinemaHalls} movies={movies} />
          </div>
        </section>

        <section className="conf-step">
          <header className="conf-step__header conf-step__header_opened">
            <h2 className="conf-step__title">Открыть продажи</h2>
          </header>
          <div className="conf-step__wrapper">
            <p className="conf-step__paragraph">Выберите зал для открытия продажи билетов:</p>
            <ul className="conf-step__selectors-box">
              <CinemaHallName cinemaHalls={cinemaHalls} position={"horizontal"} name={"open-sale"} onChange={handleChange} />
            </ul>
          </div>
          {/* <OpenSale cinemaHall={valueSale}/> */}
          <div className="conf-step__wrapper text-center">
            <button className="conf-step__button conf-step__button-accent">Открыть продажу</button>
          </div>
        </section>
      </main>

    </AuthenticatedLayout>
  );
}