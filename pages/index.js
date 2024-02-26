import React from 'react'
import Head from 'next/head'

import Menue from '../components/menue'
import Hero1 from '../components/hero1'
import Footer from '../components/footer'

const Home1 = (props) => {
  return (
    <>
      <div className="home1-container">
        <Head>
          <title>Definitive Buzzing Jay</title>
          <meta property="og:title" content="Definitive Buzzing Jay" />
        </Head>
        <Menue rootClassName="menue-root-class-name1"></Menue>
        <Hero1 rootClassName="hero1-root-class-name"></Hero1>
        <Footer rootClassName="footer-root-class-name1"></Footer>
      </div>
      <style jsx>
        {`
          .home1-container {
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

export default Home1
