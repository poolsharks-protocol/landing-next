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
      {props.isLoaded && <img alt="coin" src={w > 994 ? coin1.src : undefined} className="coin-one" />}
      <img alt="pipes" onLoad={()=> props.setIsLoaded(true)} src={pipe.src} className={`pipe`} />
      {props.isLoaded && <img alt="coin" src={w > 994 ? coin2.src : undefined} className="coin-two" />}
    </>
  );
}

export default Pipes;
