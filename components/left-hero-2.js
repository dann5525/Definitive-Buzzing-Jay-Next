import React from 'react'

import PropTypes from 'prop-types'

const LeftHero2 = (props) => {
  return (
    <>
      <div className={`left-hero-2-container ${props.rootClassName} `}>
        <div className="left-hero-2-container1">
          <span className="left-hero-2-text">{props.text1}</span>
          <span className="left-hero-2-text1">{props.text11}</span>
          <span className="left-hero-2-text2">{props.text}</span>
        </div>
      </div>
      <style jsx>
        {`
          .left-hero-2-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            border-color: #232222;
            border-style: solid;
            border-width: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
          }
          .left-hero-2-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .left-hero-2-text {
            font-size: 3em;
            font-style: normal;
            font-weight: 700;
          }
          .left-hero-2-text1 {
            font-size: 4em;
            font-style: normal;
            font-weight: 700;
          }
          .left-hero-2-text2 {
            font-size: 3em;
            font-style: normal;
            font-weight: 700;
          }
          .left-hero-2-root-class-name {
            height: 100%;
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

LeftHero2.defaultProps = {
  rootClassName: '',
  text11: 'Automated',
  text1: 'Trade Crypto',
  text: 'Secure Onchain',
}

LeftHero2.propTypes = {
  rootClassName: PropTypes.string,
  text11: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default LeftHero2
