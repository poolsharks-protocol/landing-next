import pipe from "../public/pipe.webp";
import coin1 from "../public/coin1.png";
import coin2 from "../public/coin2.png";
import {useEffect, useState} from 'react'
import Image from "next/image";

function Pipes() {
  const [w, setW] = useState(0)  


  useEffect(() => {
    setW(window.innerWidth)
  },[])

  
  return (
    <>
      {w > 994 && <img alt="coin" src={coin1.src} className="coin-one" />}
      <div className={`pipe`}>
      <Image layout="fill" alt="pipes" src={pipe.src}  />
      </div>
      {w > 994 && <img alt="coin" src={coin2.src} className="coin-two" />}
    </>
  );
}

export default Pipes;
