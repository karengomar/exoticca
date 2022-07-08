import React from 'react';
import Slides from '../../mocks/home.json';
import CardItem from './card-item';

export default function CardCarrousel() {
    return (
       <div>
            {Slides.slides.map((element) =>{
                return(
                    element.cards.map((card) =>{
                        <CardItem
                            id={card.id}
                            title={card.title}
                            destination={card.destination}
                            images={card.images}
                        />
                    })
                );
            })}
        </div>
    );
}