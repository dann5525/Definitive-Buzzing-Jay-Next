import React from 'react'

import PropTypes from 'prop-types'

const RightHero21 = (props) => {
  return (
    <>
      <div className={`right-hero-21-container ${props.rootClassName} `}>
        <button type="button" className="right-hero-21-button button">
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .right-hero-21-container {
            width: var(--dl-size-size-xlarge);
            height: 50px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: #232222;
            border-style: solid;
            border-width: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            background-color: #232222;
          }
          .right-hero-21-button {
            color: #ffffff;
            width: 100%;
            height: 100%;
            padding: 0px;
            font-size: 2em;
            align-self: center;
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}

RightHero21.defaultProps = {
  text11: 'Automated',
  text: 'Secure Onchain',
  button: 'Join Now',
  text1: 'Trade Crypto',
  rootClassName: '',
}

RightHero21.propTypes = {
  text11: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default RightHero21
