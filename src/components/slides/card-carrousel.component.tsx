import Grid from '@mui/material/Grid';
import React from 'react';
import Slides from '../../mocks/home.json';
import CardItem from './card-item';

export default function CardCarrousel() {
    return (
        <Grid container direction="row" spacing={3}>
            {Slides.slides.map((element) => {
                return(
                    element.cards.map((card) => {
                        return(
                        <CardItem
                            id={card.id}
                            title={card.title}
                            destination={card.destination}
                            images={card.images}
                        />
                        )
                    })
                );
            })}
       </Grid>
    );
}