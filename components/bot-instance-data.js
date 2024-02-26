import React from 'react'

import PropTypes from 'prop-types'

const BotInstanceData = (props) => {
  return (
    <>
      <div className={`bot-instance-data-container ${props.rootClassName} `}>
        <div className="bot-instance-data-container1">
          <div className="bot-instance-data-container2">
            <div className="bot-instance-data-container3">
              <span className="bot-instance-data-text">
                {props.tokenABalanceText}
              </span>
              <span className="bot-instance-data-text1">
                {props.tokenABalanceValue}
              </span>
              <span className="bot-instance-data-text2">
                {props.tokenABalanceValue1}
              </span>
            </div>
            <div className="bot-instance-data-container4">
              <button type="button" className="bot-instance-data-button button">
                {props.buttonDeposit}
              </button>
              <button
                type="button"
                className="bot-instance-data-button1 button"
              >
                {props.buttonWhithdraw}
              </button>
            </div>
          </div>
          <div className="bot-instance-data-container5">
            <div className="bot-instance-data-container6">
              <span className="bot-instance-data-text3">
                {props.tokenBBalanceText}
              </span>
              <span className="bot-instance-data-text4">
                {props.tokenBBalanceValue}
              </span>
              <span className="bot-instance-data-text5">
                {props.tokenABalanceValue11}
              </span>
            </div>
            <div className="bot-instance-data-container7">
              <button
                type="button"
                className="bot-instance-data-button2 button"
              >
                {props.buttonDeposit1}
              </button>
              <button
                type="button"
                className="bot-instance-data-button3 button"
              >
                {props.buttonWhithdraw1}
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="bot-instance-data-image"
        />
      </div>
      <style jsx>
        {`
          .bot-instance-data-container {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #232222;
            border-style: solid;
            border-width: 12px;
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .bot-instance-data-container1 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .bot-instance-data-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .bot-instance-data-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bot-instance-data-text {
            font-size: 32px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .bot-instance-data-text1 {
            font-size: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .bot-instance-data-text2 {
            font-size: 32px;
          }
          .bot-instance-data-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .bot-instance-data-button {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
            background-color: #232222;
          }
          .bot-instance-data-button1 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            border-width: 0px;
            background-color: #232222;
          }
          .bot-instance-data-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .bot-instance-data-container6 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-unit);
          }
          .bot-instance-data-text3 {
            font-size: 32px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .bot-instance-data-text4 {
            font-size: 32px;
            margin-right: var(--dl-space-space-unit);
          }
          .bot-instance-data-text5 {
            font-size: 32px;
          }
          .bot-instance-data-container7 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .bot-instance-data-button2 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
            background-color: #232222;
          }
          .bot-instance-data-button3 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            border-width: 0px;
            background-color: #232222;
          }
          .bot-instance-data-image {
            width: 342px;
            height: 151px;
            align-self: center;
            object-fit: cover;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
          }

          .bot-instance-data-root-class-name1 {
            width: auto;
            height: 450px;
            margin-right: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

BotInstanceData.defaultProps = {
  tokenBBalanceText: 'B Balance:',
  tokenABalanceValue: '12.5',
  tokenBBalanceValue: '300',
  buttonDeposit1: 'Deposit',
  buttonWhithdraw1: 'Whithdraw',
  tokenABalanceText: 'A Balance:',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  rootClassName: '',
  tokenABalanceValue11: '(300$)',
  tokenABalanceValue1: '(120$)',
  buttonWhithdraw: 'Whithdraw',
  buttonDeposit: 'Deposit',
  imageAlt: 'image',
}

BotInstanceData.propTypes = {
  tokenBBalanceText: PropTypes.string,
  tokenABalanceValue: PropTypes.string,
  tokenBBalanceValue: PropTypes.string,
  buttonDeposit1: PropTypes.string,
  buttonWhithdraw1: PropTypes.string,
  tokenABalanceText: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  tokenABalanceValue11: PropTypes.string,
  tokenABalanceValue1: PropTypes.string,
  buttonWhithdraw: PropTypes.string,
  buttonDeposit: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default BotInstanceData
