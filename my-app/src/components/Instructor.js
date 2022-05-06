
import React from 'react'

function Instructor() {
  return (
    <div className='instructor__container'>
      <div className='instructor'>
      <div className='teacher_img_container'>
        <img src='/teacher.png' alt='teacher' className='teacher__img'/>
      </div>
      <div>
        <img src='/arrow.png' alt='' className='instructor__arrow'/>
      </div>
      <div>
      <h6 className='instructor__title'>BECOME AN INSTRUCTOR</h6>
      <p className='instructor__para'>Are you passionate to teach your skills? <br/>Then you have an opportunity to become the part of out team.</p>
      <button className='instructor__btn'>MORE</button>
      </div>     
    </div>
    </div>
  )
}

export default Instructor