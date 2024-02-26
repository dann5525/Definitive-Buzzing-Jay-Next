import React from 'react'

import PropTypes from 'prop-types'

const LeftHero21 = (props) => {
  return (
    <>
      <div className={`left-hero-21-container ${props.rootClassName} `}>
        <div className="left-hero-21-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="left-hero-21-image"
          />
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="left-hero-21-image1"
          />
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="left-hero-21-image2"
          />
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="left-hero-21-image3"
          />
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="left-hero-21-image4"
          />
        </div>
      </div>
      <style jsx>
        {`
          .left-hero-21-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: #232222;
            border-style: solid;
            border-width: 16px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
          }
          .left-hero-21-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 10vh;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 3vw;
            padding-right: 3vw;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .left-hero-21-image {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-21-image1 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-21-image2 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-21-image3 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-21-image4 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-21-root-class-name {
            margin-bottom: var(--dl-space-space-twounits);
          }
          @media (max-width: 767px) {
            .left-hero-21-container1 {
              padding-left: 3wv;
              padding-right: 3wv;
              justify-content: space-between;
            }
          }
          @media (max-width: 479px) {
            .left-hero-21-container {
              justify-content: center;
            }
            .left-hero-21-container1 {
              height: 10vh;
              padding-left: 3vw;
              padding-right: 3vw;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </>
  )
}

LeftHero21.defaultProps = {
  imageAlt2: 'image',
  imageSrc4: '/usd-coin-usdc-logo.svg',
  rootClassName: '',
  text: 'Secure Onchain',
  imageAlt1: 'image',
  imageSrc1: '/bnb-bnb-logo.svg',
  text1: 'Trade Crypto',
  imageAlt3: 'image',
  text11: 'Automated',
  imageSrc: '/bitcoin-btc-logo.svg',
  imageAlt: 'image',
  imageSrc3: '/uniswap-uni-logo.svg',
  imageSrc2: '/ethereum-eth-logo.svg',
  imageAlt4: 'image',
}

LeftHero21.propTypes = {
  imageAlt2: PropTypes.string,
  imageSrc4: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text1: PropTypes.string,
  imageAlt3: PropTypes.string,
  text11: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt4: PropTypes.string,
}

export default LeftHero21
