import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../darkSlice'
import Menu from './Menu'
import { useState } from 'react'



function Navbar() {

  const [menu,setMenu] = useState(false)

  const dark = useSelector(state => state.mode.value)

  const dispatch = useDispatch()

  return (
    <div className={dark ? "nav__container dark" : "nav__container"}>
      <div className={dark ? "nav dark" : "nav"}>
        <img src='/menu.png' alt='' className='nav_menu_icon' onClick={()=>setMenu(true)}/>
        {menu ? <img src='/close.png' alt='' className='close' onClick={()=>setMenu(false)}/> : ""}
        {menu? <h1 className='menu__title'>React Hub</h1>:""}
        {menu ? <Menu/>  : ""}
        <h1 className='nav__title'>React Hub</h1>
        <NavLink to='/' className='nav__home'>HOME</NavLink>
        <NavLink to='/new' className='nav__new'>WHAT'S NEW?</NavLink>
        <NavLink to='/help' className='nav__help'>NEEDS HELP?</NavLink>
        <NavLink to='/blog' className='nav__blog'>BLOG</NavLink>
        <NavLink to='/login' className='nav__login'>LOGIN</NavLink>
      
        {dark ? <img src='/darkbulb.png' alt='darkbulb' className='black__bulb' onClick={() => dispatch(lightMode())} /> :
          <img src='/lightbulb.png' alt='lightbulb' className='light__bulb' onClick={() => dispatch(darkMode())} />}
        <input placeholder='Search' className='nav__search' />
        </div>
      <div className='nav__bottom'>
        <h1 className='get__started'>LET'S GET STARTED!</h1>
        <p className='nav__para'>Join our community to build a successfull Tech career.<br /><span className='nav__para2'>You have reached at the right place.Feel free to find out the best<br /> tutorials suits you most and build career in tech field.</span></p>

        <button className='get_started_btn'>Get Started</button>
        <button className='contact_us_btn'>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar