import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';
import CinemaHallName from '@/Components/CinemaHallName/CinemaHallName';
import NumberOfSeats from '@/Components/NumberOfSeats/NumberOfSeats';
import PricesHall from '@/Components/PricesHall/PricesHall';
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

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Chirps" />

      <header class="page-header">
        <h1 class="page-header__title">Идём<span>в</span>кино</h1>
        <span class="page-header__subtitle">Администраторррская</span>
      </header>
      <main class="conf-steps">
        <section class="conf-step">
          <header class="conf-step__header conf-step__header_opened">
            <h2 class="conf-step__title">Управление залами</h2>
          </header>
          <div class="conf-step__wrapper">
            <p class="conf-step__paragraph">Доступные залы:</p>
            <ul class="conf-step__list">
              <CinemaHallName addNameHall={cinemaHalls} position={"vertical"} />
            </ul>
            <button class="conf-step__button conf-step__button-accent">Создать зал</button>
          </div>
        </section>
      </main>

      <section class="conf-step">
        <header class="conf-step__header conf-step__header_opened">
          <h2 class="conf-step__title">Конфигурация залов</h2>
        </header>
        <div class="conf-step__wrapper">
          <p class="conf-step__paragraph">Выберите зал для конфигурации:</p>
          <ul class="conf-step__selectors-box">
            <CinemaHallName addNameHall={cinemaHalls} position={"horizontal"} name={"chairs-hall"} onChange={handleChange} />
          </ul>
          {cinemaHalls.map((cinemaHall) =>
            cinemaHall.id == valueChairs ? <NumberOfSeats cinemaHall={cinemaHall} /> : null)}
        </div>
      </section>
      <section class="conf-step">
        <header class="conf-step__header conf-step__header_opened">
          <h2 class="conf-step__title">Конфигурация цен</h2>
        </header>
        <div class="conf-step__wrapper">
          <p class="conf-step__paragraph">Выберите зал для конфигурации:</p>
          <ul class="conf-step__selectors-box">
            <CinemaHallName addNameHall={cinemaHalls} position={"horizontal"} name={"prices-hall"} onChange={handleChange} />
          </ul>
          {cinemaHalls.map((cinemaHall) =>
            cinemaHall.id == valuePrices ? <PricesHall cinemaHall={cinemaHall} /> : null)}
        </div>
      </section>
    </AuthenticatedLayout>
  );
}