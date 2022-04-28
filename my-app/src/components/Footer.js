import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {

  const dark = useSelector(state => state.mode.value)
  return (
    <div className={dark ? "footer dark" : "footer"}>
        <small>Copyright © 2022 by React Hub.All Rights Reserved</small>
    </div>
  )
}

export default Footer