function BigVideo({ w }) {
  return (
    <>
      {w > 994 && (
        <div className="video">
          <iframe
            width={
              w > 1699 && '1166' ||
              (w > 1399 && w < 1700) && '1140' ||
              (w > 1200 && w < 1400) && '1149' ||
              (w > 994 && w < 1199) && '736'   ||
              w === 1200 && '695'

          }
            height={
              w > 1699 && '659' ||
              (w > 1399 && w < 1700) && '641' ||
              (w > 1200 && w < 1400) && '649' ||
              (w > 994 && w < 1199) && '416'  ||
              w === 1200 && '388'
          }


            src="https://www.youtube.com/embed/BMsyssBXRsQ?autoplay=1&mute=1&showinfo=0&controls=0&loop=1&playlist=BMsyssBXRsQ"
            title="YouTube video player"
            frameBorder="0"
            allow=" autoplay;"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default BigVideo;

