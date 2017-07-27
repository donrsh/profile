import React, { Component } from 'react'

import './InfoBlock.css'

class InfoBlock extends Component {
  beforeEnterClassName = 'before-enter'

  componentDidMount () {
    if (IntersectionObserver) {
      const io = new IntersectionObserver(
        entries => {
          entries.map(entry => {
            entry.target.classList.remove(this.beforeEnterClassName)
          })
        }
      )

      io.observe(this.ele)
    }
  }

  render () {
    const { id, title, children } = this.props

    return (
      <div
        className={`Info-Block ${this.beforeEnterClassName}`}
        ref={ele => { this.ele = ele }}
        id={id}
      >
        <div className='bg-block' />
        <div className='content-block'>
          <div className='title'>{title}</div>
          <div className='list-container'>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default InfoBlock
