import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export default function Payment() {

  const { seance, chairs, orderId } = usePage().props;

  let cost = 0;
  chairs.map((chair) => {
    cost = chair.type === "standart" ? cost + seance.cinema_hall.price : cost + seance.cinema_hall.priceVIP
  })

  return (
    <>
      <header className="page-header">
        <h1 className="page-header__title">Идём<span>в</span>кино</h1>
      </header>

      <main>
        <section className="ticket">

          <header className="tichet__check">
            <h2 className="ticket__check-title">Вы выбрали билеты:</h2>
          </header>

          <div className="ticket__info-wrapper">
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{seance.movie.name}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">
              {chairs.map((chair) => " ряд " + (chair.row + 1) + " место " + (chair.seat + 1)).join()}</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{seance.cinema_hall.number}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{seance.start}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">{cost}</span> рублей</p>

            <Link className="acceptin-button" as="button"
              href={`/orders/${orderId}`}>Получить код бронирования</Link>

            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}