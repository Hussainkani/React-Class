import React, { createContext } from 'react'
import Father from './Father'

export const context = createContext(null)

const GrandFather = () => {
const message = "Hi Grand Child"

const messageTwo = "Hi Son"

const handleAlert = () => {

    alert("This is useContext")
}


const handleAlertTwo = () => {
    alert("Welcome son")
}
  return (
    <div className=' mt-10'>

        <h2  className='text-black bg-amber-400 p-5 mt-10'>GrandFather</h2>

        <context.Provider value={{ message , handleAlert , messageTwo , handleAlertTwo }}>
            <Father /> 
        </context.Provider>
    
    
    </div>
  )
}

export default GrandFather