import React from 'react'

import PropTypes from 'prop-types'

const Menue = (props) => {
  return (
    <>
      <div className={`menue-container ${props.rootClassName} `}>
        <div className="menue-right-menue">
          <div className="menue-container01">
            <div className="menue-container02">
              <span className="menue-text">{props.textL1}</span>
            </div>
            <span className="menue-text1">{props.textevitas}</span>
          </div>
          <div className="menue-container03"></div>
        </div>
        <div className="menue-main-menue">
          <button type="button" className="menue-home button">
            {props.btnHome}
          </button>
          <button type="button" className="menue-strategies button">
            {props.btnStrategies}
          </button>
          <button type="button" className="menue-plans button">
            {props.btnPlans}
          </button>
          <button type="button" className="menue-reviews button">
            {props.btnReviews}
          </button>
        </div>
        <div className="menue-right-menue1">
          <div className="menue-container04"></div>
          <button name="0x00" type="button" className="menue-login button">
            {props.btnLogin}
          </button>
          <div className="menue-container05">
            <div className="menue-container06">
              <div className="menue-container07">
                <div className="menue-container08">
                  <div className="menue-container09"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .menue-container {
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
          .menue-right-menue {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .menue-container01 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-left: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .menue-container02 {
            width: 24px;
            height: 24px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 1px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .menue-text {
            font-size: 20px;
            align-self: center;
            font-style: normal;
            font-family: 'Courier New';
            font-weight: 900;
            padding-top: 2px;
          }
          .menue-text1 {
            color: var(--dl-color-gray-white);
            align-self: center;
          }
          .menue-container03 {
            flex: 0 0 auto;
            width: 2px;
            height: 100%;
            display: flex;
            flex-direction: row;
            background-color: #ffffff;
          }
          .menue-main-menue {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .menue-home {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .menue-strategies {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .menue-plans {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            border-radius: 0px;
            background-color: transparent;
          }
          .menue-reviews {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            border-radius: 0px;
            background-color: transparent;
          }
          .menue-right-menue1 {
            flex: 0 0 auto;
            width: 15%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .menue-container04 {
            flex: 0 0 auto;
            width: 2px;
            height: 100%;
            display: flex;
            background-color: #d9d9d9;
          }
          .menue-login {
            color: var(--dl-color-gray-white);
            align-self: center;
            border-width: 0px;
            border-radius: 0px;
            background-color: transparent;
          }
          .menue-container05 {
            width: 24px;
            height: 24px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: var(--dl-space-space-oneandhalfunits);
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-700);
          }
          .menue-container06 {
            width: 22px;
            height: 22px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .menue-container07 {
            width: 14px;
            height: 14px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-700);
          }
          .menue-container08 {
            width: 10px;
            height: 10px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .menue-container09 {
            width: 8px;
            height: 8px;
            display: flex;
            align-self: center;
            align-items: flex-start;
            margin-right: 0px;
            border-radius: var(--dl-radius-radius-round);
            justify-content: center;
            background-color: var(--dl-color-gray-700);
          }
          .menue-root-class-name {
            width: 95%;
            margin-top: var(--dl-space-space-unit);
          }
          .menue-root-class-name1 {
            width: 95%;
            margin-top: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-twounits);
          }
        `}
      </style>
    </>
  )
}

Menue.defaultProps = {
  rootClassName: '',
  btnHome: 'Home',
  textL: 'L',
  textevitas: 'evitas',
  textL1: 'L',
  btnStrategies: 'Strategies',
  btnLogin: 'Login',
  btnPlans: 'Plans',
  btnReviews: 'Reviews',
}

Menue.propTypes = {
  rootClassName: PropTypes.string,
  btnHome: PropTypes.string,
  textL: PropTypes.string,
  textevitas: PropTypes.string,
  textL1: PropTypes.string,
  btnStrategies: PropTypes.string,
  btnLogin: PropTypes.string,
  btnPlans: PropTypes.string,
  btnReviews: PropTypes.string,
}

export default Menue
