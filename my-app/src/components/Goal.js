import React from 'react'
import { useSelector } from 'react-redux'

function Goal() {

    const dark = useSelector(state => state.mode.dark)
  return (
    <div>    <div className={dark ? "goal dark" : "goal"}>
    <h1 className='goal__title'>Our Goals</h1>
    <p className='goal__para'>Providing unique websites, interactive apps, and customized marketing plans to expand your business presence.</p>
    </div>
</div>
  )
}

export default Goal