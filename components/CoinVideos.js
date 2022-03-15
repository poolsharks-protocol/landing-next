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
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="460" height="231"/>}
        {w > 1399 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="381" height="217"/>}
        {w > 1200 && w < 1398 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="373" height="166"/>}
        {w > 994 && w < 1198 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="367" height="120"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="330" height="137"/>}

        {/* SECOND VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="455" height="234"/>}
        {w > 1399 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="465" height="194"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="503" height="167"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="440" height="119"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="411" height="139"/>}
        
        {/* THIRD VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="457" height="234"/>}
        {w > 1399 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="383" height="196"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="349" height="166"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="295" height="120"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="275" height="145"/>}

        {/* FOURTH VIDEO */}
        {w > 1699 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="466" height="230"/>}
        {w > 1399 && w < 1700 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="382" height="194"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="352" height="165"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="236" height="150"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="274" height="153"/>}
    </div>}
    </>
  );
}

export default CoinVideos;
