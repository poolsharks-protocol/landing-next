import CoinVideo from "./CoinVideo";

function SecondBox() {

  return (
      <div className="right-box">
      <div className="col-lg-9 col-sm-12 ">
        <p className= "sm-label-two box-label "><span className='white-txt'>Instant Yield Generation</span><br/>Upon Trade Execution.</p>
        <div className="mt-5 d-block d-lg-none">
        <CoinVideo  height="150px" src="https://res.cloudinary.com/werwerwer/video/upload/v1656942633/thirdVideo_rofnia.mp4" />
        </div>
        <div className="box-text mt-5 second-text">
          <p>When trades are matched on OceanBook, makers receive</p>
          <p>direct and instant yield. The front of the queue will be able</p>
          <p>to claim their yield first with truly trustless FIFO ordering.</p>
        </div>
    </div>
    </div>
  );
}

export default SecondBox;
