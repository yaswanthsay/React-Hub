import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { toggleDarkMode } from '../darkSlice'

function Dark() {
    const dark = useSelector(state=>state.dark.value)

    const dispatch = useDispatch()
  return (
    <div className={dark? "dark":"light"}>
         <button onClick={()=>dispatch(toggleDarkMode())}>Mode change</button>
        <h1>Dark Page</h1>
    </div>
  )
}

export default Dark