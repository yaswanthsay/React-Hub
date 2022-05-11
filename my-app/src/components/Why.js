import React from 'react'
import { useState } from 'react'

function Why(props) {

    const [instructorPage,setInstructorPage] = useState(true)
  return (
    <div className='why'>
         {instructorPage ? <div className='why__popup'>
         <div className='why__img'>
         <img src='/reactlogo.png' alt='' className='why__logo'/>
      </div>
      <div className='why_para_list'>
             <p className='why_popup_para'>Why React Hub?</p>
             <ul>
               <li>More year of experience in IT sector</li>
               <li>Availility of lectures in anytime</li>
               <li>Experienced <span onClick={()=>setInstructorPage(false)}>Instructors</span></li>
               <li>Availability of better facilities</li>
             </ul>
         </div> 
         </div>
         : ""}
         {instructorPage ? "" :<div className='instructor__page'>
        <h3 className='instructor_page_title'>Who are eligible to become <br/>instructor in our company?</h3>
        <div className='instructor_page_list'>
        <ol>
         <li>Those who have 2 years of experience as an instructor in front end development.</li>
         <li>Bachelor's degree is a must.</li>
         <li>Experience as a programmer in an IT company is preferred.</li>
         <li>Those who have prominent knowledge in backend frameworks has preference</li>
         <li>Those who are ready to work from office</li>
        </ol>  
        <p className='recruiting__contact'>Contact our recruiting team : <span>+91 767747457353</span></p> 
        </div>  
    </div>}
    </div>
  )
}

export default Why