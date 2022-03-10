import pipe from "../public/pipe.svg";
import coin1 from "../public/coin1.png";
import coin2 from "../public/coin2.svg";
import {useEffect, useState} from 'react'

function Pipes(props) {
  const [w, setW] = useState(0)  


  useEffect(() => {
    setW(window.innerWidth)
  },[])



  return (
    <>
      {props.isLoaded && w > 994 && <img alt="coin" src={coin1.src} className="coin-one" />}
      <img alt="pipes" onLoad={()=> props.setIsLoaded(true)} src={pipe.src} className={`pipe`} />
      {props.isLoaded && w > 994 && <img alt="coin" src={coin2.src} className="coin-two" />}
    </>
  );
}

export default Pipes;
