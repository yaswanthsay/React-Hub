import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function MediaCard(props) {

    return (
        <Card sx={{ maxWidth: 145 }}>
            <CardMedia
            className='update__img'
                component="img"
                height="70"
                image={props.url}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {props.title}
                </Typography>

            </CardContent>

        </Card>
    );
}
