




var CoinVideo = function(props) {
    return (
        <div className={props.class} dangerouslySetInnerHTML={{ __html: `
         <video
           loop
           muted
           autoplay
           playsinline
           src="${props.src}"
           width="${props.width}"
           height="${props.height}"
           className=${props.class}
         />,
       ` }}></div>
    )
 }

 export default CoinVideo