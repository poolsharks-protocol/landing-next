import { useEffect, useState } from 'react';
import CoinVideo from './CoinVideo';

function CoinVideos() {
  const [w, setW] = useState(0)
    

    useEffect(() => {
      setW(window.innerWidth)
    },[])

  return (
    <>
      {w > 994 && <div className="coin-video">
        {/* FIRST VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="428" height="342"/>}
        {w > 1545 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="426" height="240"/>}
        {w > 1398 && w < 1545 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="450" height="230"/>}
        {w > 1200 && w < 1398 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="366" height="186"/>}
        {w > 994 && w < 1198 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="316" height="160"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="330" height="137"/>}

        {/* SECOND VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="455" height="234"/>}
        {w > 1545 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="435" height="224"/>}
        {w > 1398 && w < 1545 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="433" height="229"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="370" height="190"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="296" height="149"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="411" height="139"/>}
        
        {/* THIRD VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="457" height="234"/>}
        {w > 1545 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="435" height="224"/>}
        {w > 1398 && w < 1545 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="430" height="230"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="366" height="186"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="316" height="160"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="275" height="145"/>}

        {/* FOURTH VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="466" height="230"/>}
        {w > 1545 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="435" height="224"/>}
        {w > 1398 && w < 1545 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="433" height="225"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="370" height="190"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="296" height="149"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="274" height="153"/>}
    </div>}
    </>
  );
}

export default CoinVideos;
