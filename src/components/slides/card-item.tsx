import {Button, CardContent, Grid  } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

interface CardImages {
    desktop: string;
    tablet: string;
    mobile: string; 
}

type cardImagesTypes = 'desktop' | 'tablet' | 'mobile';

export interface CardItemProps {
    id: number;
    title: string;
    destination: string;
    images:Array<CardImages>;
}  

export default function CardItem({
    id,
    title,
    destination,
    images,
}: CardItemProps) {
    const [screen, setScreen] = useState<cardImagesTypes>('desktop');

    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }} key={id}>
                <CardMedia
                    component="img"
                    height='100%'
                    image={images[0][screen]}
                    alt={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="white">
                    {destination}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
}
