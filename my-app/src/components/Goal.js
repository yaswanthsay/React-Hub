import React from 'react'
import { useSelector } from 'react-redux'
import {JackInTheBox} from 'react-awesome-reveal'
import Typical from 'react-typical'

function Goal() {

  const dark = useSelector(state => state.mode.dark)
  return (
    <div className='goal__container'> 
    <h4 className='goal__just'>Just</h4>
    <Typical className='goal__typical'
             steps={[
                  'DESIGN',
                  1000,
                  'DEVELOP',
                  1000,
                ]}
                wrapper="p"
                loop={Infinity}
        />
    <div className={dark ? "goal dark" : "goal"}>
     
    </div>
    <div>
     
    <h1 className='goal__title'>OUR GOAL</h1>
   
      <p className='goal__para'>Providing unique websites, interactive <br/> apps,and customised marketing plans <br/>to  expand your business presense.<br/> Along with that we are also providing <br/>upcomming talents to grow their skill<br/> by working with us along with learning <br/>under continues guidance.</p>
     <JackInTheBox >
      <img src='/rightarrow.png' alt='' className='goal__arrow'/>
      </JackInTheBox>
    </div>
    </div>
  )
}

export default Goal