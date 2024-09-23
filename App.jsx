import { useState } from 'react'

import './App.css'

function App() {
const [bmi, setBmi]= useState({})
const [ans, setAns]= useState(0)
const handleChange = (e)=>{
  setBmi({...bmi,[e.target.name]:e.target.value})
  setAns(bmi.weight/(bmi.height**2))

}
  return (
    <>
    <div>
      <input value={bmi.weight} onChange={handleChange} name='weight' placeholder='Enter Weight' type="number"/>
      <input value={bmi.height} onChange={handleChange} name='height' placeholder='Enter Height' type="number"/>
   
   <h1>Your BMI is {ans} </h1>
    </div>
    
    </>
  )
}

export default App
