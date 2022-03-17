import { useEffect, useState } from "react";

function TextBox() {
  const [w, setW] = useState(0);

  useEffect(() => {
    setW(window.innerWidth);
  }, []);

  return (
    <div className="first-box">
      <div className=" col-lg-8 col-sm-12">
        <p className="box-label sm-label">
          Welcome to the Oceanbook <br />
          <span className="white-txt">A New Breed of Orderbook</span>
        </p>
        <div className="box-text mt-5">
          <p>
          Oceanbook provides an order-matching system for everyone.
          
          Interact with off-chain market makers on-chain in a fully trustless way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
