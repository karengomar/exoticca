import React from "react";
import Slides from "../../mocks/home.json";
import CardItem from "./card-item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CardCarousel() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {Slides.slides.map((element) => {
        return element.cards.map((card) => {
          return (
            <CardItem
              id={card.id}
              title={card.title}
              destination={card.destination}
              images={card.images}
              days={card.days}
              fromPriceBeautify={card.priceDetail.fromPriceBeautify}
              oldPriceBeautify={card.priceDetail.oldPriceBeautify}
            />
          );
        });
      })}
    </Slider>
  );
}
