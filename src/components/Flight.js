import React from 'react'
import '../styles/Style.css'

const Flight = ({plane}) => {
    return (
        <div className='flight_details ' >
            <div className='flight_post'>
                <p className='airline_name' >Airline Name</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
            <div className='flight_post'>
                <p className='plane_from' >From</p>
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
                <p className='plane_to' >To</p>
                <p className='text-lg ' >{plane.to}</p>
            </div>
            <div className='flight_post'>
                <p className='depart_date ' >Depart</p>
                <p className='text-lg ' >{plane.departure.departureDate}</p>
            </div>
            <div className='flight_post'>
                <p className='plane_name' >Flight Brand</p>
                <p className='text-lg ' >{plane.airlineName}</p>
            </div>
        </div>
    )
}

export default Flight