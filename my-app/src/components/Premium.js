import React from 'react'

function Instructor() {
  return (
    <div className='premium'>
        <div>
        <h4>Premium courses</h4>
        <p>These are the courses taken by experienced lectures </p>
        <button className='more__btn'>More</button>
        </div>
        <div>
            <img src='/programming.png' alt='' className='premium__img'/>
            </div>   
    </div>
  )
}

export default Instructor