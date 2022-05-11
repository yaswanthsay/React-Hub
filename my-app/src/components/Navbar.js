import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../darkSlice'
import Menu from './Menu'
import { useState } from 'react'
import {HashLink as Link} from 'react-router-hash-link'
import Services from './Services'
import LazyShow from './LazyShow'




function Navbar() {
  
  const [services,setServices] = useState(true)
  const [menu,setMenu] = useState(true)

  const dark = useSelector(state => state.mode.value)

  const dispatch = useDispatch()

  return (
    <div className={dark ? "nav__container dark" : "nav__container"} id='nav__containerId'>
      <div className={dark ? "nav dark" : "nav"}>
        
       {menu ? <img src='/menu4.png' alt='' className='nav_menu_icon' onClick={()=>setMenu(false)}/>:""}
       {menu? "" : <img src='/close.png' alt='' className='close' onClick={()=>setMenu(true)}/>}
        {menu ? "" : <Menu/> }
        <h1 className='nav__title'>React Hub</h1>
        <Link to='nav__container#nav__containerId' className='nav__home'>HOME</Link>
        <NavLink to='/new' className='nav__new'>WHAT'S NEW?</NavLink>
        <NavLink to='/help' className='nav__help'>NEEDS HELP?</NavLink>
        <NavLink to='/blog' className='nav__blog'>BLOG</NavLink>
        <NavLink to='/login' className='nav__login'>LOGIN</NavLink>
        {dark ? <img src='/darkbulb3.png' alt='darkbulb' className='black__bulb' onClick={() => dispatch(lightMode())} /> :
          <img src='/lightbulb3.png' alt='lightbulb' className='light__bulb' onClick={() => dispatch(darkMode())} />}
        <input placeholder='Search' className='nav__search' />
        
        </div>
      <div className='nav__bottom'>
        <div className='nav_bottom_container'>
        <h1 className='get__started'>LET'S GET STARTED!</h1>
        <p className='nav__para'>Join our community to build a successfull Tech career.<br /><span className='nav__para2'>You have reached at the right place.Feel free to find out the best<br /> tutorials suits you most and build career in tech field.</span></p>
        <NavLink to='/start' className='get_started_btn' >Get Started</NavLink >
         <Link to='footer#footerId'><button className='contact_us_btn' >Contact Us</button></Link>
       <div className='started__hover'></div>
      </div>
      <div className='nav__services' onClick={()=>setServices(false)}>
      <div className='nav_services_btn' >SERVICES</div>
      </div>
      {services ? "" : <Services />}
      {services ? "": <img src='/leftarrow.png' alt='' className='nav_service_arrow' onClick={()=>setServices(true)}/>}
      
      </div>
    </div>
  )
}

export default Navbar