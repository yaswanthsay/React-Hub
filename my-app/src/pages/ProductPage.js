import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {

    const params = useParams();
  
    const { description } = params
    return (
        <div className='product__page' >
            {/* <h1 className='product_page_heading'>{slug}</h1> */}
            <p>{description}</p>
        </div>
    )
}

export default ProductPage