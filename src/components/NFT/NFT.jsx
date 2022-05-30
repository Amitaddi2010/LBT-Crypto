import React from 'react'
import './NFT.css'
import NFT1 from './../../imgs/Nfts/bighead-1.svg'
import NFT2 from './../../imgs/Nfts/bighead-2.svg'
import NFT3 from './../../imgs/Nfts/bighead-3.svg'
import NFT4 from './../../imgs/Nfts/bighead-4.svg'
import NFT5 from './../../imgs/Nfts/bighead-5.svg'
import NFT6 from './../../imgs/Nfts/bighead-6.svg'
import NFT7 from './../../imgs/Nfts/bighead-7.svg'
import NFT8 from './../../imgs/Nfts/bighead-8.svg'
import NFT9 from './../../imgs/Nfts/bighead-9.svg'
import NFT10 from './../../imgs/Nfts/bighead-10.svg'
 
export default function NFT() {
  return (
    <div id='NFT'>
        <h1 className="heading1"><span>Our</span>NFT</h1>
        
  <marquee direction = "left">
        <img className='svgNFT' src={NFT1} border= "1rem double #e8ea96" border-radius= "20%" height="250px" />
        <img className='svgNFT' src={NFT2} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT3} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT4} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT5} border= "1rem double #e8ea96" height="250px" />
        </marquee>
        <marquee direction = "right">
        <img className='svgNFT' src={NFT6} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT7} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT8} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT9} border= "1rem double #e8ea96" height="250px" />
        <img className='svgNFT' src={NFT10}border= "1rem double #e8ea96" height="250px" />
         
        </marquee>
    
    
    </div>
  )
}
