import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {buyLaptop} from './reducer.js'
const SimpleReducer = () => {
    // for direct button
    const LaptopQty = useSelector( (state) => state.laptopQty)
    const dispatch = useDispatch()

    const bought = () => {
      dispatch(buyLaptop())
    }


  return (
    <div>
        <h1>SimpleReducer</h1>
        <span>{`current Laptop Qty ${LaptopQty}`}</span>
        <button type="button" onClick={bought}>Buy 1 Laptop Now!</button>

    </div>
  )
}

export default SimpleReducer