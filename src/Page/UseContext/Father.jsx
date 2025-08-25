import React, { useContext } from 'react'
import Son from './Son'

const Father = () => {

   
  return (
    <div className='mt-10' >

        <h2 className='text-black bg-green-400 p-5 mt-10'>Father </h2>

        <Son  />
    </div>
  )
}

export default Father