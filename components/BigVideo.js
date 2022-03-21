import {useEffect, useState} from 'react'

function BigVideo() {
  const [w, setW] = useState(0)
    

    useEffect(() => {
      setW(window.innerWidth)
    },[])


  return (
    <>
      {w > 994 && <div className="video">
        {w > 1699 && <iframe  width="1166" height="659" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ" title="YouTube video player" frameBorder="0" allow=" autoplay;" ></iframe>}
        {w > 1399 && w < 1700 && <iframe  width="1140" height="641" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ" title="YouTube video player" frameBorder="0" allow=" autoplay;" ></iframe>}
        {w > 1200 && w < 1400 && <iframe width="1149" height="649" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>}
        {w > 994 && w < 1199 && <iframe width="736" height="416" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>}
        {w == 1200 && <iframe width="695" height="388" src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>}
      </div>}
    </>
  );
}

export default BigVideo;
