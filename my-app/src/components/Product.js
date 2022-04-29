import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom'




export default function MediaCard(props) {

  // const navigate = useNavigate();

  return (

    <Card sx={{ maxWidth: 345, maxHeight: 360 }} className='product' >
      <a href={`/productpage/${props.slug}`}>
        <CardMedia
          component="img"
          height="130"
          image={props.url}
          alt={props.title}
        />
      </a>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body5" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small">Share</Button>

        <Button size="small">More</Button>
      </CardActions>
    </Card>

  );
}
