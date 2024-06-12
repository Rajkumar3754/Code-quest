import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,incrementbyAmount} from './CounterSlice'
import { useState } from 'react'



const Counter = () => {

    const count = useSelector((state)=>state.counter.count)

    const dispatch = useDispatch()

    const [incrementAmount,setincrementAmount] = useState(0)
    const addValue = Number(incrementAmount) || 0;
    const resetAll = ()=>{

      setincrementAmount(0)
      dispatch(reset())
    }

  return (
   <section>

    
    <button onClick={()=>dispatch(increment())}>+</button>
    <p>{count}</p>
    <button onClick={()=>dispatch(decrement())} >-</button>

    <input type="text" value={incrementAmount}  onChange={(e)=>setincrementAmount(e.target.value)}/>
   <div>
    <button onClick={()=>dispatch(incrementbyAmount(addValue))}>Addamount</button>
    <button onClick={resetAll}>Reset</button>
   
   </div>
   
   </section>
  )
}

export default Counter
