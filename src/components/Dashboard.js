import React, { useState} from 'react'
// import backg from './air.jpg'
import Search from './Search'
import Available from './Available'
import Detail from './Detail'

const Dashboard = () => {


  const [OpenModal, setOpenModal] = useState(false)
  const [From, setFrom] = useState('')
  const [Last, setLast] = useState('')

  return (
    <div className='dashboard'>
        <div className='flex items-center justify-center  h-screen flex-col justify-evenly' >
        <Search start={setFrom} last={setLast} switch1={() => setOpenModal(true)} />
        <Available/>
        </div>
        {OpenModal && <Detail start={From} Last={Last} switch={() => setOpenModal(false)} />} 

    </div>
  )
}

export default Dashboard

