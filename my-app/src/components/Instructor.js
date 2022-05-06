import React from 'react'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'

function Instructor() {

  const [instructor,setInstructor] = useState(true) 


  return (
    <div className='instructor__container'>
      <div className='instructor'>
        <div>
          {instructor ? <img src='/itteacher1.jpg' alt='' className='itteacher1'/>: ""}
        </div>
    {instructor  ? "" :  
    <div className='instructor_para_container'>
      <div>
    <p className='instructor__para'>
    <div className='instructor_para_img'>
        <img src='/itteacher3.jpg' alt='' className='itteacher3'/>
      </div><span className='instructor_para_span1'>Why React Hub?
  
    <ul className='instructor__unlist'>
      <li>Long years of experience in IT sector.</li>
      <li>Free and budget friendly tutorials.</li>
      <li>Availability of teachers in everytime</li>
      <li>World class and experienced lectures</li>
    </ul>
    </span><br/><span className='instructor_para_span2'>Are you passionate on teaching your skills to the students?Then you are in the right place.</span><br/><NavLink to='/' className='instructor_para_span3' >JOIN WITH US.</NavLink></p>
    </div>
    </div> }</div> 
      {instructor ? <img src='/arrow1.png' alt='' className='instructor__arrow'/> : "" }
      {instructor ? <button className='instructor__btn' onMouseOver={()=>setInstructor(false)} >BECOME AN INSTRUCTOR</button>: "" }
      </div>  
  )
}

export default Instructor