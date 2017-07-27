import React from 'react'

import './InfoBlock.css'

const InfoBlock = (props) => {
  return (
    <div className='Info-Block'>
      <div className='bg-block' />
      <div className='content-block'>
        <div className='title'>{props.title}</div>
        <div className='list-container'>
          {props.children}
          {/* <ul>
            <li>CSS3 (flex-box and those <em>fancy</em> stuff about text, background and filter)</li>
            <li>Sass</li>
            <li>PostCSS</li>
            <li>susy & breakpoint (for RWD)</li>
          </ul> */}
        </div>
      </div>
    </div>
  )
}

export default InfoBlock
