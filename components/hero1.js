import React from 'react'

import PropTypes from 'prop-types'

import LeftHero2 from './left-hero-2'
import LeftHero21 from './left-hero-21'
import LeftHero211 from './left-hero-211'
import RightHero2 from './right-hero-2'

const Hero1 = (props) => {
  return (
    <>
      <div className={`hero1-container ${props.rootClassName} `}>
        <div className="hero1-container1">
          <LeftHero2 rootClassName="left-hero2-root-class-name"></LeftHero2>
          <LeftHero21 rootClassName="left-hero21-root-class-name"></LeftHero21>
          <LeftHero211 rootClassName="left-hero211-root-class-name"></LeftHero211>
        </div>
        <div className="hero1-container2">
          <RightHero2 rootClassName="right-hero2-root-class-name"></RightHero2>
        </div>
      </div>
      <style jsx>
        {`
          .hero1-container {
            width: 95%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: space-between;
          }
          .hero1-container1 {
            flex: 0 0 auto;
            width: 48%;
            height: 76vh;
            display: flex;
            align-self: flex-start;
            align-items: space-between;
            flex-direction: column;
          }
          .hero1-container2 {
            flex: 0 0 auto;
            width: 45%;
            height: auto;
            display: flex;
            align-items: center;
            margin-left: 5%;
            flex-direction: column;
            justify-content: center;
          }
          .hero1-root-class-name {
            width: 95%;
            height: 76vh;
          }
        `}
      </style>
    </>
  )
}

Hero1.defaultProps = {
  rootClassName: '',
}

Hero1.propTypes = {
  rootClassName: PropTypes.string,
}

export default Hero1
