import CoinVideo from "./CoinVideo";

function ThirdBox() {

  return (
    <div className="left-box">
      <div className="col-lg-9 col-sm-12" >
        <p className="box-label sm-label">Perform Trading Analytics<br/>
        <span className="white-txt">Powered By On-Chain Oracles</span>
        </p>
        <div className="mt-5 d-block d-lg-none">
        <CoinVideo  height="150px" src="https://res.cloudinary.com/werwerwer/video/upload/v1656942633/thirdVideo_rofnia.mp4" />
        </div>
        <div className="box-text mt-5 third-text">
        <p>All PoolSharks Books have the ability to enable oracles, unlocking</p>
        <p>the ability for other on-chain users and protocols to utilize this data.</p>
        <p>Leverage TWAP prices based on the needs of your protocol or firm.</p>
        </div>
    </div>
    </div>
  );
}

export default ThirdBox;
