import React from 'react'

import PropTypes from 'prop-types'

const MMSetting = (props) => {
  return (
    <>
      <div className={`mm-setting-container ${props.rootClassName} `}>
        <div className="mm-setting-container1">
          <h1 className="mm-setting-text">Market Maker Settings:</h1>
          <div className="mm-setting-container-userprofile">
            <div className="mm-setting-container-name">
              <span className="mm-setting-text1">Exchange:</span>
              <select className="mm-setting-select-exchange">
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
            <div className="mm-setting-container-e-mail">
              <span className="mm-setting-text2">Trading Pair:</span>
              <select className="mm-setting-select-trading-pair">
                <option value="Option 1" selected>
                  Option 1
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="mm-setting-container-telegram">
              <span className="mm-setting-text3">Base Strategy:</span>
              <select className="mm-setting-select-strategy">
                <option value="Option 1" selected>
                  Option 1
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="mm-setting-container-next">
              <button type="button" className="mm-setting-button button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .mm-setting-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .mm-setting-container1 {
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mm-setting-text {
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .mm-setting-container-userprofile {
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
            padding-bottom: 8px;
            justify-content: flex-start;
          }
          .mm-setting-container-name {
            flex: 0 0 auto;
            width: 620px;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .mm-setting-text1 {
            font-size: 32px;
            padding-right: 0px;
          }
          .mm-setting-select-exchange {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .mm-setting-container-e-mail {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .mm-setting-text2 {
            width: auto;
            font-size: 32px;
            margin-bottom: var(--dl-space-space-halfunit);
            padding-right: 0px;
          }
          .mm-setting-select-trading-pair {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .mm-setting-container-telegram {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
            justify-content: space-between;
          }
          .mm-setting-text3 {
            width: auto;
            font-size: 32px;
            margin-top: 0px;
            padding-right: 0px;
          }
          .mm-setting-select-strategy {
            color: var(--dl-color-gray-white);
            width: var(--dl-size-size-xxlarge);
            height: 36px;
            font-size: 24px;
            border-radius: var(--dl-radius-radius-radius4);
            background-color: #232222;
          }
          .mm-setting-container-next {
            flex: 0 0 auto;
            width: 620px;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .mm-setting-button {
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

MMSetting.defaultProps = {
  rootClassName: '',
}

MMSetting.propTypes = {
  rootClassName: PropTypes.string,
}

export default MMSetting
