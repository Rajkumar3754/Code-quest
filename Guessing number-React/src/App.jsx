import { useState } from "react"
import Result from "./Result"





function App() {

  const secretNum = Math.floor(Math.random()*10)

          const [term,setTerm] =  useState("")


            const handleChange =(e)=>{

              setTerm(e.target.value)

            }
 

  return (
    <>
    <div className="container">
      <div className="head">

        <label htmlFor="term">Guess the number between 1 to 10   </label>

      </div>

      <input id="term" type="text" onChange={handleChange}   name="term"/>
      <Result secretNum={secretNum } term={term} />
    </div>
     
    </>
  )
}

export default App
