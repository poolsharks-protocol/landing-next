import CoinVideo from './CoinVideo';

function CoinVideos({w}) {


  return (
    <>
      {w > 994 && <div className="coin-video">
        {/* FIRST VIDEO */}
         <CoinVideo 
          width={
            w > 1699 && '455' ||
            (w > 1545 && w < 1700) && '460' ||
            (w > 1398 && w < 1545) && '450' ||
            (w > 1200 && w < 1398) && '366' ||
            (w > 994 && w < 1198) && '316' ||
            w === 1200 && '330' 
        }
          height={
            w > 1699 && '231' ||
            (w > 1545 && w < 1700) && '233' ||
            (w > 1398 && w < 1545) && '230' ||
            (w > 1200 && w < 1398) && '186' ||
            (w > 994 && w < 1198) && '160' ||
            w === 1200 && '137'
          } 
          src="https://res.cloudinary.com/werwerwer/video/upload/v1643452281/firstvideo_fpcsur.mp4" class="first-video"/>}


        {/* SECOND VIDEO */}
        <CoinVideo 
          width={
            w > 1699 && '455' ||
            (w > 1545 && w < 1700) && '435' ||
            (w > 1398 && w < 1545) && '433' ||
            (w > 1200 && w < 1398) && '370' ||
            (w > 994 && w < 1198) && '296' ||
            w === 1200 && '411' 
          } 
          height={
            w > 1699 && '234' ||
            (w > 1545 && w < 1700) && '224' ||
            (w > 1398 && w < 1545) && '227' ||
            (w > 1200 && w < 1398) && '190' ||
            (w > 994 && w < 1198) && '149' ||
            w === 1200 && '139'
          } 
          src="https://res.cloudinary.com/werwerwer/video/upload/v1643452611/secondvideo_nmg54s.mp4" class="second-video" />
        
        
        {/* THIRD VIDEO */}
        <CoinVideo 
        width={
          w > 1699 && '457' ||
          (w > 1545 && w < 1700) && '435' ||
          (w > 1398 && w < 1545) && '430' ||
          (w > 1200 && w < 1398) && '366' ||
          (w > 994 && w < 1198) && '300' ||
          w === 1200 && '275' 
        } 
        height={
          w > 1699 && '230' ||
          (w > 1545 && w < 1700) && '224' ||
          (w > 1398 && w < 1545) && '225' ||
          (w > 1200 && w < 1398) && '186' ||
          (w > 994 && w < 1198) && '150' ||
          w === 1200 && '145'
        } 
        src="https://res.cloudinary.com/werwerwer/video/upload/v1643452608/thirdvideo_sgdp35.mp4" class="third-video" />


        {/* FOURTH VIDEO */}
        <CoinVideo 
        width={
          w > 1699 && '466' ||
          (w > 1545 && w < 1700) && '435' ||
          (w > 1398 && w < 1545) && '433' ||
          (w > 1200 && w < 1398) && '370' ||
          (w > 994 && w < 1198) && '296' ||
          w === 1200 && '274' 
        } 
        height={
          w > 1699 && '230' ||
          (w > 1545 && w < 1700) && '221' ||
          (w > 1398 && w < 1545) && '222' ||
          (w > 1200 && w < 1398) && '190' ||
          (w > 994 && w < 1198) && '149' ||
          w === 1200 && '153'
        }
        src="https://res.cloudinary.com/werwerwer/video/upload/v1643452600/fourthvideo_vozy4h.mp4" class="fourth-video" />

    </div>}
    </>
  );
}

export default CoinVideos;

