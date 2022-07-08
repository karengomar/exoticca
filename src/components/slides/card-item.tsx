import { Box, Button, CardContent  } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from 'react';

export interface CardItemProps {
    id: number;
    title?: string;
    destination?: string;
    images?:Array<{ desktop: string, tablet: string, mobile: string }>;
}  

export default function CardItem({
    id,
    title,
    destination,
    images,
}: CardItemProps) {
    return (
        <Card sx={{ maxWidth: 345 }} key={id}>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/south-america.jpg"
                alt="South America"
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
    );
}
