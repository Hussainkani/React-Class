import React, { useContext } from 'react'
import { context } from './GrandFather'


const Child = () => {

    const { message , handleAlert } = useContext(context)
  return (
    <div>
        <h2 className='text-black bg-red-400 p-5 mt-10'>Child : { message}</h2>
        <button className='bg-black text-white p-4 rounded-3xl' type='button' onClick={handleAlert}> Click Me </button>
    </div>
  )
}

export default Child