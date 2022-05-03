import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {

    const params = useParams();
    const { slug } = params
    return (
        <div className='product__page' >
            <h1>{slug}</h1>
        </div>
    )
}

export default ProductPage