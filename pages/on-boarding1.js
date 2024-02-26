import React from 'react'
import Head from 'next/head'

import Menue2 from '../components/menue2'
import Welcome from '../components/welcome'
import MMSetting from '../components/mm-setting'
import Footer from '../components/footer'

const OnBoarding1 = (props) => {
  return (
    <>
      <div className="on-boarding1-container">
        <Head>
          <title>OnBoarding1 - Definitive Buzzing Jay</title>
          <meta
            property="og:title"
            content="OnBoarding1 - Definitive Buzzing Jay"
          />
        </Head>
        <Menue2 rootClassName="menue2-root-class-name"></Menue2>
        <Welcome rootClassName="welcome-root-class-name4"></Welcome>
        <MMSetting rootClassName="mm-setting-root-class-name"></MMSetting>
        <Footer rootClassName="footer-root-class-name2"></Footer>
      </div>
      <style jsx>
        {`
          .on-boarding1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            background-image: linear-gradient(
              90deg,
              rgb(218, 221, 222) 1%,
              rgb(162, 176, 190) 98%
            );
          }
        `}
      </style>
    </>
  )
}

export default OnBoarding1
