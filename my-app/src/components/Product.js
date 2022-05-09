// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { Link } from 'react-router-dom'


// export default function MediaCard(props) {


//   return (
// <div className='product__container' id='productId'>
//     <Card sx={{ maxWidth: 345, maxHeight: 360 }} className='product' >
//       <Link to={`/productpage/${props.slug}`}>
//         <CardMedia
//           className='product__img'
//           component="img"
//           height="130"
//           image={props.url}
//           alt={props.title}
//         />
//       </Link>
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {props.title}
//         </Typography>
//       </CardContent>
//     </Card>
//     </div>
//   );
// }
import React from 'react'

function Product(props) {
  return (
    <div className='product'>
      <img src={props.url} alt='' className='product__img'/>
      <p className='product__para'>{props.description}</p>
      <h4 className='product__title'>{props.title}</h4>
    </div>
  )
}

export default Product