import React , {useContext} from 'react'
import { MediumContext } from '../context/MediumContext';

const Search = ({start , last , switch1}) => {

    const { setdes , setret  } = useContext(MediumContext)
    function hundleDep(e){
           setdes(e.target.value);
    }
    function hundleRet(e){
        setret(e.target.value);
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='journey ' >
                <h1 className='start' >Let the Journey begin</h1>
                <div className='search' >
                 
                    <div className='Air_flight '>
                        <p className='place' >From</p>
                        <input type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='DELHI' className='border-b-4 ' />
                    </div>
                    <div className='Air_flight '>
                        <p className='place' >To</p>
                        <input type="text" onChange={(e)=>{last(e.target.value)}} placeholder='MUMBAI' className='border-b-4 ' />
                    </div>
                    <div className='Air_flight '>
                        <p className='place' >Depart</p>
                        <input type="date" className='border-b-4 ' onChange={hundleDep} />
                    </div>
                    <div className='Air_flight '>
                        <p className='place' >Return</p>
                        <input type="date" className='border-b-4 ' onChange={hundleRet} />
                    </div>

                    <button className='searchflight ' onClick={switch1} >
                        SEARCH FLIGHTS
                    </button>
                 
                </div>
            </div>
        </div>
    )
}

export default Search