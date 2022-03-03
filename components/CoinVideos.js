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
        {w > 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="400" height="198"/>}
        {w > 1200 && w < 1398 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="361" height="161"/>}
        {w > 994 && w < 1198 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="417" height="147"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video" width="330" height="137"/>}

        {/* SECOND VIDEO */}
        {w > 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="394" height="200"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="490" height="162"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="444" height="149"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" width="411" height="139"/>}
        
        {/* THIRD VIDEO */}
        {w > 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="400" height="198"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="341" height="163"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="295" height="160"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" width="275" height="145"/>}

        {/* FOURTH VIDEO */}
        {w > 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="400" height="198"/>}
        {w > 1200 && w < 1399 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="338" height="163"/>}
        {w > 994 && w < 1199 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="293" height="153"/>}
        {w == 1200 && <CoinVideo src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" width="274" height="153"/>}
    </div>}
    </>
  );
}

export default CoinVideos;
