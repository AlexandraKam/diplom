import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export default function Payment() {
  const { payment } = usePage().props;

  console.log(payment)

  const seances = [
    {
      cinemaHall: {
        number: 1,
        rows: 10,
        seats: 8,
        price: 100,
        priceVIP: 200,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
        poster: "build/assets/i/poster.png",
        duration: 120,
        synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
        origin: "США",
        genre: "Фантастика"
      },
      start: "00:00",
      id: 2001,
      seats: [
        {
          id: 200100,
          row: 0,
          seat: 0,
          type: "standart"
        },
        {
          id: 200101,
          row: 0,
          seat: 1,
          type: "standart"
        },
        {
          id: 200102,
          row: 0,
          seat: 2,
          type: "standart"
        },
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
          type: "standart"
        },
        {
          id: 200185,
          row: 8,
          seat: 5,
          type: "standart"
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
      cinemaHall: {
        number: 1,
        rows: 10,
        seats: 8,
        price: 100,
        priceVIP: 200,
        id: 111
      },
      movie: {
        name: "Звёздные войны XXIII: Атака клонированных клонов",
        id: 1001,
        poster: "build/assets/i/poster.png",
        duration: 120,
        synopsis: "Две сотни лет назад малороссийские хутора разоряла шайка нехристей-ляхов во главе с могущественным колдуном.",
        origin: "США",
        genre: "Фантастика"
      },
      start: "12:00",
      id: 2002,
      seats: [
        {
          id: 200200,
          row: 0,
          seat: 0,
          type: "standart"
        },
        {
          id: 200201,
          row: 0,
          seat: 1,
          type: "standart"
        },
        {
          id: 200202,
          row: 0,
          seat: 2,
          type: "standart"
        },
        {
          id: 200203,
          row: 0,
          seat: 3,
          type: "standart"
        },
        {
          id: 200204,
          row: 0,
          seat: 4,
          type: "standart"
        },
        {
          id: 200205,
          row: 0,
          seat: 5,
          type: "standart"
        },
        {
          id: 200206,
          row: 0,
          seat: 6,
          type: "standart"
        },
        {
          id: 200207,
          row: 0,
          seat: 7,
          type: "standart"
        },
        {
          id: 200210,
          row: 1,
          seat: 0,
          type: "standart"
        },
        {
          id: 200211,
          row: 1,
          seat: 1,
          type: "standart"
        },
        {
          id: 200212,
          row: 1,
          seat: 2,
          type: "standart"
        },
        {
          id: 200213,
          row: 1,
          seat: 3,
          type: "standart"
        },
        {
          id: 200214,
          row: 1,
          seat: 4,
          type: "standart"
        },
        {
          id: 200215,
          row: 1,
          seat: 5,
          type: "standart"
        },
        {
          id: 200216,
          row: 1,
          seat: 6,
          type: "standart"
        },
        {
          id: 200217,
          row: 1,
          seat: 7,
          type: "standart"
        },
        {
          id: 200220,
          row: 2,
          seat: 0,
          type: "standart"
        },
        {
          id: 200221,
          row: 2,
          seat: 1,
          type: "standart"
        },
        {
          id: 200222,
          row: 2,
          seat: 2,
          type: "standart"
        },
        {
          id: 200223,
          row: 2,
          seat: 3,
          type: "standart"
        },
        {
          id: 200224,
          row: 2,
          seat: 4,
          type: "standart"
        },
        {
          id: 200225,
          row: 2,
          seat: 5,
          type: "standart"
        },
        {
          id: 200226,
          row: 2,
          seat: 6,
          type: "standart"
        },
        {
          id: 200227,
          row: 2,
          seat: 7,
          type: "standart"
        },
        {
          id: 200230,
          row: 3,
          seat: 0,
          type: "standart"
        },
        {
          id: 200231,
          row: 3,
          seat: 1,
          type: "standart"
        },
        {
          id: 200232,
          row: 3,
          seat: 2,
          type: "standart"
        },
        {
          id: 200233,
          row: 3,
          seat: 3,
          type: "standart"
        },
        {
          id: 200234,
          row: 3,
          seat: 4,
          type: "standart"
        },
        {
          id: 200235,
          row: 3,
          seat: 5,
          type: "standart"
        },
        {
          id: 200236,
          row: 3,
          seat: 6,
          type: "standart"
        },
        {
          id: 200237,
          row: 3,
          seat: 7,
          type: "standart"
        },
        {
          id: 200240,
          row: 4,
          seat: 0,
          type: "standart"
        },
        {
          id: 200241,
          row: 4,
          seat: 1,
          type: "standart"
        },
        {
          id: 200242,
          row: 4,
          seat: 2,
          type: "standart"
        },
        {
          id: 200243,
          row: 4,
          seat: 3,
          type: "standart"
        },
        {
          id: 200244,
          row: 4,
          seat: 4,
          type: "standart"
        },
        {
          id: 200245,
          row: 4,
          seat: 5,
          type: "standart"
        },
        {
          id: 200246,
          row: 4,
          seat: 6,
          type: "standart"
        },
        {
          id: 200247,
          row: 4,
          seat: 7,
          type: "standart"
        },
        {
          id: 200250,
          row: 5,
          seat: 0,
          type: "standart"
        },
        {
          id: 200251,
          row: 5,
          seat: 1,
          type: "standart"
        },
        {
          id: 200252,
          row: 5,
          seat: 2,
          type: "standart"
        },
        {
          id: 200253,
          row: 5,
          seat: 3,
          type: "standart"
        },
        {
          id: 200254,
          row: 5,
          seat: 4,
          type: "standart"
        },
        {
          id: 200255,
          row: 5,
          seat: 5,
          type: "standart"
        },
        {
          id: 200256,
          row: 5,
          seat: 6,
          type: "standart"
        },
        {
          id: 200257,
          row: 5,
          seat: 7,
          type: "standart"
        },
        {
          id: 200260,
          row: 6,
          seat: 0,
          type: "standart"
        },
        {
          id: 200261,
          row: 6,
          seat: 1,
          type: "standart"
        },
        {
          id: 200262,
          row: 6,
          seat: 2,
          type: "standart"
        },
        {
          id: 200263,
          row: 6,
          seat: 3,
          type: "standart"
        },
        {
          id: 200264,
          row: 6,
          seat: 4,
          type: "standart"
        },
        {
          id: 200265,
          row: 6,
          seat: 5,
          type: "standart"
        },
        {
          id: 200266,
          row: 6,
          seat: 6,
          type: "standart"
        },
        {
          id: 200267,
          row: 6,
          seat: 7,
          type: "standart"
        },
        {
          id: 200270,
          row: 7,
          seat: 0,
          type: "standart"
        },
        {
          id: 200271,
          row: 7,
          seat: 1,
          type: "standart"
        },
        {
          id: 200272,
          row: 7,
          seat: 2,
          type: "standart"
        },
        {
          id: 200273,
          row: 7,
          seat: 3,
          type: "standart"
        },
        {
          id: 200274,
          row: 7,
          seat: 4,
          type: "standart"
        },
        {
          id: 200275,
          row: 7,
          seat: 5,
          type: "standart"
        },
        {
          id: 200276,
          row: 7,
          seat: 6,
          type: "standart"
        },
        {
          id: 200277,
          row: 7,
          seat: 7,
          type: "standart"
        },
        {
          id: 200280,
          row: 8,
          seat: 0,
          type: "standart"
        },
        {
          id: 200281,
          row: 8,
          seat: 1,
          type: "standart"
        },
        {
          id: 200282,
          row: 8,
          seat: 2,
          type: "standart"
        },
        {
          id: 200283,
          row: 8,
          seat: 3,
          type: "standart"
        },
        {
          id: 200284,
          row: 8,
          seat: 4,
          type: "standart"
        },
        {
          id: 200285,
          row: 8,
          seat: 5,
          type: "standart"
        },
        {
          id: 200286,
          row: 8,
          seat: 6,
          type: "standart"
        },
        {
          id: 200287,
          row: 8,
          seat: 7,
          type: "standart"
        },
        {
          id: 200290,
          row: 9,
          seat: 0,
          type: "standart"
        },
        {
          id: 200291,
          row: 9,
          seat: 1,
          type: "standart"
        },
        {
          id: 200292,
          row: 9,
          seat: 2,
          type: "standart"
        },
        {
          id: 200293,
          row: 9,
          seat: 3,
          type: "standart"
        },
        {
          id: 200294,
          row: 9,
          seat: 4,
          type: "standart"
        },
        {
          id: 200295,
          row: 9,
          seat: 5,
          type: "standart"
        },
        {
          id: 200296,
          row: 9,
          seat: 6,
          type: "standart"
        },
        {
          id: 200297,
          row: 9,
          seat: 7,
          type: "standart"
        }
      ]
    },
    {
      cinemaHall: {
        number: 1,
        rows: 10,
        seats: 8,
        price: 100,
        priceVIP: 200,
        id: 111
      },
      movie: {
        name: "Альфа",
        id: 1002,
        poster: "build/assets/i/poster.png",
        duration: 96,
        synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
        origin: "Франция",
        genre: "Фантастика"
      },
      start: "14:00",
      id: 2003,
      seats: [
        {
          id: 200300,
          row: 0,
          seat: 0,
          type: "standart"
        },
        {
          id: 200301,
          row: 0,
          seat: 1,
          type: "standart"
        },
        {
          id: 200302,
          row: 0,
          seat: 2,
          type: "standart"
        },
        {
          id: 200303,
          row: 0,
          seat: 3,
          type: "standart"
        },
        {
          id: 200304,
          row: 0,
          seat: 4,
          type: "standart"
        },
        {
          id: 200305,
          row: 0,
          seat: 5,
          type: "standart"
        },
        {
          id: 200306,
          row: 0,
          seat: 6,
          type: "standart"
        },
        {
          id: 200307,
          row: 0,
          seat: 7,
          type: "standart"
        },
        {
          id: 200310,
          row: 1,
          seat: 0,
          type: "standart"
        },
        {
          id: 200311,
          row: 1,
          seat: 1,
          type: "standart"
        },
        {
          id: 200312,
          row: 1,
          seat: 2,
          type: "standart"
        },
        {
          id: 200313,
          row: 1,
          seat: 3,
          type: "standart"
        },
        {
          id: 200314,
          row: 1,
          seat: 4,
          type: "standart"
        },
        {
          id: 200315,
          row: 1,
          seat: 5,
          type: "standart"
        },
        {
          id: 200316,
          row: 1,
          seat: 6,
          type: "standart"
        },
        {
          id: 200317,
          row: 1,
          seat: 7,
          type: "standart"
        },
        {
          id: 200320,
          row: 2,
          seat: 0,
          type: "standart"
        },
        {
          id: 200321,
          row: 2,
          seat: 1,
          type: "standart"
        },
        {
          id: 200322,
          row: 2,
          seat: 2,
          type: "standart"
        },
        {
          id: 200323,
          row: 2,
          seat: 3,
          type: "standart"
        },
        {
          id: 200324,
          row: 2,
          seat: 4,
          type: "standart"
        },
        {
          id: 200325,
          row: 2,
          seat: 5,
          type: "standart"
        },
        {
          id: 200326,
          row: 2,
          seat: 6,
          type: "standart"
        },
        {
          id: 200327,
          row: 2,
          seat: 7,
          type: "standart"
        },
        {
          id: 200330,
          row: 3,
          seat: 0,
          type: "standart"
        },
        {
          id: 200331,
          row: 3,
          seat: 1,
          type: "standart"
        },
        {
          id: 200332,
          row: 3,
          seat: 2,
          type: "standart"
        },
        {
          id: 200333,
          row: 3,
          seat: 3,
          type: "standart"
        },
        {
          id: 200334,
          row: 3,
          seat: 4,
          type: "standart"
        },
        {
          id: 200335,
          row: 3,
          seat: 5,
          type: "standart"
        },
        {
          id: 200336,
          row: 3,
          seat: 6,
          type: "standart"
        },
        {
          id: 200337,
          row: 3,
          seat: 7,
          type: "standart"
        },
        {
          id: 200340,
          row: 4,
          seat: 0,
          type: "standart"
        },
        {
          id: 200341,
          row: 4,
          seat: 1,
          type: "standart"
        },
        {
          id: 200342,
          row: 4,
          seat: 2,
          type: "standart"
        },
        {
          id: 200343,
          row: 4,
          seat: 3,
          type: "standart"
        },
        {
          id: 200344,
          row: 4,
          seat: 4,
          type: "standart"
        },
        {
          id: 200345,
          row: 4,
          seat: 5,
          type: "standart"
        },
        {
          id: 200346,
          row: 4,
          seat: 6,
          type: "standart"
        },
        {
          id: 200347,
          row: 4,
          seat: 7,
          type: "standart"
        },
        {
          id: 200350,
          row: 5,
          seat: 0,
          type: "standart"
        },
        {
          id: 200351,
          row: 5,
          seat: 1,
          type: "standart"
        },
        {
          id: 200352,
          row: 5,
          seat: 2,
          type: "standart"
        },
        {
          id: 200353,
          row: 5,
          seat: 3,
          type: "standart"
        },
        {
          id: 200354,
          row: 5,
          seat: 4,
          type: "standart"
        },
        {
          id: 200355,
          row: 5,
          seat: 5,
          type: "standart"
        },
        {
          id: 200356,
          row: 5,
          seat: 6,
          type: "standart"
        },
        {
          id: 200357,
          row: 5,
          seat: 7,
          type: "standart"
        },
        {
          id: 200360,
          row: 6,
          seat: 0,
          type: "standart"
        },
        {
          id: 200361,
          row: 6,
          seat: 1,
          type: "standart"
        },
        {
          id: 200362,
          row: 6,
          seat: 2,
          type: "standart"
        },
        {
          id: 200363,
          row: 6,
          seat: 3,
          type: "standart"
        },
        {
          id: 200364,
          row: 6,
          seat: 4,
          type: "standart"
        },
        {
          id: 200365,
          row: 6,
          seat: 5,
          type: "standart"
        },
        {
          id: 200366,
          row: 6,
          seat: 6,
          type: "standart"
        },
        {
          id: 200367,
          row: 6,
          seat: 7,
          type: "standart"
        },
        {
          id: 200370,
          row: 7,
          seat: 0,
          type: "standart"
        },
        {
          id: 200371,
          row: 7,
          seat: 1,
          type: "standart"
        },
        {
          id: 200372,
          row: 7,
          seat: 2,
          type: "standart"
        },
        {
          id: 200373,
          row: 7,
          seat: 3,
          type: "standart"
        },
        {
          id: 200374,
          row: 7,
          seat: 4,
          type: "standart"
        },
        {
          id: 200375,
          row: 7,
          seat: 5,
          type: "standart"
        },
        {
          id: 200376,
          row: 7,
          seat: 6,
          type: "standart"
        },
        {
          id: 200377,
          row: 7,
          seat: 7,
          type: "standart"
        },
        {
          id: 200380,
          row: 8,
          seat: 0,
          type: "standart"
        },
        {
          id: 200381,
          row: 8,
          seat: 1,
          type: "standart"
        },
        {
          id: 200382,
          row: 8,
          seat: 2,
          type: "standart"
        },
        {
          id: 200383,
          row: 8,
          seat: 3,
          type: "standart"
        },
        {
          id: 200384,
          row: 8,
          seat: 4,
          type: "standart"
        },
        {
          id: 200385,
          row: 8,
          seat: 5,
          type: "standart"
        },
        {
          id: 200386,
          row: 8,
          seat: 6,
          type: "standart"
        },
        {
          id: 200387,
          row: 8,
          seat: 7,
          type: "standart"
        },
        {
          id: 200390,
          row: 9,
          seat: 0,
          type: "standart"
        },
        {
          id: 200391,
          row: 9,
          seat: 1,
          type: "standart"
        },
        {
          id: 200392,
          row: 9,
          seat: 2,
          type: "standart"
        },
        {
          id: 200393,
          row: 9,
          seat: 3,
          type: "standart"
        },
        {
          id: 200394,
          row: 9,
          seat: 4,
          type: "standart"
        },
        {
          id: 200395,
          row: 9,
          seat: 5,
          type: "standart"
        },
        {
          id: 200396,
          row: 9,
          seat: 6,
          type: "standart"
        },
        {
          id: 200397,
          row: 9,
          seat: 7,
          type: "standart"
        }
      ]
    },
    {
      cinemaHall: {
        number: 2,
        rows: 10,
        seats: 10,
        price: 150,
        priceVIP: 250,
        id: 222
      },
      movie: {
        name: "Альфа",
        id: 1002,
        poster: "build/assets/i/poster.png",
        duration: 96,
        synopsis: "20 тысяч лет назад Земля была холодным и неуютным местом, в котором смерть подстерегала человека на каждом шагу.",
        origin: "Франция",
        genre: "Фантастика"
      },
      start: "19:50",
      id: 2004,
      seats: [
        {
          id: 200400,
          row: 0,
          seat: 0,
          type: "disabled"
        },
        {
          id: 200401,
          row: 0,
          seat: 1,
          type: "disabled"
        },
        {
          id: 200402,
          row: 0,
          seat: 2,
          type: "standart"
        },
        {
          id: 200403,
          row: 0,
          seat: 3,
          type: "standart"
        },
        {
          id: 200404,
          row: 0,
          seat: 4,
          type: "standart"
        },
        {
          id: 200405,
          row: 0,
          seat: 5,
          type: "standart"
        },
        {
          id: 200406,
          row: 0,
          seat: 6,
          type: "standart"
        },
        {
          id: 200407,
          row: 0,
          seat: 7,
          type: "standart"
        },
        {
          id: 200408,
          row: 0,
          seat: 8,
          type: "disabled"
        },
        {
          id: 200409,
          row: 0,
          seat: 9,
          type: "disabled"
        },
        {
          id: 200410,
          row: 1,
          seat: 0,
          type: "disabled"
        },
        {
          id: 200411,
          row: 1,
          seat: 1,
          type: "standart"
        },
        {
          id: 200412,
          row: 1,
          seat: 2,
          type: "standart"
        },
        {
          id: 200413,
          row: 1,
          seat: 3,
          type: "standart"
        },
        {
          id: 200414,
          row: 1,
          seat: 4,
          type: "standart"
        },
        {
          id: 200415,
          row: 1,
          seat: 5,
          type: "standart"
        },
        {
          id: 200416,
          row: 1,
          seat: 6,
          type: "standart"
        },
        {
          id: 200417,
          row: 1,
          seat: 7,
          type: "standart"
        },
        {
          id: 200418,
          row: 1,
          seat: 8,
          type: "standart"
        },
        {
          id: 200419,
          row: 1,
          seat: 9,
          type: "disabled"
        },
        {
          id: 200420,
          row: 2,
          seat: 0,
          type: "standart"
        },
        {
          id: 200421,
          row: 2,
          seat: 1,
          type: "standart"
        },
        {
          id: 200422,
          row: 2,
          seat: 2,
          type: "standart"
        },
        {
          id: 200423,
          row: 2,
          seat: 3,
          type: "standart"
        },
        {
          id: 200424,
          row: 2,
          seat: 4,
          type: "standart"
        },
        {
          id: 200425,
          row: 2,
          seat: 5,
          type: "standart"
        },
        {
          id: 200426,
          row: 2,
          seat: 6,
          type: "standart"
        },
        {
          id: 200427,
          row: 2,
          seat: 7,
          type: "standart"
        },
        {
          id: 200428,
          row: 2,
          seat: 8,
          type: "standart"
        },
        {
          id: 200429,
          row: 2,
          seat: 9,
          type: "standart"
        },
        {
          id: 200430,
          row: 3,
          seat: 0,
          type: "standart"
        },
        {
          id: 200431,
          row: 3,
          seat: 1,
          type: "standart"
        },
        {
          id: 200432,
          row: 3,
          seat: 2,
          type: "standart"
        },
        {
          id: 200433,
          row: 3,
          seat: 3,
          type: "standart"
        },
        {
          id: 200434,
          row: 3,
          seat: 4,
          type: "standart"
        },
        {
          id: 200435,
          row: 3,
          seat: 5,
          type: "standart"
        },
        {
          id: 200436,
          row: 3,
          seat: 6,
          type: "standart"
        },
        {
          id: 200437,
          row: 3,
          seat: 7,
          type: "standart"
        },
        {
          id: 200438,
          row: 3,
          seat: 8,
          type: "standart"
        },
        {
          id: 200439,
          row: 3,
          seat: 9,
          type: "standart"
        },
        {
          id: 200440,
          row: 4,
          seat: 0,
          type: "standart"
        },
        {
          id: 200441,
          row: 4,
          seat: 1,
          type: "standart"
        },
        {
          id: 200442,
          row: 4,
          seat: 2,
          type: "standart"
        },
        {
          id: 200443,
          row: 4,
          seat: 3,
          type: "vip"
        },
        {
          id: 200444,
          row: 4,
          seat: 4,
          type: "vip"
        },
        {
          id: 200445,
          row: 4,
          seat: 5,
          type: "vip"
        },
        {
          id: 200446,
          row: 4,
          seat: 6,
          type: "vip"
        },
        {
          id: 200447,
          row: 4,
          seat: 7,
          type: "standart"
        },
        {
          id: 200448,
          row: 4,
          seat: 8,
          type: "standart"
        },
        {
          id: 200449,
          row: 4,
          seat: 9,
          type: "standart"
        },
        {
          id: 200450,
          row: 5,
          seat: 0,
          type: "standart"
        },
        {
          id: 200451,
          row: 5,
          seat: 1,
          type: "standart"
        },
        {
          id: 200452,
          row: 5,
          seat: 2,
          type: "standart"
        },
        {
          id: 200453,
          row: 5,
          seat: 3,
          type: "vip"
        },
        {
          id: 200454,
          row: 5,
          seat: 4,
          type: "vip"
        },
        {
          id: 200455,
          row: 5,
          seat: 5,
          type: "vip"
        },
        {
          id: 200456,
          row: 5,
          seat: 6,
          type: "vip"
        },
        {
          id: 200457,
          row: 5,
          seat: 7,
          type: "standart"
        },
        {
          id: 200458,
          row: 5,
          seat: 8,
          type: "standart"
        },
        {
          id: 200459,
          row: 5,
          seat: 9,
          type: "standart"
        },
        {
          id: 200460,
          row: 6,
          seat: 0,
          type: "standart"
        },
        {
          id: 200461,
          row: 6,
          seat: 1,
          type: "standart"
        },
        {
          id: 200462,
          row: 6,
          seat: 2,
          type: "standart"
        },
        {
          id: 200463,
          row: 6,
          seat: 3,
          type: "vip"
        },
        {
          id: 200464,
          row: 6,
          seat: 4,
          type: "vip"
        },
        {
          id: 200465,
          row: 6,
          seat: 5,
          type: "vip"
        },
        {
          id: 200466,
          row: 6,
          seat: 6,
          type: "vip"
        },
        {
          id: 200467,
          row: 6,
          seat: 7,
          type: "taken"
        },
        {
          id: 200468,
          row: 6,
          seat: 8,
          type: "taken"
        },
        {
          id: 200469,
          row: 6,
          seat: 9,
          type: "standart"
        },
        {
          id: 200470,
          row: 7,
          seat: 0,
          type: "standart"
        },
        {
          id: 200471,
          row: 7,
          seat: 1,
          type: "standart"
        },
        {
          id: 200472,
          row: 7,
          seat: 2,
          type: "standart"
        },
        {
          id: 200473,
          row: 7,
          seat: 3,
          type: "standart"
        },
        {
          id: 200474,
          row: 7,
          seat: 4,
          type: "standart"
        },
        {
          id: 200475,
          row: 7,
          seat: 5,
          type: "standart"
        },
        {
          id: 200476,
          row: 7,
          seat: 6,
          type: "standart"
        },
        {
          id: 200477,
          row: 7,
          seat: 7,
          type: "standart"
        },
        {
          id: 200478,
          row: 7,
          seat: 8,
          type: "standart"
        },
        {
          id: 200479,
          row: 7,
          seat: 9,
          type: "standart"
        },
        {
          id: 200480,
          row: 8,
          seat: 0,
          type: "standart"
        },
        {
          id: 200481,
          row: 8,
          seat: 1,
          type: "standart"
        },
        {
          id: 200482,
          row: 8,
          seat: 2,
          type: "standart"
        },
        {
          id: 200483,
          row: 8,
          seat: 3,
          type: "standart"
        },
        {
          id: 200484,
          row: 8,
          seat: 4,
          type: "standart"
        },
        {
          id: 200485,
          row: 8,
          seat: 5,
          type: "standart"
        },
        {
          id: 200486,
          row: 8,
          seat: 6,
          type: "standart"
        },
        {
          id: 200487,
          row: 8,
          seat: 7,
          type: "standart"
        },
        {
          id: 200488,
          row: 8,
          seat: 8,
          type: "standart"
        },
        {
          id: 200489,
          row: 8,
          seat: 9,
          type: "standart"
        },
        {
          id: 200490,
          row: 9,
          seat: 0,
          type: "standart"
        },
        {
          id: 200491,
          row: 9,
          seat: 1,
          type: "standart"
        },
        {
          id: 200492,
          row: 9,
          seat: 2,
          type: "standart"
        },
        {
          id: 200493,
          row: 9,
          seat: 3,
          type: "standart"
        },
        {
          id: 200494,
          row: 9,
          seat: 4,
          type: "taken"
        },
        {
          id: 200495,
          row: 9,
          seat: 5,
          type: "taken"
        },
        {
          id: 200496,
          row: 9,
          seat: 6,
          type: "standart"
        },
        {
          id: 200497,
          row: 9,
          seat: 7,
          type: "standart"
        },
        {
          id: 200498,
          row: 9,
          seat: 8,
          type: "standart"
        },
        {
          id: 200499,
          row: 9,
          seat: 9,
          type: "standart"
        }
      ]
    },
    {
      cinemaHall: {
        number: 2,
        rows: 10,
        seats: 10,
        price: 150,
        priceVIP: 250,
        id: 222
      },
      movie: {
        name: "Хищник",
        id: 1003,
        poster: "build/assets/i/poster.png",
        duration: 105,
        synopsis: "Самые опасные хищники Вселенной, прибыв из глубин космоса, высаживаются на улицах маленького городка, чтобы начать свою кровавую охоту. Генетически модернизировав себя с помощью ДНК других видов, охотники стали ещё сильнее, умнее и беспощаднее.",
        origin: "Канада, США",
        genre: "Комедия"
      },
      start: "22:00",
      id: 2005,
      seats: [
        {
          id: 200500,
          row: 0,
          seat: 0,
          type: "standart"
        },
        {
          id: 200501,
          row: 0,
          seat: 1,
          type: "standart"
        },
        {
          id: 200502,
          row: 0,
          seat: 2,
          type: "standart"
        },
        {
          id: 200503,
          row: 0,
          seat: 3,
          type: "standart"
        },
        {
          id: 200504,
          row: 0,
          seat: 4,
          type: "standart"
        },
        {
          id: 200505,
          row: 0,
          seat: 5,
          type: "standart"
        },
        {
          id: 200506,
          row: 0,
          seat: 6,
          type: "standart"
        },
        {
          id: 200507,
          row: 0,
          seat: 7,
          type: "standart"
        },
        {
          id: 200508,
          row: 0,
          seat: 8,
          type: "standart"
        },
        {
          id: 200509,
          row: 0,
          seat: 9,
          type: "standart"
        },
        {
          id: 200510,
          row: 1,
          seat: 0,
          type: "standart"
        },
        {
          id: 200511,
          row: 1,
          seat: 1,
          type: "standart"
        },
        {
          id: 200512,
          row: 1,
          seat: 2,
          type: "standart"
        },
        {
          id: 200513,
          row: 1,
          seat: 3,
          type: "standart"
        },
        {
          id: 200514,
          row: 1,
          seat: 4,
          type: "standart"
        },
        {
          id: 200515,
          row: 1,
          seat: 5,
          type: "standart"
        },
        {
          id: 200516,
          row: 1,
          seat: 6,
          type: "standart"
        },
        {
          id: 200517,
          row: 1,
          seat: 7,
          type: "standart"
        },
        {
          id: 200518,
          row: 1,
          seat: 8,
          type: "standart"
        },
        {
          id: 200519,
          row: 1,
          seat: 9,
          type: "standart"
        },
        {
          id: 200520,
          row: 2,
          seat: 0,
          type: "standart"
        },
        {
          id: 200521,
          row: 2,
          seat: 1,
          type: "standart"
        },
        {
          id: 200522,
          row: 2,
          seat: 2,
          type: "standart"
        },
        {
          id: 200523,
          row: 2,
          seat: 3,
          type: "standart"
        },
        {
          id: 200524,
          row: 2,
          seat: 4,
          type: "standart"
        },
        {
          id: 200525,
          row: 2,
          seat: 5,
          type: "standart"
        },
        {
          id: 200526,
          row: 2,
          seat: 6,
          type: "standart"
        },
        {
          id: 200527,
          row: 2,
          seat: 7,
          type: "standart"
        },
        {
          id: 200528,
          row: 2,
          seat: 8,
          type: "standart"
        },
        {
          id: 200529,
          row: 2,
          seat: 9,
          type: "standart"
        },
        {
          id: 200530,
          row: 3,
          seat: 0,
          type: "standart"
        },
        {
          id: 200531,
          row: 3,
          seat: 1,
          type: "standart"
        },
        {
          id: 200532,
          row: 3,
          seat: 2,
          type: "standart"
        },
        {
          id: 200533,
          row: 3,
          seat: 3,
          type: "standart"
        },
        {
          id: 200534,
          row: 3,
          seat: 4,
          type: "standart"
        },
        {
          id: 200535,
          row: 3,
          seat: 5,
          type: "standart"
        },
        {
          id: 200536,
          row: 3,
          seat: 6,
          type: "standart"
        },
        {
          id: 200537,
          row: 3,
          seat: 7,
          type: "standart"
        },
        {
          id: 200538,
          row: 3,
          seat: 8,
          type: "standart"
        },
        {
          id: 200539,
          row: 3,
          seat: 9,
          type: "standart"
        },
        {
          id: 200540,
          row: 4,
          seat: 0,
          type: "standart"
        },
        {
          id: 200541,
          row: 4,
          seat: 1,
          type: "standart"
        },
        {
          id: 200542,
          row: 4,
          seat: 2,
          type: "standart"
        },
        {
          id: 200543,
          row: 4,
          seat: 3,
          type: "standart"
        },
        {
          id: 200544,
          row: 4,
          seat: 4,
          type: "standart"
        },
        {
          id: 200545,
          row: 4,
          seat: 5,
          type: "standart"
        },
        {
          id: 200546,
          row: 4,
          seat: 6,
          type: "standart"
        },
        {
          id: 200547,
          row: 4,
          seat: 7,
          type: "standart"
        },
        {
          id: 200548,
          row: 4,
          seat: 8,
          type: "standart"
        },
        {
          id: 200549,
          row: 4,
          seat: 9,
          type: "standart"
        },
        {
          id: 200550,
          row: 5,
          seat: 0,
          type: "standart"
        },
        {
          id: 200551,
          row: 5,
          seat: 1,
          type: "standart"
        },
        {
          id: 200552,
          row: 5,
          seat: 2,
          type: "standart"
        },
        {
          id: 200553,
          row: 5,
          seat: 3,
          type: "standart"
        },
        {
          id: 200554,
          row: 5,
          seat: 4,
          type: "standart"
        },
        {
          id: 200555,
          row: 5,
          seat: 5,
          type: "standart"
        },
        {
          id: 200556,
          row: 5,
          seat: 6,
          type: "standart"
        },
        {
          id: 200557,
          row: 5,
          seat: 7,
          type: "standart"
        },
        {
          id: 200558,
          row: 5,
          seat: 8,
          type: "standart"
        },
        {
          id: 200559,
          row: 5,
          seat: 9,
          type: "standart"
        },
        {
          id: 200560,
          row: 6,
          seat: 0,
          type: "standart"
        },
        {
          id: 200561,
          row: 6,
          seat: 1,
          type: "standart"
        },
        {
          id: 200562,
          row: 6,
          seat: 2,
          type: "standart"
        },
        {
          id: 200563,
          row: 6,
          seat: 3,
          type: "standart"
        },
        {
          id: 200564,
          row: 6,
          seat: 4,
          type: "standart"
        },
        {
          id: 200565,
          row: 6,
          seat: 5,
          type: "standart"
        },
        {
          id: 200566,
          row: 6,
          seat: 6,
          type: "standart"
        },
        {
          id: 200567,
          row: 6,
          seat: 7,
          type: "standart"
        },
        {
          id: 200568,
          row: 6,
          seat: 8,
          type: "standart"
        },
        {
          id: 200569,
          row: 6,
          seat: 9,
          type: "standart"
        },
        {
          id: 200570,
          row: 7,
          seat: 0,
          type: "standart"
        },
        {
          id: 200571,
          row: 7,
          seat: 1,
          type: "standart"
        },
        {
          id: 200572,
          row: 7,
          seat: 2,
          type: "standart"
        },
        {
          id: 200573,
          row: 7,
          seat: 3,
          type: "standart"
        },
        {
          id: 200574,
          row: 7,
          seat: 4,
          type: "standart"
        },
        {
          id: 200575,
          row: 7,
          seat: 5,
          type: "standart"
        },
        {
          id: 200576,
          row: 7,
          seat: 6,
          type: "standart"
        },
        {
          id: 200577,
          row: 7,
          seat: 7,
          type: "standart"
        },
        {
          id: 200578,
          row: 7,
          seat: 8,
          type: "standart"
        },
        {
          id: 200579,
          row: 7,
          seat: 9,
          type: "standart"
        },
        {
          id: 200580,
          row: 8,
          seat: 0,
          type: "standart"
        },
        {
          id: 200581,
          row: 8,
          seat: 1,
          type: "standart"
        },
        {
          id: 200582,
          row: 8,
          seat: 2,
          type: "standart"
        },
        {
          id: 200583,
          row: 8,
          seat: 3,
          type: "standart"
        },
        {
          id: 200584,
          row: 8,
          seat: 4,
          type: "standart"
        },
        {
          id: 200585,
          row: 8,
          seat: 5,
          type: "standart"
        },
        {
          id: 200586,
          row: 8,
          seat: 6,
          type: "standart"
        },
        {
          id: 200587,
          row: 8,
          seat: 7,
          type: "standart"
        },
        {
          id: 200588,
          row: 8,
          seat: 8,
          type: "standart"
        },
        {
          id: 200589,
          row: 8,
          seat: 9,
          type: "standart"
        },
        {
          id: 200590,
          row: 9,
          seat: 0,
          type: "standart"
        },
        {
          id: 200591,
          row: 9,
          seat: 1,
          type: "standart"
        },
        {
          id: 200592,
          row: 9,
          seat: 2,
          type: "standart"
        },
        {
          id: 200593,
          row: 9,
          seat: 3,
          type: "standart"
        },
        {
          id: 200594,
          row: 9,
          seat: 4,
          type: "standart"
        },
        {
          id: 200595,
          row: 9,
          seat: 5,
          type: "standart"
        },
        {
          id: 200596,
          row: 9,
          seat: 6,
          type: "standart"
        },
        {
          id: 200597,
          row: 9,
          seat: 7,
          type: "standart"
        },
        {
          id: 200598,
          row: 9,
          seat: 8,
          type: "standart"
        },
        {
          id: 200599,
          row: 9,
          seat: 9,
          type: "standart"
        }
      ]
    }
  ]

  let seanceHall = [];
  seances.forEach((seance) => {
    seance.id === Number(payment) ?
      seanceHall = seance : null;
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
            <p className="ticket__info">На фильм: <span className="ticket__details ticket__title">{seanceHall.movie.name}</span></p>
            <p className="ticket__info">Места: <span className="ticket__details ticket__chairs">ряд 2 место 6, ряд 2 место 7</span></p>
            <p className="ticket__info">В зале: <span className="ticket__details ticket__hall">{seanceHall.cinemaHall.number}</span></p>
            <p className="ticket__info">Начало сеанса: <span className="ticket__details ticket__start">{seanceHall.start}</span></p>
            <p className="ticket__info">Стоимость: <span className="ticket__details ticket__cost">600</span> рублей</p>

            <Link className="acceptin-button" as="button" href={`/ticket/${payment}`}>Получить код бронирования</Link>

            <p className="ticket__hint">После оплаты билет будет доступен в этом окне, а также придёт вам на почту. Покажите QR-код нашему контроллёру у входа в зал.</p>
            <p className="ticket__hint">Приятного просмотра!</p>
          </div>
        </section>
      </main>
    </>
  )
}