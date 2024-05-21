import React from 'react'

const NftCard = (props) => {
  return (
    <div className='nftcard'>
        <div className='nftcard__image'>
            <img src={props.hero}/>
        </div>
        <div className='nftcard__text'>
            <div className='nftcard__text-heading'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            </div>
            <div className='nftcard__text-info'>
                <span className='nftcard__text-info-price'>
                    <img src={props.logo} alt='logo' />
                    <p>{props.price}</p>
                </span>
                <span className='nftcard__text-info-time'>
                    <img src={props.clock} alt='clock' />
                    <p>{props.time}</p>
                </span>
            </div>
        </div>
        <div className='nftcard__bottom'>
            <div className='nftcard__bottom_line'></div>
            <div className='nftcard__bottom_data'>
                <img src={props.avatar}/>
                <span>Creation of <p>{props.author}</p></span>
            </div>
        </div>
    </div>
  )
}

export default NftCard