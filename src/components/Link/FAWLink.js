import React from 'react'
import PropTypes from 'prop-types'

/*
  READ this for available icons: http://fontawesome.io/icons/
*/

const FAWLink = ({
  name,
  text,
  fawIconName,
  fawIconSize,
  linkUrl,
  target
}) => {
  return (
    <a
      href={linkUrl}
      target={target}
      style={{ margin: '0 8px' }}
      data-faw-link-name={name}
    >
      {
        fawIconName ? (
          <i
            className={`fa fa-${fawIconName} ${fawIconSize ? `fa-${fawIconSize}` : ''}`}
            style={{marginRight: '5px'}}
            aria-hidden='true'
          />
        ) : null
      }

      {text}
    </a>
  )
}

FAWLink.PropTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  fawIconName: PropTypes.string,
  fawIconSize: PropTypes.oneOf([
    'lg', '2x', '3x', '4x', '5x'
  ]),
  linkUrl: PropTypes.string,
  target: PropTypes.string
}

export default FAWLink
