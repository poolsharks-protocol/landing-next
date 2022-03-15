import graph from '../public/thegraph.png'
import ethereum from '../public/ethereum.png'
import polywrap from '../public/polywrap.png'
import gelato from '../public/gelato.png'


function PoweredBy() {
  return (
    <div className="powered-wrapper mx-0 text-center">
        <h1 className='text-center mb-5 powered-label'>Powered By</h1>
        <div className='row px-0 mt-5'>
            <div className='col-6 col-md-3 text-center d-flex align-items-center flex-column justify-content-between'>
                <img src={graph.src} alt="The graph" width="100px"/>
                <p className='mt-3'>The Graph</p>
            </div>
            <div className='col-6 col-md-3 text-center d-flex align-items-center flex-column justify-content-between'>
                <img src={gelato.src} alt="gelato" width="100px"/>
                <p className='mt-3'>Gelato</p>
            </div>
            <div className='col-6 col-md-3 text-center d-flex align-items-center flex-column justify-content-between'>
                <img className='ethereum' src={ethereum.src} alt="Ethereum" width="100px"/>
                <p className='mt-3'>Ethereum</p>
            </div>
            <div className='col-6 col-md-3 text-center d-flex align-items-center flex-column justify-content-between'>
                <img className='ethereum' src={polywrap.src} alt="Polywrap" width="100px"/>
                <p className='mt-3'>Polywrap</p>
            </div>
        </div>
    </div>
  );
}

export default PoweredBy;
