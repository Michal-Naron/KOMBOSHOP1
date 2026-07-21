import hibiscusRaspberryFront from "../assets/images/products/hibiscus-raspberry-front.jpg";
import hibiscusRaspberryBack from "../assets/images/products/hibiscus-raspberry-back.jpg";
import greenTeaFront from "../assets/images/products/green-tea-front.jpg";
import greenTeaBack from "../assets/images/products/green-tea-back.jpg";
import junHoneyFront from "../assets/images/products/jun-honey-front.jpg";
import junHoneyBack from "../assets/images/products/jun-honey-back.jpg";
import hibiscusFront from "../assets/images/products/hibiscus-front.jpg";
import hibiscusBack from "../assets/images/products/hibiscus-back.jpg";

export const products = [
  {
    id: 1,
    slug: "hibiskus-malina",
    name: "Kombucha hibiskusowa z maliną",
    shortDescription:
      "Owocowa, wyrazista kompozycja hibiskusa i malin o intensywnym kolorze.",
    description:
      "Rzemieślnicza kombucha przygotowana na bazie naparu z hibiskusa i zielonej herbaty, uzupełniona smakiem malin. Najlepiej smakuje dobrze schłodzona.",
    price: "25,00 zł",
    volume: "750 ml",
    images: [
      {
        src: hibiscusRaspberryFront,
        alt: "Przód butelki kombuchy hibiskusowej z maliną",
      },
      {
        src: hibiscusRaspberryBack,
        alt: "Tył butelki kombuchy hibiskusowej z maliną",
      },
    ],
    ingredients: [
      "napar z hibiskusa",
      "napar z zielonej herbaty",
      "cukier",
      "sok tłoczony z malin",
      "kultury SCOBY",
    ],
  },
  {
    id: 2,
    slug: "zielona-herbata",
    name: "Kombucha z zielonej herbaty",
    shortDescription:
      "Klasyczna, lekka kombucha o świeżym i delikatnie herbacianym profilu.",
    description:
      "Podstawowy wariant marki Kombo dla osób, które lubią czysty smak fermentowanej zielonej herbaty. Orzeźwiająca i uniwersalna.",
    price: "23,00 zł",
    volume: "750 ml",
    images: [
      {
        src: greenTeaFront,
        alt: "Przód butelki kombuchy z zielonej herbaty",
      },
      {
        src: greenTeaBack,
        alt: "Tył butelki kombuchy z zielonej herbaty",
      },
    ],
    ingredients: ["napar z zielonej herbaty", "cukier", "kultury SCOBY"],
  },
  {
    id: 3,
    slug: "jun-zielona-herbata-miod",
    name: "Jun na zielonej herbacie i miodzie",
    shortDescription:
      "Delikatny napój fermentowany z zielonej herbaty i miodu.",
    description:
      "Jun to łagodniejsza, subtelnie miodowa odmiana napoju fermentowanego. Powstaje na bazie zielonej herbaty oraz miodu i najlepiej smakuje schłodzony.",
    price: "27,00 zł",
    volume: "750 ml",
    images: [
      {
        src: junHoneyFront,
        alt: "Przód butelki Jun na zielonej herbacie i miodzie",
      },
      {
        src: junHoneyBack,
        alt: "Tył butelki Jun na zielonej herbacie i miodzie",
      },
    ],
    ingredients: ["napar z zielonej herbaty", "miód", "kultury fermentacyjne"],
  },
  {
    id: 4,
    slug: "hibiskusowa",
    name: "Kombucha hibiskusowa",
    shortDescription:
      "Głęboki hibiskusowy smak z przyjemnie kwaskowym charakterem.",
    description:
      "Pełna aromatu kombucha na bazie hibiskusa. Jej wyrazisty profil dobrze sprawdza się jako orzeźwiający napój do posiłku lub na piknik.",
    price: "24,00 zł",
    volume: "750 ml",
    images: [
      {
        src: hibiscusFront,
        alt: "Przód butelki kombuchy hibiskusowej",
      },
      {
        src: hibiscusBack,
        alt: "Tył butelki kombuchy hibiskusowej",
      },
    ],
    ingredients: ["napar z hibiskusa", "cukier", "kultury SCOBY"],
  },
];
