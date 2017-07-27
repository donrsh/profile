import React from 'react'

import FAWLink from '../components/Link/FAWLink'

const myWorks = {
  RWDExercise: {
    name: (
      <span className='workname'>
        RWD Exercise
      </span>
    ),
    desc: (
      <span>
        this practice include <strong>breakpoint</strong>
      </span>
    ),
    append: (
      <div className='worklinktext'>
        See
        <FAWLink
          text='here'
          target='_blank'
          fawIconName='link'
          linkUrl='https://donrsh.github.io/RWD-practice/'
        /> or view the source on
        <FAWLink
          text='github'
          target='_blank'
          fawIconName='github'
          linkUrl='https://github.com/donrsh/RWD-practice'
        />
      </div>
    )
  },

  MMPCalculator: {
    name: (
      <span className='workname'>
        政黨票計算機
      </span>
    ),
    desc: (
      <span>
        with <strong>React/Redux</strong> and < strong > Material UI</strong>. Material UI is a package of web components based on React
      </span>
    ),
    append: (
      <div className='worklinktext'>
        See
        <FAWLink
          text='here'
          target='_blank'
          fawIconName='link'
          linkUrl='https://donrsh.github.io/MPP-Calculator/'
        /> or view the source on
        <FAWLink
          text='github'
          target='_blank'
          fawIconName='github'
          linkUrl='https://github.com/donrsh/MPP-Calculator'
        />
      </div>
    )
  },

  RainDropAnimation: {
    name: (
      <span className='workname'>Like Rain Drops the Ground</span>
    ),
    desc: (
      <span>
        this is an animation work. <strong>jQuery</strong> and <strong>GSAP</strong> are used in this project.
      </span>
    ),
    append: (
      <div className='worklinktext'>
        See
        <FAWLink
          text='here'
          target='_blank'
          fawIconName='link'
          linkUrl='http://codepen.io/donrsh/pen/YyEbKP'
        />
      </div>
    )
  }
}

export default myWorks
