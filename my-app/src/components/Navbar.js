import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../darkSlice'
import DehazeIcon from '@mui/icons-material/Dehaze';


function Navbar() {

  const dark = useSelector(state => state.mode.value)

  const dispatch = useDispatch()
  return (
    <div className={dark ? "nav__container dark" : "nav__container"}>
      <div className={dark ? "nav dark" : "nav"}>
        <DehazeIcon className='icon'/>
        <h1 className='nav__title'>React Hub</h1>
        <NavLink to='/' className='nav__home'>HOME</NavLink>
        <NavLink to='/new' className='nav__new'>WHAT'S NEW?</NavLink>
        <NavLink to='/help' className='nav__help'>NEEDS HELP</NavLink>
        <NavLink to='/login' className='nav__login'>LOGIN</NavLink>
        {dark ? <img src='/darkbulb.png' alt='darkbulb' className='black__bulb' onClick={() => dispatch(lightMode())} /> :
         <img src='/lightbulb.png' alt='lightbulb' className='light__bulb' onClick={() => dispatch(darkMode())} />}
        <input placeholder='Search' className='nav__search' />
        
      </div>
      <div className='nav__bottom'>
      <h1 className='get__started'>Let's get started!</h1>
      <p className='nav__para'>Join our community to build a successfull Tech career.</p>
      <button className='get_started_btn'>Get Started</button>
      <button className='contact_us_btn'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar