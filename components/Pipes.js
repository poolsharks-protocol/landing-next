import pipe from "../public/pipe.webp";
import coin1 from "../public/coin1.png";
import coin2 from "../public/coin2.svg";
import {useEffect, useState} from 'react'
import Image from "next/image";

function Pipes(props) {
  const [w, setW] = useState(0)  


  useEffect(() => {
    setW(window.innerWidth)
  },[])

  const loadedState = () => {
    props.setIsLoaded(true)
  }



  return (
    <>
      {props.isLoaded && w > 994 && <img alt="coin" src={coin1.src} className="coin-one" />}
      <div className={`pipe`}>
      <Image layout="fill" alt="pipes" onLoad={loadedState} height={1000} width={1000} src={pipe.src}  />
      </div>
      {props.isLoaded && w > 994 && <img alt="coin" src={coin2.src} className="coin-two" />}
    </>
  );
}

export default Pipes;
