import graph from '../public/thegraph.png'
import ethereum from '../public/ethereum.png'
import polywrap from '../public/polywrap.png'
import gelato from '../public/gelato.png'
import { useInViewport } from 'react-in-viewport'
import {useRef} from 'react'

function PoweredBy() {
    const myRef = useRef();
    const {
      inViewport,
      enterCount,
      leaveCount,
    } = useInViewport(
      myRef,
      
    );
  return (
        <div ref={myRef} className="powered-wrapper mx-0 text-center">
        {(inViewport || enterCount >= 1) && 
        <>
        <h1 className='text-center mb-5 powered-label'>Powered By</h1>
        <div className='row mt-5'>
        <div className='col-12 col-md-6 col-xl-6 col-xxl-3 mt-5'>
                <div className='powered-item'>
                    <img className='powered-icon' src={ethereum.src} alt="Ethereum" width="100px"/>
                    <p className='mt-3 powered-headline'>Ethereum</p>
                    <p className='mt-3 powered-txt'>A decentralized, open-source blockchain centered around digital 
                    agreements for a trustless world, otherwise known as smart contracts.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-6 col-xxl-3 mt-5'>
                <div className='powered-item'>
                    <img className='powered-icon' src={graph.src} alt="The graph" width="100px"/>
                    <p className='mt-3 powered-headline'>The Graph</p>
                    <p className='mt-3 powered-txt'>An indexing protocol for querying on-chain events on networks like Ethereum, 
                    making open decentralized data possible.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-6 col-xxl-3 mt-5'>
                <div className='powered-item'>
                    <img className='powered-icon' src={polywrap.src} alt="Polywrap" width="100px"/>
                    <p className='mt-3 powered-headline'>Polywrap</p>
                    <p className='mt-3 powered-txt'>Easy integration of web3 protocols into any application. 
                    Read and write data to web3 protocols from any network with any language.</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-6 col-xxl-3 mt-5'>
                <div className='powered-item'>
                    <img className='powered-icon' src={gelato.src} alt="gelato" width="100px"/>
                    <p className='mt-3 powered-headline'>Gelato</p>
                    <p className='mt-3 powered-txt'>Leverage the power of a decentralized network of
                     bots to fully automate smart contracts. </p>
                </div>
            </div>
        </div>
        </>
        }
    </div>
  );
}

export default PoweredBy;
