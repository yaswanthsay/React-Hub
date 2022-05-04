import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {

  const dark = useSelector(state => state.mode.value)
  return (
    <div className={dark ? "footer dark" : "footer"} id='footerId'>
      <div className='contact'>
        <p className='footer__number'>Mobile:1800-435446-2323</p>
        <p className='footer__email'>Email:reacthub@gmail.com</p>
      </div>
        <small className='footer__statment'>Copyright © 2022 by React Hub.All Rights Reserved</small>
    </div>
  )
}

export default Footer