import React from 'react'
import { useSelector } from 'react-redux'
function Help1() {
    const dark = useSelector(state => state.mode.dark)
    return (
        <div className={dark ? "help1__page dark" : "help1__page"}>Help1</div>
    )
}

export default Help1