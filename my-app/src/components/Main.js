import React from 'react'
import Product from './Product'
import productData from '../productData';
import trendingData from '../trendingData';
import Trending from './Trending'
import { useSelector } from 'react-redux';
import Intro from './Intro';
import Goal from './Goal';
import Instructor from './Instructor';
import Premium from './Premium';



function Main() {

    const dark = useSelector(state => state.mode.value)


    const proDetails = productData.map((prod) => (
        <Product slug={prod.slug} title={prod.title} description={prod.description} url={prod.url} />
    ))

    const trendingDetails = trendingData.map((trend) => (
        <Trending key={trend.id} title={trend.title} description={trend.description} url={trend.url} />
    ))

   

   
    return (
        <div className={dark ? "main dark" : "main"}>
            <div className='main__container'>
                <div className='main__intro'>
                    <Intro />
                </div>
                <div className='main__second'>
                    <div className='main__right'>
                        <h1 className='featured__tutorials'><img src='book.png' alt='' className='tutorials__icon' /> Featured Tutorials</h1>
                        <div className='product__details' id='tutorials'>{proDetails}</div>

                        <div className='trend'>
                            <h1 className='trending__technologies'><img src='tech.png' alt='' className='tech__icon' />Trending Technologies</h1>
                            <div className='trending__details' id='trendingId'>{trendingDetails}</div></div>
                        <div className='main__intro'>
                            <Goal />
                        </div>
                        <div className='instructor__premium'>
                            <div  className='instructor_premium_container'>
                            <Instructor />
                            <Premium />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
