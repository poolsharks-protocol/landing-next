import pipe from "../public/pipe.png";
import coin1 from "../public/coin1.png";
import coin2 from "../public/coin2.png";
import Image from "next/image";

function Pipes({w}) {

  return (
    <>
      {w > 994 && <img alt="coin" src={coin1.src} className="coin-one" />}
      <div className={`pipe`}>
      <Image quality={100} layout="fill" alt="pipes" src={pipe.src}  />
      </div>
      {w > 994 && <img alt="coin" src={coin2.src} className="coin-two" />}
    </>
  );
}

export default Pipes;
