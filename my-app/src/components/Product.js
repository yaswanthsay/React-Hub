import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


export default function MediaCard(props) {


  return (
<div className='product__container' id='productId'>
    <Card sx={{ maxWidth: 345, maxHeight: 360 }} className='product' >
      <Link to={`/productpage/${props.slug}`}>
        <CardMedia
          className='product__img'
          component="img"
          height="130"
          image={props.url}
          alt={props.title}
        />
      </Link>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body6" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
