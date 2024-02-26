import React from 'react'

import PropTypes from 'prop-types'

const TransferFunds = (props) => {
  return (
    <>
      <div className={`transfer-funds-container ${props.rootClassName} `}>
        <h1 className="transfer-funds-text">{props.headingUP}</h1>
        <div className="transfer-funds-container-userprofile">
          <div className="transfer-funds-container-transfer-token-a">
            <span className="transfer-funds-text1">{props.textName1}</span>
            <div className="transfer-funds-container1">
              <input
                type="text"
                placeholder={props.textinputName11}
                className="transfer-funds-textinput input"
              />
              <span>{props.text1}</span>
            </div>
            <button type="button" className="transfer-funds-button button">
              {props.button11}
            </button>
          </div>
          <div className="transfer-funds-container-transfer-token-b">
            <span className="transfer-funds-text3">{props.textTelegram}</span>
            <div className="transfer-funds-container2">
              <input
                type="text"
                placeholder={props.textinputName1}
                className="transfer-funds-textinput1 input"
              />
              <span>{props.text}</span>
            </div>
            <button type="button" className="transfer-funds-button1 button">
              {props.button1}
            </button>
          </div>
          <div className="transfer-funds-container-next">
            <button type="button" className="transfer-funds-button2 button">
              {props.btnNext}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .transfer-funds-container {
            width: auto;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .transfer-funds-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .transfer-funds-container-userprofile {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            border-color: #232222;
            border-width: 12px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .transfer-funds-container-transfer-token-a {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .transfer-funds-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .transfer-funds-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .transfer-funds-textinput {
            color: var(--dl-color-gray-900);
            width: var(--dl-size-size-xxlarge);
            border-color: #232222;
            border-width: 4px;
            background-color: transparent;
          }
          .transfer-funds-button {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            height: 36px;
            font-size: 24px;
            border-color: #232222;
            border-width: 4px;
            background-color: #232222;
          }
          .transfer-funds-container-transfer-token-b {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: 18px;
            justify-content: space-between;
          }
          .transfer-funds-text3 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .transfer-funds-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .transfer-funds-textinput1 {
            color: var(--dl-color-gray-900);
            width: var(--dl-size-size-xxlarge);
            border-color: #232222;
            border-width: 4px;
            background-color: transparent;
          }
          .transfer-funds-button1 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-large);
            height: 36px;
            font-size: 24px;
            border-color: #232222;
            border-width: 4px;
            background-color: #232222;
          }
          .transfer-funds-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .transfer-funds-button2 {
            color: var(--dl-color-gray-white);
            width: 400px;
            font-size: 32px;
            padding-top: 4px;
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            background-color: #232222;
          }
        `}
      </style>
    </>
  )
}

TransferFunds.defaultProps = {
  text1: 'Balance A:',
  text: 'Balance B:',
  rootClassName: '',
  btnNext: 'Start Trading Bot',
  textinputName11: '',
  button11: 'Send',
  button2: 'Deploy',
  textName1: 'Token A:',
  button1: 'Send',
  button: 'Send',
  textinputName: '',
  texttelegram: 'Set Allowances',
  textinputName1: '',
  headingUP: 'Transfer Funds',
  textTelegram: 'Token B:',
}

TransferFunds.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  btnNext: PropTypes.string,
  textinputName11: PropTypes.string,
  button11: PropTypes.string,
  button2: PropTypes.string,
  textName1: PropTypes.string,
  button1: PropTypes.string,
  button: PropTypes.string,
  textinputName: PropTypes.string,
  texttelegram: PropTypes.string,
  textinputName1: PropTypes.string,
  headingUP: PropTypes.string,
  textTelegram: PropTypes.string,
}

export default TransferFunds
