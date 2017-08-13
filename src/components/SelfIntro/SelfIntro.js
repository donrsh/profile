import React from 'react'

import './SelfIntro.css'

import signature from '../../images/sign.png'

const SelfIntro = () => {
  return (
    <div id='Self-Intro'>
      <div className='inner-wrapper'>
        <img
          id='signature'
          src={signature}
          alt='My signature'
        />
        <div id='text'>
          Hi! I'm a frontend developer.
          <br /><br />
          You can reach me via<br />
          <a
            href='mailto:don.shieh@gmail.com'
            className='email-link'
          >
            <i
              className='fa fa-envelope-o'
              style={{marginRight: '8px'}}
            />
            don.shieh@gmail.com
          </a>
          <br />
          <br />
          Download{' '}
          <a
            href='/profile/Don-Hsieh-resume.pdf'
            target='_blank'
            className='email-link'
          >
            My Resume
          </a> in pdf.
        </div>
      </div>
    </div>
  )
}

export default SelfIntro
