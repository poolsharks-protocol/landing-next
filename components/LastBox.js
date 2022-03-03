import {useEffect, useState} from 'react'

function LastBox() {
  const [w, setW] = useState(0)
    

    useEffect(() => {
      setW(window.innerWidth)
    },[])

  return (
    <div className="center-box">
      <div className="col-lg-8 col-sm-12 ">
        <p className="box-label sm-label-two">Reduced Operating Costs <br/><span className='white-txt'>for DAOs and Protocols.</span></p>
        <div className=" mt-3 box-text">
        Forward operations to PoolSharks in order to better manage and reduce upkeep costs 
        for standard operations like treasury management and autocompounding.
        </div>
    </div>
    </div>
  );
}

export default LastBox;
