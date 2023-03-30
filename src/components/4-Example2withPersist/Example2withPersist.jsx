import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyLaptop} from './reducer.js'
const SimpleReducerWithPayload = () => {
    const [inputQty, setinputQty] = useState(1)

    const LaptopQty = useSelector( (state) => state.laptopQty)
    const dispatch = useDispatch()

    const bought = () => {

      dispatch(buyLaptop(inputQty))

    }

    const changeHandler = (e) => {

      setinputQty(e.target.value)

    }

    


  return (
    <div>
        <h1>Simple Reducer With Payload</h1>

        <span>{`current Laptop Qty ${LaptopQty}`}</span>

        <input type="number" min={1} onChange={changeHandler} value={inputQty} />

        <button type="button" onClick={bought}>{`Buy ${inputQty} Laptop Now!`}</button>

    </div>
  )
}

export default SimpleReducerWithPayload