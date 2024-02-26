import React from 'react'

import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <div className="footer-right-menue">
          <div className="footer-container1">
            <span className="footer-text">{props.textevitas}</span>
          </div>
          <div className="footer-container2"></div>
        </div>
        <div className="footer-footer-menue">
          <button type="button" className="footer-home button">
            {props.btnHome}
          </button>
          <button type="button" className="footer-strategies button">
            {props.btnStrategies}
          </button>
          <button type="button" className="footer-plans button">
            {props.btnPlans}
          </button>
          <button type="button" className="footer-reviews button">
            {props.btnReviews}
          </button>
        </div>
        <div className="footer-right-menue1">
          <div className="footer-container3"></div>
          <button type="button" className="footer-login button">
            {props.btnLogin}
          </button>
          <button type="button" className="footer-login1 button">
            {props.btnLogin1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 90%;
            height: 50px;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
            background-color: #232222;
          }
          .footer-right-menue {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .footer-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .footer-text {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          .footer-container2 {
            flex: 0 0 auto;
            width: 2px;
            height: 100%;
            display: flex;
            flex-direction: row;
            background-color: #ffffff;
          }
          .footer-footer-menue {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .footer-home {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .footer-strategies {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .footer-plans {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .footer-reviews {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            border-radius: 0px;
            background-color: transparent;
          }
          .footer-right-menue1 {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .footer-container3 {
            flex: 0 0 auto;
            width: 2px;
            height: 100%;
            display: flex;
            background-color: #d9d9d9;
          }
          .footer-login {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            border-radius: 0px;
            background-color: transparent;
          }
          .footer-login1 {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            border-radius: 0px;
            background-color: transparent;
          }

          .footer-root-class-name1 {
            width: 95%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-root-class-name2 {
            width: 95%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-root-class-name3 {
            width: 95%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-root-class-name4 {
            width: 95%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .footer-root-class-name5 {
            width: 95%;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  btnHome: 'Link 2',
  btnStrategies: 'Link 2',
  rootClassName: '',
  btnPlans: 'Link 3',
  textL1: 'L',
  btnReviews: 'Link 4',
  textevitas: 'Datum',
  btnLogin: 'Github',
  btnLogin1: 'Twitter',
}

Footer.propTypes = {
  btnHome: PropTypes.string,
  btnStrategies: PropTypes.string,
  rootClassName: PropTypes.string,
  btnPlans: PropTypes.string,
  textL1: PropTypes.string,
  btnReviews: PropTypes.string,
  textevitas: PropTypes.string,
  btnLogin: PropTypes.string,
  btnLogin1: PropTypes.string,
}

export default Footer
