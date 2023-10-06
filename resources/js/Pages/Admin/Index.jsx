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
import OpenCloseSale from '@/Components/OpenCloseSale/openCloseSale';
import { useState } from 'react';


export default function Index({ auth }) {

  const [valueChairs, setValueChairs] = useState('')

  const [valuePrices, setValuePrices] = useState('')

  const [valueSale, setValueSale] = useState('')

  const handleChange = (value, name, cinemaHall) => {
    name === "chairs-hall" ? setValueChairs(value) : null;
    name === "prices-hall" ? setValuePrices(value) : null;
    name === "open-sale" ? setValueSale(value) : null;
  }

  const openSale = (event, id) => {
    console.log(event, id)
  }

  const cinemaHalls = [
    {
      number: 1,
      id: 111,
      rows: 10,
      seatsRows: 8,
      price: 100,
      priceVIP: 200,
      opened: true,
      seats: [
        {
          id: 200103,
          row: 0,
          seat: 3,
          type: "standart"
        },
        {
          id: 200104,
          row: 0,
          seat: 4,
          type: "standart"
        },
        {
          id: 200105,
          row: 0,
          seat: 5,
          type: "standart"
        },
        {
          id: 200106,
          row: 0,
          seat: 6,
          type: "standart"
        },
        {
          id: 200107,
          row: 0,
          seat: 7,
          type: "standart"
        },
        {
          id: 200110,
          row: 1,
          seat: 0,
          type: "standart"
        },
        {
          id: 200111,
          row: 1,
          seat: 1,
          type: "standart"
        },
        {
          id: 200112,
          row: 1,
          seat: 2,
          type: "standart"
        },
        {
          id: 200113,
          row: 1,
          seat: 3,
          type: "standart"
        },
        {
          id: 200114,
          row: 1,
          seat: 4,
          type: "standart"
        },
        {
          id: 200115,
          row: 1,
          seat: 5,
          type: "standart"
        },
        {
          id: 200116,
          row: 1,
          seat: 6,
          type: "standart"
        },
        {
          id: 200117,
          row: 1,
          seat: 7,
          type: "standart"
        },
        {
          id: 200120,
          row: 2,
          seat: 0,
          type: "standart"
        },
        {
          id: 200121,
          row: 2,
          seat: 1,
          type: "standart"
        },
        {
          id: 200122,
          row: 2,
          seat: 2,
          type: "standart"
        },
        {
          id: 200123,
          row: 2,
          seat: 3,
          type: "standart"
        },
        {
          id: 200124,
          row: 2,
          seat: 4,
          type: "standart"
        },
        {
          id: 200125,
          row: 2,
          seat: 5,
          type: "standart"
        },
        {
          id: 200126,
          row: 2,
          seat: 6,
          type: "standart"
        },
        {
          id: 200127,
          row: 2,
          seat: 7,
          type: "standart"
        },
        {
          id: 200130,
          row: 3,
          seat: 0,
          type: "standart"
        },
        {
          id: 200131,
          row: 3,
          seat: 1,
          type: "standart"
        },
        {
          id: 200132,
          row: 3,
          seat: 2,
          type: "standart"
        },
        {
          id: 200133,
          row: 3,
          seat: 3,
          type: "standart"
        },
        {
          id: 200134,
          row: 3,
          seat: 4,
          type: "standart"
        },
        {
          id: 200135,
          row: 3,
          seat: 5,
          type: "standart"
        },
        {
          id: 200136,
          row: 3,
          seat: 6,
          type: "standart"
        },
        {
          id: 200137,
          row: 3,
          seat: 7,
          type: "standart"
        },
        {
          id: 200140,
          row: 4,
          seat: 0,
          type: "standart"
        },
        {
          id: 200141,
          row: 4,
          seat: 1,
          type: "standart"
        },
        {
          id: 200142,
          row: 4,
          seat: 2,
          type: "standart"
        },
        {
          id: 200143,
          row: 4,
          seat: 3,
          type: "standart"
        },
        {
          id: 200144,
          row: 4,
          seat: 4,
          type: "standart"
        },
        {
          id: 200145,
          row: 4,
          seat: 5,
          type: "standart"
        },
        {
          id: 200146,
          row: 4,
          seat: 6,
          type: "standart"
        },
        {
          id: 200147,
          row: 4,
          seat: 7,
          type: "standart"
        },
        {
          id: 200150,
          row: 5,
          seat: 0,
          type: "standart"
        },
        {
          id: 200151,
          row: 5,
          seat: 1,
          type: "standart"
        },
        {
          id: 200152,
          row: 5,
          seat: 2,
          type: "standart"
        },
        {
          id: 200153,
          row: 5,
          seat: 3,
          type: "standart"
        },
        {
          id: 200154,
          row: 5,
          seat: 4,
          type: "standart"
        },
        {
          id: 200155,
          row: 5,
          seat: 5,
          type: "standart"
        },
        {
          id: 200156,
          row: 5,
          seat: 6,
          type: "standart"
        },
        {
          id: 200157,
          row: 5,
          seat: 7,
          type: "standart"
        },
        {
          id: 200160,
          row: 6,
          seat: 0,
          type: "standart"
        },
        {
          id: 200161,
          row: 6,
          seat: 1,
          type: "standart"
        },
        {
          id: 200162,
          row: 6,
          seat: 2,
          type: "standart"
        },
        {
          id: 200163,
          row: 6,
          seat: 3,
          type: "standart"
        },
        {
          id: 200164,
          row: 6,
          seat: 4,
          type: "standart"
        },
        {
          id: 200165,
          row: 6,
          seat: 5,
          type: "standart"
        },
        {
          id: 200166,
          row: 6,
          seat: 6,
          type: "standart"
        },
        {
          id: 200167,
          row: 6,
          seat: 7,
          type: "standart"
        },
        {
          id: 200170,
          row: 7,
          seat: 0,
          type: "standart"
        },
        {
          id: 200171,
          row: 7,
          seat: 1,
          type: "standart"
        },
        {
          id: 200172,
          row: 7,
          seat: 2,
          type: "standart"
        },
        {
          id: 200173,
          row: 7,
          seat: 3,
          type: "standart"
        },
        {
          id: 200174,
          row: 7,
          seat: 4,
          type: "standart"
        },
        {
          id: 200175,
          row: 7,
          seat: 5,
          type: "standart"
        },
        {
          id: 200176,
          row: 7,
          seat: 6,
          type: "standart"
        },
        {
          id: 200177,
          row: 7,
          seat: 7,
          type: "standart"
        },
        {
          id: 200180,
          row: 8,
          seat: 0,
          type: "standart"
        },
        {
          id: 200181,
          row: 8,
          seat: 1,
          type: "standart"
        },
        {
          id: 200182,
          row: 8,
          seat: 2,
          type: "standart"
        },
        {
          id: 200183,
          row: 8,
          seat: 3,
          type: "standart"
        },
        {
          id: 200184,
          row: 8,
          seat: 4,
          type: "vip"
        },
        {
          id: 200185,
          row: 8,
          seat: 5,
          type: "vip"
        },
        {
          id: 200186,
          row: 8,
          seat: 6,
          type: "standart"
        },
        {
          id: 200187,
          row: 8,
          seat: 7,
          type: "standart"
        },
        {
          id: 200190,
          row: 9,
          seat: 0,
          type: "standart"
        },
        {
          id: 200191,
          row: 9,
          seat: 1,
          type: "standart"
        },
        {
          id: 200192,
          row: 9,
          seat: 2,
          type: "standart"
        },
        {
          id: 200193,
          row: 9,
          seat: 3,
          type: "standart"
        },
        {
          id: 200194,
          row: 9,
          seat: 4,
          type: "standart"
        },
        {
          id: 200195,
          row: 9,
          seat: 5,
          type: "standart"
        },
        {
          id: 200196,
          row: 9,
          seat: 6,
          type: "standart"
        },
        {
          id: 200197,
          row: 9,
          seat: 7,
          type: "standart"
        }
      ]
    },
    {
      number: 2,
      id: 222,
      rows: 10,
      seatsRows: 10,
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
      <Head title="Cinema" />

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
              cinemaHall.id == valueChairs ? <NumberOfSeats key={cinemaHall.id} cinemaHall={cinemaHall} /> : null)}
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
              cinemaHall.id == valuePrices ? <PricesHall key={cinemaHall.id} cinemaHall={cinemaHall} /> : null)}
          </div>
        </section>

        <section className="conf-step">
          <header className="conf-step__header conf-step__header_opened">
            <h2 className="conf-step__title">Управление фильмами</h2>
          </header>
          <div className="conf-step__wrapper">
            <AddMovie />
            <p className="conf-step__paragraph">Выберите фильм для редактирования или удаления:</p>
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
            <Seances seances={seances} />
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
          {cinemaHalls.map((cinemaHall) =>
            cinemaHall.id == valueSale ? <OpenCloseSale key={cinemaHall.id} cinemaHall={cinemaHall} /> : null)}
          {/* <OpenSale cinemaHall={valueSale} /> */}
        </section>
      </main>

    </AuthenticatedLayout>
  );
}