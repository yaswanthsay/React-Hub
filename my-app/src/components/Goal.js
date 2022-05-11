import React from 'react'
import { useSelector } from 'react-redux'
import LazyShow from './LazyShow'

function Goal() {

  const dark = useSelector(state => state.mode.dark)
  return (
    <div className='goal__container'>  
    <div className={dark ? "goal dark" : "goal"}>
     
    </div>
    <div>
      <LazyShow>
    <h1 className='goal__title'>OUR GOAL</h1>
      <p className='goal__para'>Providing unique websites, interactive <br/> apps,and customised marketing plans <br/>to  expand your business presense.<br/> Along with that we are also providing <br/>upcomming talents to grow their skill<br/> by working with us along with learning <br/>under continues guidance</p>
      <img src='/rightarrow.png' alt='' className='goal__arrow'/>
      </LazyShow>
    </div>
    </div>
  )
}

export default Goal