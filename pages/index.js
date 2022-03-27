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
import Links from "../components/Links";

export default function Home() {
  const [w, setW] = useState(0);
  
  setInterval(() => {
    if(window && (w !== window.innerWidth)) {
      setW(window.innerWidth)
    }
  }, 1000);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | PoolSharks Protocol</title>
        <meta name="description" content="The Next Wave of DeFi Exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="wholeapp">
        <div className="container-fluid">
          <Links />
          <Header />
          <PoweredBy />
          <div className="container big-margin"></div>
          <div className="container">
            <div className="pipe-box ">
              <TextBox />
              <Pipes w={w}/>
              <BigVideo w={w}/>
              <CoinVideos w={w}/>
              <SecondBox />
              <ThirdBox />
              <LastBox />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
