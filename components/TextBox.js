import CoinVideo from "./CoinVideo";

function TextBox() {

  return (
    <div className="first-box">
      <div className=" col-lg-8 col-sm-12">
        <p className="box-label sm-label">
          Welcome to the Oceanbook <br />
          <span className="white-txt">A New Breed of Orderbook</span>
        </p>
        <div className="mt-5 d-block d-lg-none">
        <CoinVideo  height="150px" src="https://res.cloudinary.com/werwerwer/video/upload/v1656942251/firstVideo_rmt6db.mp4" />
        </div>
        <div className="box-text mt-5 first-text">
          <p>
          Oceanbook is a permissionless queued order book protocol.
          </p>
          <p>
          Save your spot in the queue for eventual on-chain execution.
          </p>
          <p>
          Optimize your speed to be near the front of the order queue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
