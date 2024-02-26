import React from 'react'

import PropTypes from 'prop-types'

const DeployContracts = (props) => {
  return (
    <>
      <div className={`deploy-contracts-container ${props.rootClassName} `}>
        <h1 className="deploy-contracts-text">{props.headingUP}</h1>
        <div className="deploy-contracts-container-userprofile">
          <div className="deploy-contracts-container-name">
            <span className="deploy-contracts-text1">{props.textName1}</span>
            <button type="button" className="deploy-contracts-button button">
              {props.button1}
            </button>
          </div>
          <div className="deploy-contracts-container-e-mail">
            <span className="deploy-contracts-text2">{props.textTelegram}</span>
            <button type="button" className="deploy-contracts-button1 button">
              {props.button}
            </button>
          </div>
          <div className="deploy-contracts-container-telegram">
            <span className="deploy-contracts-text3">{props.texttelegram}</span>
            <button type="button" className="deploy-contracts-button2 button">
              {props.button2}
            </button>
          </div>
          <div className="deploy-contracts-container-next">
            <button type="button" className="deploy-contracts-button3 button">
              {props.btnNext}
            </button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .deploy-contracts-container {
            width: auto;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .deploy-contracts-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .deploy-contracts-container-userprofile {
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
          .deploy-contracts-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .deploy-contracts-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .deploy-contracts-button {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            background-color: #232222;
          }
          .deploy-contracts-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .deploy-contracts-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .deploy-contracts-button1 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-width: 0px;
            background-color: #232222;
          }
          .deploy-contracts-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .deploy-contracts-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .deploy-contracts-button2 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-width: 0px;
            background-color: #232222;
          }
          .deploy-contracts-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .deploy-contracts-button3 {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            padding-top: 4px;
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            text-decoration: none;
            background-color: #232222;
          }
        `}
      </style>
    </>
  )
}

DeployContracts.defaultProps = {
  textinputEmail: '',
  button1: 'Deploy',
  texttelegram: 'Set Allowances',
  textinputTelegram: '',
  button2: 'Deploy',
  button: 'Deploy',
  textTelegram: 'Trading Module:',
  btnNext: 'Next',
  text: 'Text',
  rootClassName: '',
  textName1: 'Gnosis Safe:',
  headingUP: 'Deploy Contracts',
  textinputName: '',
}

DeployContracts.propTypes = {
  textinputEmail: PropTypes.string,
  button1: PropTypes.string,
  texttelegram: PropTypes.string,
  textinputTelegram: PropTypes.string,
  button2: PropTypes.string,
  button: PropTypes.string,
  textTelegram: PropTypes.string,
  btnNext: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  textName1: PropTypes.string,
  headingUP: PropTypes.string,
  textinputName: PropTypes.string,
}

export default DeployContracts
