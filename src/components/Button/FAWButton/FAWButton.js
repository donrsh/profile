// @flow

import React from 'react'

import './FAWButton.css'

import CST from 'constants/index'

/*
  READ this for available icons: http://fontawesome.io/icons/
*/

const FAWButton = ({
  name,
  text,
  fawIconName,
  fawIconSize,
  onClick = CST.NULL_FUNC
}: {
  name?: string,
  text?: string,
  fawIconName: string,
  fawIconSize?: 'lg' | '2x' | '3x' | '4x' | '5x',
  onClick?: Function
}) => {
  return (
    <button
      className='FAW-Button'
      onClick={onClick}
      {...(name ? {'data-faw-button-name': name} : {})}
    >
      {
        fawIconName ? (
          <i
            className={`fa fa-${fawIconName} ${fawIconSize ? `fa-${fawIconSize}` : ''}`}
            aria-hidden='true'
          />
        ) : null
      }
      {text}
    </button>
  )
}

export default FAWButton
