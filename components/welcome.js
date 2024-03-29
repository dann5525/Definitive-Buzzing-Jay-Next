import React from 'react'

import PropTypes from 'prop-types'

const Welcome = (props) => {
  return (
    <>
      <div className={`welcome-container ${props.rootClassName} `}>
        <h1 className="welcome-text">{props.heading}</h1>
      </div>
      <style jsx>
        {`
          .welcome-container {
            width: 100%;
            height: var(--dl-size-size-xxlarge);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .welcome-text {
            width: 815px;
            font-size: 48px;
            text-align: center;
            margin-bottom: 0px;
          }
        `}
      </style>
    </>
  )
}

Welcome.defaultProps = {
  heading: 'Welcome to Levitas, your Automated Trading Tool',
  rootClassName: '',
}

Welcome.propTypes = {
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Welcome
