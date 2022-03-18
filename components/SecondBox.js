import {useEffect, useState} from 'react'

function SecondBox() {
  const [w, setW] = useState(0)
    

    useEffect(() => {
      setW(window.innerWidth)
    },[])

  return (
      <div className="right-box">
      <div className="col-lg-9 col-sm-12 ">
        <p className= "sm-label-two box-label "><span className='white-txt'>Perform Swaps and Transfers</span> <br/> at a fraction of the cost.</p>
        <div className="box-text mt-5 second-text">
        Operate the "magic hand of DeFi" and save on swaps by grouping with other users.
       Automate your buy and sell levels over time to take profit from your invesments.
        </div>
    </div>
    </div>
  );
}

export default SecondBox;
