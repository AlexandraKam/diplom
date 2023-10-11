import { usePage } from '@inertiajs/react';
import React from 'react';

export default function Ticket() {
  const { order } = usePage().props;

  console.log(order, order.chairs)

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>

      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Электронный билет</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{order.seance.movie.name}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">{order.chairs.map(x => `Ряд: ${x.row + 1} Место: ${x.seat + 1};`).join(' ')}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{order.seance.cinema_hall.number}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{order.seance.start}</span></p>

            <img className="ticket__info-qr" src="i/qr-code.png" />

            <p className="ticket__hint">Покажите QR-код нашему контроллеру для подтверждения бронирования.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}