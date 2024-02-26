import React from 'react'
import Head from 'next/head'

import Menue2 from '../components/menue2'
import BotInstanceData from '../components/bot-instance-data'
import BotInstanceSetUp from '../components/bot-instance-set-up'
import TradeHistory from '../components/trade-history'
import Footer from '../components/footer'

const Dashboard = (props) => {
  return (
    <>
      <div className="dashboard-container">
        <Head>
          <title>Dashboard - Definitive Buzzing Jay</title>
          <meta
            property="og:title"
            content="Dashboard - Definitive Buzzing Jay"
          />
        </Head>
        <Menue2 rootClassName="menue2-root-class-name3"></Menue2>
        <div className="dashboard-container1">
          <span className="dashboard-text">BTC - USDT | Bot #0193</span>
          <div className="dashboard-container2">
            <BotInstanceData rootClassName="bot-instance-data-root-class-name1"></BotInstanceData>
            <BotInstanceSetUp rootClassName="bot-instance-set-up-root-class-name1"></BotInstanceSetUp>
          </div>
          <TradeHistory rootClassName="trade-history-root-class-name"></TradeHistory>
        </div>
        <Footer rootClassName="footer-root-class-name5"></Footer>
      </div>
      <style jsx>
        {`
          .dashboard-container {
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
          .dashboard-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .dashboard-text {
            color: var(--dl-color-gray-white);
            width: 100%;
            font-size: 32px;
            font-style: normal;
            font-weight: 800;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: rgb(35, 34, 34);
          }
          .dashboard-container2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

export default Dashboard
