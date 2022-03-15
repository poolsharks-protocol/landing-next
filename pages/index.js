import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import TextBox from "../components/TextBox";
import SecondBox from "../components/SecondBox";
import ThirdBox from "../components/ThirdBox";
import LastBox from "../components/LastBox";
import CoinVideos from "../components/CoinVideos";
import BigVideo from "../components/BigVideo";
import Pipes from "../components/Pipes";
import Footer from "../components/Footer";
import { useState } from "react";
import PoweredBy from "../components/PoweredBy";

export default function Home() {
  const [w, setW] = useState(0)  
  const [isLoaded, setIsLoaded] = useState(true)
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(true)

  useEffect(() => {
    setW(window.innerWidth)
  },[])

  useEffect(() => {
    setIsLoaded(w < 995 ? true : false)
    setIsHeaderLoaded(w < 995 ? true : false)
  },[w])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Poolsharks protocol</title>
        <meta name="description" content="Smart Contract Automation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

            {!isHeaderLoaded && 
            <div className="vibrate-1">
              <h1 className="text-center">Loading...</h1>
            </div>
            }
      <div className="wholeapp">
        <div className="container-fluid">
        {isLoaded &&  <Header setIsHeaderLoaded={setIsHeaderLoaded}/>}
        <PoweredBy />
          <div className="container big-margin"></div>
          <div className="container">
            {isLoaded && <TextBox />}
            <div className="pipe-box ">
              <Pipes isLoaded={isLoaded} setIsLoaded={setIsLoaded}/>
              {isLoaded &&
              <>
              <BigVideo />
              <CoinVideos />
              <SecondBox />
              <ThirdBox />
              <LastBox />
              </>
              }
            </div>
          </div>
        </div>
        {isLoaded && <Footer />}
      </div>
    </div>
  );
}
