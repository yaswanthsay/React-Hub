import React from 'react'

function InstructorPage() {
  return (
    <div className='instructor__page'>
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
    </div>
  )
}

export default InstructorPage