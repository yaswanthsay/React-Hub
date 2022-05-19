import React from 'react'
import { useParams } from 'react-router-dom'

function TrendingPage() {

    const params = useParams();
  
    const { title } = params
    return (
        <div className='product__page' >
            <h1 className='product_page_heading'>{title}</h1> 
        </div>
    )
}

export default TrendingPage;