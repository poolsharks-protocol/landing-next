import {useEffect, useState} from 'react'

function ThirdBox() {
  const [w, setW] = useState(0)
    

    useEffect(() => {
      setW(window.innerWidth)
    },[])

  return (
    <div className="left-box">
      <div className="col-lg-8 col-sm-12" >
        <p className="box-label sm-label">Roam the Open DeFi Waters</p>
        <div className="box-text mt-5">
        Deposit your managed assets in a staking or yield farming contract to have the greatest 
        advantage against the market and convert to a more preferred asset once your reward threshold 
        is met.
        </div>
    </div>
    </div>
  );
}

export default ThirdBox;
