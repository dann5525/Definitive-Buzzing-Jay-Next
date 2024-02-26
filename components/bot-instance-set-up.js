import React from 'react'

import PropTypes from 'prop-types'

const BotInstanceSetUp = (props) => {
  return (
    <>
      <div className={`bot-instance-set-up-container ${props.rootClassName} `}>
        <div className="bot-instance-set-up-container1">
          <div className="bot-instance-set-up-container-name">
            <span className="bot-instance-set-up-text">{props.textName1}</span>
            <select className="bot-instance-set-up-select-exchange">
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name1">
            <span className="bot-instance-set-up-text1">
              {props.textName12}
            </span>
            <select className="bot-instance-set-up-select-exchange1">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name2">
            <span className="bot-instance-set-up-text2">
              {props.textName11}
            </span>
            <select className="bot-instance-set-up-select-exchange2">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name3">
            <span className="bot-instance-set-up-text3">
              {props.textName113}
            </span>
            <select className="bot-instance-set-up-select-exchange3">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name4">
            <span className="bot-instance-set-up-text4">
              {props.textName112}
            </span>
            <select className="bot-instance-set-up-select-exchange4">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
          <div className="bot-instance-set-up-container-name5">
            <span className="bot-instance-set-up-text5">
              {props.textName111}
            </span>
            <select className="bot-instance-set-up-select-exchange5">
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 1" selected>
                Option 1
              </option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="bot-instance-set-up-container-next">
          <button type="button" className="bot-instance-set-up-button button">
            {props.btnNext}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .bot-instance-set-up-container {
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
            justify-content: space-between;
          }
          .bot-instance-set-up-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .bot-instance-set-up-container-name {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text {
            font-size: 32px;
          }
          .bot-instance-set-up-select-exchange {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-name1 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange1 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-name2 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text2 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange2 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-name3 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text3 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange3 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-name4 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text4 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange4 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-name5 {
            flex: 0 0 auto;
            width: 400px;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .bot-instance-set-up-text5 {
            font-size: 32px;
            padding-right: 0px;
          }
          .bot-instance-set-up-select-exchange5 {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xlarge);
            height: 36px;
            font-size: 24px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .bot-instance-set-up-container-next {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding-right: var(--dl-space-space-halfunit);
            justify-content: flex-end;
          }
          .bot-instance-set-up-button {
            color: var(--dl-color-gray-white);
            font-size: 32px;
            padding-top: 4px;
            border-width: 0px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: 4px;
            text-decoration: none;
            background-color: #232222;
          }

          .bot-instance-set-up-root-class-name1 {
            height: 450px;
          }
        `}
      </style>
    </>
  )
}

BotInstanceSetUp.defaultProps = {
  btnNext: 'Save',
  buttonDeposit1: 'Deposit',
  tokenABalanceText: 'A Balance:',
  textName111: 'Setting: 5',
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  tokenABalanceValue: '12.5',
  textName11: 'Setting: 2',
  rootClassName: '',
  imageAlt: 'image',
  textName12: 'Setting 1:',
  tokenBBalanceValue: '300',
  buttonWhithdraw: 'Whithdraw',
  buttonDeposit: 'Deposit',
  textName1: 'Strategie:',
  tokenABalanceValue11: '(300$)',
  tokenBBalanceText: 'B Balance:',
  tokenABalanceValue1: '(120$)',
  buttonWhithdraw1: 'Whithdraw',
  textName113: 'Setting: 3',
  textName112: 'Setting: 4',
}

BotInstanceSetUp.propTypes = {
  btnNext: PropTypes.string,
  buttonDeposit1: PropTypes.string,
  tokenABalanceText: PropTypes.string,
  textName111: PropTypes.string,
  imageSrc: PropTypes.string,
  tokenABalanceValue: PropTypes.string,
  textName11: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  textName12: PropTypes.string,
  tokenBBalanceValue: PropTypes.string,
  buttonWhithdraw: PropTypes.string,
  buttonDeposit: PropTypes.string,
  textName1: PropTypes.string,
  tokenABalanceValue11: PropTypes.string,
  tokenBBalanceText: PropTypes.string,
  tokenABalanceValue1: PropTypes.string,
  buttonWhithdraw1: PropTypes.string,
  textName113: PropTypes.string,
  textName112: PropTypes.string,
}

export default BotInstanceSetUp
