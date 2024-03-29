// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';



// export default function MediaCard(props) {

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//        className='trending__img'
//         component="img"
//         height="130"
//         image={props.url}
//         alt="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//          {props.title}
//         </Typography>
//         <Typography variant="body6" color="text.secondary">
//         {props.description}
//         </Typography>
//       </CardContent>
     
//     </Card>
//   );
// }


import React from 'react'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function Trending(props) {
  return (
    <NavLink to={`/trendingpage/${props.title}`} className='trending__link'>
    <div className='trending'>
      <Fade bottom>
      <img src={props.url} alt='' className='trending__img'/>
      </Fade>
      <p className='trending__para'>{props.description}</p>
      <h4 className='trending__title'>{props.title}</h4>
    </div>
    </NavLink>
  )
}

export default Trending