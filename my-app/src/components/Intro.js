import React from 'react'
import { useSelector } from 'react-redux'

function Intro() {

    const dark = useSelector(state => state.mode.dark)
    return (
        <div className={dark ? "intro dark" : "intro"} id='reacthubId'>
            <h1 className='intro__title'>What is <span className='intro_title_span'>React Hub?</span></h1>
            <p className='intro__para'>We are trying to bring forward the skillset of the people those who are wishing to make their career in Tech field.<br />We are also providing tech solutions for different brands.If you’re dealing with IT support that doesn’t meet your <br />needs the way you want it to, or are operating without any support at all, your business can’t reach its full potential.</p>
            <h3 className='intro_second_title'>Our Areas</h3>
            <div className='intro__icons'>
            <img src='/reactjs.png' alt='' className='intro_icon_react'/>
            <img src='/js.png' alt='' className='intro_icon_js'/>
            <img src='/css.png' alt='' className='intro_icon_css'/>
            <img src='/html.png' alt='' className='intro_icon_html'/>
            </div>
        </div>
    )
}

export default Intro