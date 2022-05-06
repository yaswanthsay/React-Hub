
import React from 'react'

function Premium() {
  return (
    <div className='premium__container'>
      <div className='premium'>
        <div>
          <img src='/arrow.png' alt='' className='premium__arrow'/>
        </div>
      <div>
      <h6 className='premium__title'>PREMIUM COURSES</h6>
      <p className='premium__para'>Our premium courses are picked up after filteration. <br/>These courses are all taken by experienced instructors.</p>
      <button className='premium__btn'>MORE</button>
      </div>     
      <div className='premium_img_container'>
        <img src='/premium.png' alt='teacher' className='premium__img'/>
      </div>
    </div>
    </div>
  )
}

export default Premium