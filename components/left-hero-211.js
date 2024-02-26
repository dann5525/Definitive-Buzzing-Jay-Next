import React from 'react'

import PropTypes from 'prop-types'

const LeftHero211 = (props) => {
  return (
    <>
      <div className={`left-hero-211-container ${props.rootClassName} `}>
        <div className="left-hero-211-container1">
          <img
            alt={props.imageAlt5}
            src={props.imageSrc5}
            className="left-hero-211-image"
          />
          <img
            alt={props.imageAlt6}
            src={props.imageSrc6}
            className="left-hero-211-image1"
          />
          <img
            alt={props.imageAlt7}
            src={props.imageSrc7}
            className="left-hero-211-image2"
          />
          <img
            alt={props.imageAlt8}
            src={props.imageSrc8}
            className="left-hero-211-image3"
          />
          <img
            alt={props.imageAlt9}
            src={props.imageSrc9}
            className="left-hero-211-image4"
          />
        </div>
      </div>
      <style jsx>
        {`
          .left-hero-211-container {
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
          .left-hero-211-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: var(--dl-size-size-medium);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: 3vw;
            padding-right: 3vw;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .left-hero-211-image {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-211-image1 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-211-image2 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-211-image3 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }
          .left-hero-211-image4 {
            width: auto;
            height: 100%;
            object-fit: cover;
          }

          @media (max-width: 479px) {
            .left-hero-211-container1 {
              height: 10vh;
            }
          }
        `}
      </style>
    </>
  )
}

LeftHero211.defaultProps = {
  imageAlt: 'image',
  imageAlt5: 'image',
  imageSrc8: '/handshake-icon.svg',
  imageAlt8: 'image',
  imageSrc9: '/shield-icon.svg',
  imageSrc3: 'df342e4d-b23c-4f2d-9c80-f515bce25257',
  imageSrc7: '/business-analytics-icon.svg',
  imageAlt1: 'image',
  imageSrc2: '0eeeb74c-bc4d-43ab-83a3-bb741aee1494',
  imageAlt4: 'image',
  imageSrc5: '/24-hour-icon.svg',
  imageAlt3: 'image',
  imageAlt2: 'image',
  imageAlt9: 'image',
  imageSrc1: '372f1cb7-2f5b-4924-81fe-15bdef371dea',
  rootClassName: '',
  imageSrc: '604545e3-7590-46e2-a714-22a821c0c655',
  imageSrc6: '/blockchain-icon.svg',
  imageAlt7: 'image',
  imageAlt6: 'image',
  imageSrc4: 'c32b2582-ed47-4332-b4e9-17d0440cf13c',
}

LeftHero211.propTypes = {
  imageAlt: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageSrc9: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageSrc4: PropTypes.string,
}

export default LeftHero211
