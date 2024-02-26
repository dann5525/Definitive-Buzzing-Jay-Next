import React from 'react'
import Head from 'next/head'

import Menue2 from '../components/menue2'
import Welcome from '../components/welcome'
import DeployContracts from '../components/deploy-contracts'
import Footer from '../components/footer'

const OnBoarding11 = (props) => {
  return (
    <>
      <div className="on-boarding11-container">
        <Head>
          <title>OnBoarding11 - Definitive Buzzing Jay</title>
          <meta
            property="og:title"
            content="OnBoarding11 - Definitive Buzzing Jay"
          />
        </Head>
        <Menue2 rootClassName="menue2-root-class-name1"></Menue2>
        <Welcome rootClassName="welcome-root-class-name5"></Welcome>
        <DeployContracts rootClassName="deploy-contracts-root-class-name"></DeployContracts>
        <Footer rootClassName="footer-root-class-name3"></Footer>
      </div>
      <style jsx>
        {`
          .on-boarding11-container {
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

export default OnBoarding11
