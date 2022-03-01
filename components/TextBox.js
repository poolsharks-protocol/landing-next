import { useEffect, useState } from "react";

function TextBox() {
  const [w, setW] = useState(0);

  useEffect(() => {
    setW(window.innerWidth);
  }, []);

  return (
    <div className="first-box">
      <div className="col-lg-8 col-sm-12 ">
        <p className="box-label sm-label">
          {w > 995 && "Welcome to DeFi 3.0"} <br />{" "}
          <span className="white-txt">Smart Contract Automation</span>
        </p>
        <div className="box-text mt-5">
          <p>
            Time to level the playing field for DeFi users. PoolSharks provides
            access to the power of the Ethereum DeFi ecosystem without
            limitations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextBox;
