
import React from 'react'
import LazyShow from './LazyShow'

function Premium() {
  return (
    <>
    <LazyShow>
    <div className='premium__container'>
      <div className='premium'>
    
      <div>
      <h6 className='premium__title'>PREMIUM COURSES</h6>
      <p className='premium__para'>Our premium courses are picked up after filteration. <br/>These courses are all taken by experienced instructors.</p>
      <button className='premium__btn'>MORE</button>
      </div>     
      <div className='premium_img_container'>
        <img src='/diamond.png' alt='teacher' className='premium__img'/>
      </div>
    </div>
    </div>
    </LazyShow>
    </>
  )
}

export default Premium