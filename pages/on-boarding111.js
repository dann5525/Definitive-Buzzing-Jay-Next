import React from 'react'
import Head from 'next/head'

import Menue2 from '../components/menue2'
import Welcome from '../components/welcome'
import TransferFunds from '../components/transfer-funds'
import Footer from '../components/footer'

const OnBoarding111 = (props) => {
  return (
    <>
      <div className="on-boarding111-container">
        <Head>
          <title>OnBoarding111 - Definitive Buzzing Jay</title>
          <meta
            property="og:title"
            content="OnBoarding111 - Definitive Buzzing Jay"
          />
        </Head>
        <Menue2 rootClassName="menue2-root-class-name2"></Menue2>
        <Welcome rootClassName="welcome-root-class-name6"></Welcome>
        <TransferFunds rootClassName="transfer-funds-root-class-name1"></TransferFunds>
        <Footer rootClassName="footer-root-class-name4"></Footer>
      </div>
      <style jsx>
        {`
          .on-boarding111-container {
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

export default OnBoarding111
