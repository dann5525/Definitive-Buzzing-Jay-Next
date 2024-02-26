import React from 'react'

import PropTypes from 'prop-types'

const TradeHistory = (props) => {
  return (
    <>
      <div className={`trade-history-container ${props.rootClassName} `}>
        <div className="trade-history-container1">
          <span className="trade-history-text">{props.text}</span>
          <span className="trade-history-text01">{props.text11}</span>
          <span className="trade-history-text02">{props.text12}</span>
          <span className="trade-history-text03">{props.text1}</span>
          <button type="button" className="trade-history-button button">
            {props.button}
          </button>
        </div>
        <div className="trade-history-container2">
          <span className="trade-history-text04">{props.text5}</span>
          <span className="trade-history-text05">{props.text114}</span>
          <span className="trade-history-text06">{props.text124}</span>
          <span className="trade-history-text07">{props.text16}</span>
          <button type="button" className="trade-history-button1 button">
            {props.button5}
          </button>
        </div>
        <div className="trade-history-container3">
          <span className="trade-history-text08">{props.text4}</span>
          <span className="trade-history-text09">{props.text113}</span>
          <span className="trade-history-text10">{props.text123}</span>
          <span className="trade-history-text11">{props.text15}</span>
          <button type="button" className="trade-history-button2 button">
            {props.button4}
          </button>
        </div>
        <div className="trade-history-container4">
          <span className="trade-history-text12">{props.text31}</span>
          <span className="trade-history-text13">{props.text1121}</span>
          <span className="trade-history-text14">{props.text1221}</span>
          <span className="trade-history-text15">{props.text141}</span>
          <button type="button" className="trade-history-button3 button">
            {props.button31}
          </button>
        </div>
        <div className="trade-history-container5">
          <button type="button" className="trade-history-button4 button">
            {props.button3}
          </button>
          <button type="button" className="trade-history-button5 button">
            {props.button33}
          </button>
          <button type="button" className="trade-history-button6 button">
            {props.button32}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .trade-history-container {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            border-color: #232222;
            border-style: solid;
            border-width: 12px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
          }
          .trade-history-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: 4px;
            justify-content: space-between;
          }
          .trade-history-text {
            color: var(--dl-color-gray-black);
            width: 20%;
            font-size: 16px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text01 {
            color: var(--dl-color-gray-black);
            width: 20%;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text02 {
            color: var(--dl-color-gray-black);
            width: 20%;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text03 {
            color: var(--dl-color-gray-black);
            width: 20%;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-button {
            color: transparent;
            padding: 4px;
            align-self: center;
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            background-color: transparent;
          }
          .trade-history-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: 4px;
            justify-content: space-between;
            background-color: #232222;
          }
          .trade-history-text04 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text05 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text06 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text07 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-button1 {
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
          }
          .trade-history-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: 4px;
            justify-content: space-between;
            background-color: #232222;
          }
          .trade-history-text08 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text09 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text10 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text11 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-button2 {
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
          }
          .trade-history-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: 4px;
            justify-content: space-between;
            background-color: #232222;
          }
          .trade-history-text12 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text13 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text14 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-text15 {
            color: var(--dl-color-gray-white);
            width: 20%;
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
          }
          .trade-history-button3 {
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
          }
          .trade-history-container5 {
            flex: 0 0 auto;
            width: 100%;
            height: 40px;
            display: flex;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            margin-bottom: 4px;
            justify-content: center;
          }
          .trade-history-button4 {
            color: var(--dl-color-gray-white);
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-black);
          }
          .trade-history-button5 {
            color: var(--dl-color-gray-white);
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-black);
          }
          .trade-history-button6 {
            color: var(--dl-color-gray-white);
            padding: 4px;
            align-self: center;
            margin-right: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-black);
          }
          .trade-history-root-class-name {
            margin-top: var(--dl-space-space-halfunit);
          }
        `}
      </style>
    </>
  )
}

TradeHistory.defaultProps = {
  button3: '1',
  text: 'Date - Time',
  rootClassName: '',
  text21: '20.02.2024 - 17:16',
  button2: 'Explorer',
  button1: 'Explorer',
  text11: 'Direction',
  text112: 'Buy BTC',
  text111: 'Buy BTC',
  button: 'Explorer',
  text131: "0.04528 (2'500$)",
  text15: "0.04528 (2'500$)",
  text5: '20.02.2024 - 17:16',
  text114: 'Buy BTC',
  text1111: 'Buy BTC',
  text1221: "51'052",
  text124: "51'052",
  text141: "0.04528 (2'500$)",
  text12: 'Price',
  text1: 'Amount',
  text14: "0.04528 (2'500$)",
  text31: '20.02.2024 - 17:16',
  text16: "0.04528 (2'500$)",
  button31: 'Explorer',
  text122: "51'052",
  button33: '2',
  button5: 'Explorer',
  text3: '20.02.2024 - 17:16',
  text2: '20.02.2024 - 17:16',
  text123: "51'052",
  text13: "0.04528 (2'500$)",
  button32: '3',
  button4: 'Explorer',
  text121: "51'052",
  text4: '20.02.2024 - 17:16',
  text1121: 'Buy BTC',
  text113: 'Buy BTC',
  button11: 'Explorer',
  text1211: "51'052",
}

TradeHistory.propTypes = {
  button3: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text21: PropTypes.string,
  button2: PropTypes.string,
  button1: PropTypes.string,
  text11: PropTypes.string,
  text112: PropTypes.string,
  text111: PropTypes.string,
  button: PropTypes.string,
  text131: PropTypes.string,
  text15: PropTypes.string,
  text5: PropTypes.string,
  text114: PropTypes.string,
  text1111: PropTypes.string,
  text1221: PropTypes.string,
  text124: PropTypes.string,
  text141: PropTypes.string,
  text12: PropTypes.string,
  text1: PropTypes.string,
  text14: PropTypes.string,
  text31: PropTypes.string,
  text16: PropTypes.string,
  button31: PropTypes.string,
  text122: PropTypes.string,
  button33: PropTypes.string,
  button5: PropTypes.string,
  text3: PropTypes.string,
  text2: PropTypes.string,
  text123: PropTypes.string,
  text13: PropTypes.string,
  button32: PropTypes.string,
  button4: PropTypes.string,
  text121: PropTypes.string,
  text4: PropTypes.string,
  text1121: PropTypes.string,
  text113: PropTypes.string,
  button11: PropTypes.string,
  text1211: PropTypes.string,
}

export default TradeHistory
