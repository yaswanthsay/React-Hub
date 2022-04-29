import React from 'react'
import Product from './Product'
import productData from '../productData';
import trendingData from '../trendingData';
import Trending from './Trending'
import updateData from '../updateData';
import Updates from './Updates'
import webData from '../webData';
import Web from './Web'
import TableOfContent from './TableOfContent';
import { useSelector } from 'react-redux';



function Main() {

    const dark = useSelector(state => state.mode.value)


    const proDetails = productData.map((prod) => (
        <Product key={prod.slug} title={prod.title} description={prod.description} url={prod.url} />
    ))

    const trendingDetails = trendingData.map((trend) => (
        <Trending key={trend.id} title={trend.title} description={trend.description} url={trend.url} />
    ))

    const updateDetails = updateData.map((update)=>(
        <Updates key={update.id} title={update.title} description={update.description} url={update.url}/>
    ))
    
    const webDetails = webData.map((web)=>(
        <Web key={web.id} title={web.title} description={web.description} url={web.url}/>
    ))
    return (
        <div className={dark ? "main dark" : "main"}>
            <div className='main__container'>
            <div className='main__second'>
             <div className='main__left'>
           <TableOfContent/>
            </div> 
            <div className='main__right'>
            <h1 className='featured__tutorials'>Featured Tutorials</h1>
            <div className='product__details'>{proDetails}</div>
            <div className='trend'>
            <h1 className='trending__technologies'>Trending Technologies</h1>
            <div className='trending__details'>{trendingDetails}</div></div>
            <div className='main_bottom_card'>
                <div className='latest__up'><h1 className='latest__updates'>Latest Updates</h1>
                <div className='trending__details'>{updateDetails}</div></div>
                <div className='web__tech'><h1 className='web__technology'>Web Technology</h1>
                <div className='trending__details'>{webDetails}</div></div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Main
