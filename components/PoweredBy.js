import graph from '../public/thegraph.png'
import ethereum from '../public/ethereum.png'


function PoweredBy() {
  return (
    <div className="powered-wrapper">
        <h2 className='text-center mb-5'>Powered by</h2>
        <div className='row'>
            <div className='col-4 text-center d-flex align-items-center flex-column justify-content-between'>
                <img src={graph.src} alt="The graph" width="100px"/>
                <p>The Graph</p>
            </div>
            <div className='col-4 text-center d-flex align-items-center flex-column justify-content-between'>
                <img className='gelato' src="https://www.gelato.network/logo.svg" alt="gelato" width="60px"/>
                <p>Gelato</p>
            </div>
            <div className='col-4 text-center d-flex align-items-center flex-column justify-content-between'>
                <img className='ethereum' src={ethereum.src} alt="Ethereum" width="100px"/>
                <p>Ethereum</p>
            </div>
        </div>
    </div>
  );
}

export default PoweredBy;
