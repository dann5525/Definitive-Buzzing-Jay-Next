import React from 'react'

import PropTypes from 'prop-types'

import RightHero21 from './right-hero-21'

const RightHero2 = (props) => {
  return (
    <>
      <div className={`right-hero-2-container ${props.rootClassName} `}>
        <div className="right-hero-2-container1">
          <span className="right-hero-2-text">{props.text1}</span>
          <span className="right-hero-2-text1">{props.text12}</span>
          <span className="right-hero-2-text2">{props.text1211}</span>
          <span className="right-hero-2-text3">{props.text121}</span>
          <span className="right-hero-2-text4">{props.text1212}</span>
          <RightHero21 rootClassName="right-hero21-root-class-name1"></RightHero21>
        </div>
      </div>
      <style jsx>
        {`
          .right-hero-2-container {
            width: auto;
            height: 250px;
            display: flex;
            position: relative;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
          }
          .right-hero-2-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            margin-left: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: center;
          }
          .right-hero-2-text {
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
          .right-hero-2-text1 {
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
          .right-hero-2-text2 {
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
          .right-hero-2-text3 {
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
          .right-hero-2-text4 {
            font-size: 2em;
            font-style: normal;
            font-weight: 700;
          }
        `}
      </style>
    </>
  )
}

RightHero2.defaultProps = {
  text: '4. Start your Trading Bot',
  text11: 'Automated',
  text1212: '5. Start Trading Bot',
  text121: '4. Allocate Funds',
  text12: '2. Create your Strategy',
  rootClassName: '',
  text1: '1. Connect Wallet',
  text1211: '3. Deploy Trading Vault',
}

RightHero2.propTypes = {
  text: PropTypes.string,
  text11: PropTypes.string,
  text1212: PropTypes.string,
  text121: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
  text1211: PropTypes.string,
}

export default RightHero2
