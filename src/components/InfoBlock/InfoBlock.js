// @flow

import React, { Component } from 'react'
import type { Children } from 'react' // eslint-disable-line

import './InfoBlock.css'

import FAWButton from '../Button/FAWButton/FAWButton'

type DefaultProps = {
  toggleable: boolean,
  openByDefault: boolean
}

type Props = {
  title: string,
  id?: string,
  toggleable: boolean,
  openByDefault: boolean,
  children: Children
}

type State = {
  contentOpen: boolean
}

class InfoBlock extends Component<DefaultProps, Props, State> {
  /* static property */
  static beforeEnterClassName: string = 'before-enter'
  static fawButtonName: string = 'info-block-content-toggle'
  static defaultProps: DefaultProps = {
    toggleable: false,
    openByDefault: true
  }

  /* instance property */
  state: State
  ele: HTMLDivElement // eslint-disable-line

  constructor (props: Props) {
    super()

    const {
      toggleable,
      openByDefault
    } = props

    this.state = {
      contentOpen: !toggleable || openByDefault
    }
  }

  toggleContentOpen = () => {
    console.log('toggleContentOpen')
    if (!this.props.toggleable) return

    this.setState(prevState => ({
      contentOpen: !prevState.contentOpen
    }))
  }

  componentDidMount () {
    if (IntersectionObserver) {
      const io = new IntersectionObserver(
        entries => {
          entries.map(entry => {
            entry.target.classList.remove(InfoBlock.beforeEnterClassName)
          })
        }
      )

      io.observe(this.ele)
    }
  }

  render () {
    const {
      id,
      title,
      toggleable,
      children
    } = this.props

    const {
      contentOpen
    } = this.state

    console.log(InfoBlock.beforeEnterClassName)

    return (
      <div
        className={`Info-Block ${InfoBlock.beforeEnterClassName}`}
        ref={ele => { this.ele = ele }}
        id={id}

      >
        <div className='bg-block' />
        <div className='content-block'>
          <div
            className='title'
            onClick={this.toggleContentOpen}
          >
            {title}
            {
              toggleable
              ? <FAWButton
                fawIconName={contentOpen ? 'caret-up' : 'caret-down'}
                name={InfoBlock.fawButtonName}
              /> : null
            }
          </div>
          <div
            className='content'
            data-show={contentOpen}
          >
            {children}
          </div>
        </div>
      </div>
    )
  }
}

// InfoBlock.propTypes = {
//   title: PropTypes.node.isRequired,
//   id: PropTypes.string,
//   toggleable: PropTypes.bool,
//   openByDefault: PropTypes.bool
// }

// InfoBlock.defaultProps = {
//   toggleable: false,
//   openByDefault: true
// }

export default InfoBlock
