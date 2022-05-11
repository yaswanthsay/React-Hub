import React from 'react'
import { useState } from 'react'
import LazyShow from './LazyShow'

import Why from './Why'

function Instructor() {

  const [why,setWhy] = useState(true)
  return (
    <>
   
    <div className='instructor__container'>
      <div className='instructor'>
         <div className='instructor__img'>
         <LazyShow>
         <img src='/coaching.png' alt='' className='instructor__img'/>
         </LazyShow>
         </div>      
         <div className='instructor_btn_container'>
           <p className='instructor__para'>Are you passionate and experienced <br/>in teaching your skills to the students? <br/>Then you are in the right place.You can<br/> join with us to become an instructor</p>
           <button className='instructor__btn' onMouseOver={()=>setWhy(false)}>BECOME AN INSTRUCTOR</button>
         </div>
         {why ? "" : <Why/>}
      </div>
    </div>
    </>
  )
}

export default Instructor