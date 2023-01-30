import React, {useEffect , useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import {MediumContext} from '../context/MediumContext'


const Detail = (props) => {

  const [data , setdata] = useState([]);
  useEffect(() => {
    async function GetData(){
      const Fromtr = props.start.charAt(0).toUpperCase() + props.start.slice(1).toLowerCase()
      const Totr = props.Last.charAt(0).toUpperCase() + props.Last.slice(1).toLowerCase() 
     
      await fetch(`https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${Fromtr}&to=${Totr}`)
           .then(res => res.json())
           .then(ele => {
                     setdata(ele)
                    })
    }
    GetData() ;
  }, [])
  const { setst  } = useContext(MediumContext)
  function hundle(){
    setst(data[0])
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">

            {
                data.length > 0 
                 ?(
                    <div className='price'>
                        <div className='flex justify-evenly border-b-4 bg-amber-400 text-white' >
                           <div className='text-3xl font-medium place-self-center' >{data[0].from}</div>
                           <div className='flex flex-col' >
                            <h2 className='text-base my-2' >{data[0].duration}</h2>
                            <img 
                               src="https://download.logo.wine/logo/Airbus/Airbus-Logo.wine.png" 
                               alt="logo" 
                                width={100}
                                height={50}
                               />
                           </div> 
                           <div className='text-3xl font-medium place-self-center' >{data[0].to}</div>
                        </div>
                        <div className='flex justify-around items-center py-2'>
                           <div className='flex flex-col justify-center content-around border-r-1 ' >
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Departure Time : </span>{data[0].departure.departureTime}</h2>
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Return Time : </span>{data[0].return.returnTime}</h2>
                              <h2 className='border-b-2 text-base my-1 '><span className='font-lg' >Airplane Name : </span>{data[0].airlineName}</h2>
                           </div>
                           <div className='flex flex-col justify-center items-center border-l-1'>
                            <h1 className='text-xl my-2' ><span className='font-xl'>PRICE : </span>{data[0].price}</h1>
                           <Link to='/checkout' ><button onClick={hundle} className="checkout">
                              Checkout
                            </button></Link>
                           </div>
                        </div>
                    </div> 
                 )
                 :
                 <div className='no_flight'>No Flight For Given Filter</div>
            }

            <div className="Cancle">
              <button type="button"
                className="cancle_button"
                onClick={props.switch}
              >Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail

// onClick={props.switch} 