import React from 'react'
import { useSelector } from 'react-redux'

function TableOfContent() {

  const dark = useSelector(state => state.mode.value)
  return (
    <div className={dark ? "table_of_content dark" : "table_of_content" }>
      <p className='content__heading'>Table of content</p>
      <ul>
        <li>HTML Tutorial</li>
        <li>CSS Tutorial</li>
        <li>Javascript Tutorial</li>
        <li>ReactJS Tutorial</li>
        <li>Redux Core Tutorial</li>
        <li>Redux Toolkit Tutorial</li>
        <li>Bootstrap Tutorial</li>
        <li>Material UI Tutorial</li>
        <li>Machine Learning Tutorial</li>
        <li>Artificial Intelligence Tutorial</li>
        <li>JSX Tutorial</li>
        <li>Web designing</li>
        <li>Web development</li>
      </ul>
    </div>
  )
}

export default TableOfContent