import gradientText from '../public/gradient-text.png'
import logo from '../public/logo.png'
import shark from '../public/shark.png'
import lines from '../public/hero-bg.png'
import coin1 from '../public/coin1.png'
import coin2 from '../public/coin2.png'
import coin3 from '../public/coin3.png'

function Header() {


  return (
  <div className='header'>
      <div className="row">
        <div className="col-12 col-lg-4 d-flex align-items-end flex-column">
          <div className="cta-wrapper pe-xxl-4 pt-5 me-xxl-5">
            <img alt="logo" src={logo.src} className="logo d-block d-md-none"/>
            <img alt="Poolsharks" src={gradientText.src} className="poolshark-name" />
            <button onClick={() =>window.open("https://poolsharks-protocol.github.io/DCEX-Docs/", '_blank')} 
              className="cta mt-5">VIEW DOCS</button>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="shark">
            <img alt="shark"  src={shark.src} className="shark-img" />
          </div>
        </div>
        <div className="col-lg-2 mt-5 coins-wrapper">
          <img alt="coins" src={coin3.src} className="coins coin1"/>
          <img alt="coins" src={coin2.src} className="coins coin2"/>
          <img alt="coins" src={coin1.src} className="coins coin3"/>
        </div>
      </div>
    <img alt="lines" src={lines.src} className="lines" />
  </div>
  );
}

export default Header;
