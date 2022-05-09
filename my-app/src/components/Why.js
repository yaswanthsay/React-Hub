import React from 'react'
import InstructorPage from './InstructorPage'
import { useState } from 'react'

function Why(props) {

    const [instructorPage,setInstructorPage] = useState(true)
  return (
    <div>
          <div className='why__popup'>
             <p className='why_popup_para'>Why React Hub?</p>
             <ul>
               <li>More year of experience in IT sector</li>
               <li>Availility of lectures in anytime</li>
               <li>Experienced <span onClick={()=>setInstructorPage(false)}>Instructors</span></li>
               <li>Availability of better facilities</li>
             </ul>
         </div>
         {instructorPage ? "":<InstructorPage />}
    </div>
  )
}

export default Why