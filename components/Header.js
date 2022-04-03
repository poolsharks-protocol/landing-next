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



    {/* <svg className="burger-menu" width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1263_633)">
              <rect width="45.5" height="35" rx="10.5" fill="black"/>
              <path d="M7.00049 28H38.5005V24.5H7.00049V28ZM7.00049 19.25H38.5005V15.75H7.00049V19.25ZM7.00049 7V10.5H38.5005V7H7.00049Z" fill="url(#paint0_linear_1263_633)"/>
            </g>
            <defs>
              <linearGradient id="paint0_linear_1263_633" x1="23" y1="7" x2="23" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0.0273358" stopColor="#C18FFF"/>
                <stop offset="0.510949" stopColor="#0CB6FF"/>
                <stop offset="1" stopColor="#27F09E"/>
              </linearGradient>
              <clipPath id="clip0_1263_633">
                <rect width="45.5" height="35" fill="white"/>
              </clipPath>
            </defs>
    </svg> */}


  </div>
  );
}

export default Header;
