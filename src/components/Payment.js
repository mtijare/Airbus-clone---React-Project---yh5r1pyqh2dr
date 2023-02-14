import React , {useContext} from 'react'
import {MediumContext} from '../context/MediumContext'

const Payment = ({data}) => {

    const { des , ret  } = useContext(MediumContext)
    localStorage.setItem("from",data.from)
    localStorage.setItem("to",data.to)
    localStorage.setItem("duration",data.duration)
    localStorage.setItem("airlineName",data.airlineName)
    localStorage.setItem("departureTime",data.departure.departureTime)
    localStorage.setItem("returnTime",data.return.returnTime)
    localStorage.setItem("price",data.price)

    const flightFrom = localStorage.getItem("from")
    const flightto = localStorage.getItem("to")
    const flightduration = localStorage.getItem("duration")
    const flightairLine= localStorage.getItem("airlineName")
    const flightdepartureTime = localStorage.getItem("departureTime")
    const flightreturnTime = localStorage.getItem("returnTime")
    const flightprice = localStorage.getItem("price")
    

    return (
        <div className='payment' >
            <div className='Ticket_details ' >
                <h1 className='Ticket' >Ticket Detail</h1>
                <div className='flex justify-evenly border-b-4 bg-amber-400 text-white' >
                    <div className='text-6xl font-medium place-self-center' >{flightFrom}</div>
                    <div className='flex flex-col' >
                        <img
                            src="https://media0.giphy.com/media/hVxJUqWXVrCGTDpnVU/giphy.gif?cid=790b761144290eb0b81c365ba65adaefbd0a829c4da1fd76&rid=giphy.gif"
                            alt="logo"
                            width={130}
                            height={80}
                        />
                    </div>
                    <div className='text-6xl font-medium place-self-center' >{flightto}</div>
                </div>
                <div className='flex flex-col justify-center items-center border-b-1' >
                            <h1 className='text-xl my-1' ><span className='text-xl'>Duration: </span> {flightduration} </h1>
                            <h1 className='text-xl my-1' ><span className='text-xl'>Airplane Name: </span>{flightairLine}</h1>
                </div>
                <div className='flex justify-around items-center p-2 mt-5' >
                    <div className='mr-5 flex flex-col items-center' >
                        <div className='Ticket_details'>
                            <h1 className='text-3xl  font-lg' >Departure</h1>
                            <p className='text-xl' ><span>Date: </span>{des}</p>
                            <p className='text-xl' ><span>Time: </span>{flightdepartureTime}</p>
                        </div>
                        <div className='Ticket_details'>
                            <h1 className='text-3xl font-lg' >Return</h1>
                            <p className='text-xl' ><span>Date: </span> {ret}</p>
                            <p className='text-xl' ><span>Time: </span> {flightreturnTime}</p>
                        </div>
                    </div>
                    <div className='ml-5' >
                            <div className='Ticket_details' >
                                <h1 className='text-5xl mb-3 ' >Fare Summary</h1>
                                <div className='border-b-1 mb-3' >
                                    <h1 className='text-xl' ><span className='text-2xl'>Flight Price: </span>Rs. {flightprice}</h1>
                                    <h1 className='text-xl' ><span className='text-2xl'>Extra Charge: </span>Rs. 500</h1>
                                </div>
                                <h1 className='text-xl border-b-2 border-t-2 ' ><span className='text-2xl'>Total </span>Rs. {parseInt(flightprice) + 500}</h1>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment