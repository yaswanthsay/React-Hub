import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function MediaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       className='trending__img'
        component="img"
        height="130"
        image={props.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
         {props.title}
        </Typography>
        <Typography variant="body6" color="text.secondary">
        {props.description}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
