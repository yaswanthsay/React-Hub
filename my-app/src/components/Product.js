
import React from 'react'
import Fade from 'react-reveal/Fade';
import { NavLink } from 'react-router-dom';

function Product(props) {
  return (
    <NavLink to={`/productpage/${props.description}`} className='product__link'>
      <div className='product'>
        <Fade bottom>
          <img src={props.url} alt='' className='product__img' />
        </Fade>
        <p className='product__para'>{props.description}</p>
        <h4 className='product__title'>{props.title}</h4>
      </div>
    </NavLink>
  )
}

export default Product