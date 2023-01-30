import React from 'react'
import '../styles/Style.css'

const Flight = ({plane}) => {
    return (
        <div className='flight_details ' >
            <div className='flight_post'>
                <p className='place-self-start text-slate-400 text-sm ' >Airline Name</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
            <div className='flight_post'>
                <p className='place-self-start text-slate-400 text-sm ' >From</p>
                <p className='text-lg ' >{plane.from}</p>
            </div>
            <div className='flight_post' >
                <img 
                    src="https://media2.giphy.com/media/iCEPetKVHKDOVOzMSi/giphy.gif?cid=ecf05e476g9lt4kweigpdc7b50oj7s4heyqcb0cxpnlquu7a&rid=giphy.gif" 
                    alt="light"
                    width={100}
                    height={70} 
                 />
            </div>
            <div className='flight_post'>
                <p className='place-self-start text-slate-400 text-sm ' >To</p>
                <p className='text-lg ' >{plane.to}</p>
            </div>
            <div className='flight_post'>
                <p className='place-self-start text-slate-400 text-sm ' >Depart</p>
                <p className='text-lg ' >{plane.departure.departureDate}</p>
            </div>
            <div className='flight_post'>
                <p className='place-self-start text-slate-400 text-sm ' >Flight Brand</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
        </div>
    )
}

export default Flight