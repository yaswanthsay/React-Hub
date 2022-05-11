import React from 'react'
import LazyShow from './LazyShow'


function Works() {
  return (
    <>
   
    <div className='work'>
      <div className='work__container'>
        <div className='work__left'>
          <h1 className='work__title'>Our Works</h1>
          <p className='work__para'>Our works includes Netflix clone,<br />Olx clone,Amazon clone,Ecommerce <br />website clone,Tesla clone,A travel <br />guide website named packit</p>
        </div>
        <div className='work__right'>
        <LazyShow>
          <div className='work_para_icons'>
            <a className='olx__link' href='https://github.com/yaswanthsay/Tesla-clone'><img src='/teslalogo.png' alt='' className='tesla' /></a>
            <a className='olx__link' href='https://github.com/yaswanthsay/olxsample'><img src='/olxcar.png' alt='' className='olx' /></a>
            <a className='ecommerce__link' href='https://github.com/yaswanthsay/ecommerce'><img src='/shopping.png' alt='' className='ecommerce' /></a>
            <a className='amazon__link' href='https://github.com/yaswanthsay/Mern-amazon'><img src='/amazonlogo.png' alt='' className='amazon' /></a>
            <a className='packit__link' href='https://github.com/yaswanthsay/packit'><img src='/travellogo.png' alt='' className='packit' /></a>
            <a className='netflix__link' href='https://github.com/yaswanthsay/Netflix-sample'><img src='/netflixlogo.png' alt='' className='netflix' /></a>
          </div>
          </LazyShow>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default Works