import React from 'react'
import './NftCard.css'
import { images } from '../../constants'

const NftCard = ( {title, desc, price, time, author, img: {hero, logo, clock, avatar}}) => {
  return (
    <div className='nftcard'>
        <div className='nftcard__image flex__center'>
            <div className='nftcard__image_overlay flex__center'>
                <img src={images.view} alt="eye" />
            </div>
            <img src={hero}/>
        </div>
        <div className='nftcard__text'>
            <div className='nftcard__text-heading'>
            <h1>{title}</h1>
            <p>{desc}</p>
            </div>
            <div className='nftcard__text-info'>
                <span className='nftcard__text-info-price'>
                    <img src={logo} alt='logo' />
                    <p>{price}</p>
                </span>
                <span className='nftcard__text-info-time'>
                    <img src={clock} alt='clock' />
                    <p>{time}</p>
                </span>
            </div>
        </div>
        <div className='nftcard__bottom'>
            <div className='nftcard__bottom_line'></div>
            <div className='nftcard__bottom_data'>
                <img src={avatar}/>
                <span>Creation of <p>{author}</p></span>
            </div>
        </div>
    </div>
  )
}

export default NftCard